// Copyright 2020-2022 SubQuery Pte Ltd authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { OrderManager } from './orderManager';
import { customFetch, generateUniqueId, Logger, safeJSONParse } from './utils';
import { OrderType } from './types';
import { ScoreType } from './scoreManager';
import { Base64 } from 'js-base64';

// prettier-ignore
const fatalErrorCodes = new Set([
  1010, 1011, 1012, 1021,
  1053, 1054, 1055, 1056, 1058, 1059,
  1200, 1201, 1202, 1203,
  1302, 1308, 1312, 1314
]);
const rpcErrorCodes = new Set([1050, 1051, 1052, 1057]);

interface SystemError extends Error {
  code?: string | undefined;
}

export class FetchError extends Error {
  public override name = 'FetchError';
  public type: string;
  public code?: string | undefined;
  public errno?: string | undefined;

  constructor(message: string, type: string, systemError?: SystemError) {
    super(message);
    this.type = type;
    if (systemError) {
      this.code = this.errno = systemError.code;
    }
    Error.captureStackTrace(this, this.constructor);
  }
}

// FetchError.prototype = Object.create(Error.prototype);
// FetchError.prototype.constructor = FetchError;

export function createFetch(
  orderManager: OrderManager,
  maxRetries = 5,
  logger?: Logger,
  overrideFetch?: typeof fetch
): (init: RequestInit) => Promise<Response> {
  let retries = 0;
  let triedFallback = false;
  let errorMsg = '';
  return async function fetch(init: RequestInit): Promise<Response> {
    const requestId = generateUniqueId();

    let proxyVersion = '';
    const body = init.body ? JSON.parse(init.body as string) : {};
    if (Array.isArray(body)) {
      logger?.warn(`${requestId} batch ${(init.body as string).substring(0, 20)}`);
      proxyVersion = 'v2.3.0';
    }

    const requestResult: () => Promise<Response> = async () => {
      if (init.method?.toLowerCase() !== 'post') {
        throw new FetchError(`method not supported`, 'sqn');
      }
      let requestParams;
      if (retries < maxRetries) {
        requestParams = await orderManager.getRequestParams(requestId, proxyVersion);
      }
      if (!requestParams) {
        if (orderManager.fallbackServiceUrl && !triedFallback) {
          triedFallback = true;
          requestParams = {
            url: orderManager.fallbackServiceUrl,
            headers: {},
            type: OrderType.fallback,
            runner: 'fallback',
            channelId: 'fallback',
          };
          logger?.warn(`${requestId} fallback to ${orderManager.fallbackServiceUrl}`);
        } else {
          throw new FetchError(
            `no available order. retries: ${retries}.${errorMsg ? ' error: ' + errorMsg : ''}`,
            'sqn'
          );
        }
      }
      const { url, headers, type, runner, channelId } = requestParams;
      let httpVersion = 1;

      try {
        const before = Date.now();
        const _res = await customFetch(
          url,
          {
            headers: {
              ...(init.headers || {}),
              ...headers,
            },
            method: 'post',
            body: init.body,
          },
          overrideFetch
        );
        const after = Date.now();
        httpVersion = Number(_res.headers.get('httpVersion')) || 1;

        let res: object;
        if (type === OrderType.flexPlan) {
          [res] = orderManager.extractChannelState(
            await _res.text(),
            new Headers(_res.headers),
            channelId
          );
        }
        if (type === OrderType.agreement) {
          const data = await _res.json();
          // todo: need to confirm
          res = {
            ...data,
            ...JSON.parse(Base64.decode(data.result)),
          };
        }
        if (type === OrderType.fallback) {
          res = await _res.json();
        }

        orderManager.updateScore(runner, ScoreType.SUCCESS, httpVersion);
        void orderManager.collectLatency(
          runner,
          after - before,
          Number(_res.headers.get('Content-Length')) || 1
        );

        return {
          status: _res.status,
          headers: _res.headers,
          ok: _res.ok,
          body: null,
          json: () => res,
          text: () => undefined,
        } as unknown as Response;
      } catch (e) {
        logger?.warn(e);
        errorMsg = (e as Error)?.message || '';

        let allMsg = `${requestId} ${errorMsg}`;
        if (!triedFallback && (retries < maxRetries || orderManager.fallbackServiceUrl)) {
          let needRetry = true;
          let scoreType = ScoreType.RPC;
          const errorObj = safeJSONParse(errorMsg);

          if (errorObj?.code && (errorObj?.error || errorObj?.message)) {
            if (fatalErrorCodes.has(errorObj.code)) {
              scoreType = ScoreType.FATAL;
            } else if (rpcErrorCodes.has(errorObj.code)) {
              scoreType = ScoreType.RPC;
            } else {
              needRetry = false;
              allMsg += ` /////error not found////`;
            }
          }
          if (needRetry) {
            orderManager.updateScore(runner, scoreType);
            retries += 1;
            return requestResult();
          }
          logger?.warn(`fetch error: ${allMsg} directly throw`);
          throw new FetchError(errorMsg, 'SQN');
        }
        throw new FetchError(`reach max retries.${errorMsg ? ' error: ' + errorMsg : ''}`, 'SQN');
      }
    };

    return requestResult();
  };
}
