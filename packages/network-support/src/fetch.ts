// Copyright 2020-2022 SubQuery Pte Ltd authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { OrderManager, ResponseFormat } from './orderManager';
import { customFetch, generateUniqueId, Logger, safeJSONParse } from './utils';
import { OrderType } from './types';
import { ScoreType } from './scoreManager';
import { Base64 } from 'js-base64';
import { ActiveType } from './stateManager';

// prettier-ignore
const fatalErrorCodes = new Set([
  1010, 1011, 1012, 1021,
  1032,
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
  overrideFetch?: typeof fetch,
  rid?: string
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
      for (const b of body) {
        if (b.id) {
          b.id = isNaN(Number(b.id)) ? b.id : Number(b.id);
        }
      }
    } else {
      if (body.id) {
        body.id = isNaN(Number(body.id)) ? body.id : Number(body.id);
      }
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
      let resHeaders: Headers | undefined;

      try {
        if (type === OrderType.fallback) {
          logger?.info({
            type: 'to_fallback',
            deploymentId: orderManager.getProjectId(),
            indexer: runner,
            requestId,
            fallbackServiceUrl: orderManager.fallbackServiceUrl,
            retry: retries,
            rid,
          });
        }

        const before = Date.now();
        const _res = await customFetch(
          url,
          {
            headers: {
              'x-reqwst-id': requestId,
              ...(init.headers || {}),
              ...headers,
            },
            method: 'post',
            body: JSON.stringify(body),
          },
          overrideFetch
        );
        const after = Date.now();
        resHeaders = _res.headers;
        httpVersion = Number(_res.headers.get('httpVersion')) || 1;

        let res: object | undefined;
        if (type === OrderType.flexPlan) {
          [res] = orderManager.extractChannelState(
            await _res.text(),
            new Headers(_res.headers),
            channelId,
            {
              rid,
              requestId,
              deploymentId: orderManager.getProjectId(),
              indexer: runner,
              body: JSON.stringify(body),
            }
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
          logger?.info({
            type: 'res_fallback',
            deploymentId: orderManager.getProjectId(),
            indexer: runner,
            requestId,
            retry: retries,
            fallbackServiceUrl: orderManager.fallbackServiceUrl,
            rid,
            status: _res.status,
          });
          res = await _res.json();
        }

        orderManager.updateScore(runner, ScoreType.SUCCESS, httpVersion);
        void orderManager.collectLatency(
          runner,
          after - before,
          Number(_res.headers.get('Content-Length')) || 1
        );

        if (_res.status !== 200 && type === OrderType.fallback) {
          logger?.info({
            type: 'detail_fallback',
            deploymentId: orderManager.getProjectId(),
            status: _res.status,
            retry: retries,
            fallbackServiceUrl: orderManager.fallbackServiceUrl,
            body: JSON.stringify(body),
            res: JSON.stringify(res),
            rid,
          });
        }

        return {
          status: _res.status,
          headers: _res.headers,
          ok: _res.ok,
          body: null,
          json: () => res,
          text: () => undefined,
        } as unknown as Response;
      } catch (e: any) {
        logger?.warn(e);
        errorMsg = (e as Error)?.message || '';

        if (!triedFallback && (retries < maxRetries || orderManager.fallbackServiceUrl)) {
          const [needRetry, scoreType] = handleErrorMsg(errorMsg, resHeaders);

          if (needRetry) {
            logger?.error({
              type: 'retry',
              deploymentId: orderManager.getProjectId(),
              indexer: runner,
              requestId,
              triedFallback,
              retry: retries,
              error: errorMsg,
              stack: e.stack,
              fallbackServiceUrl: orderManager.fallbackServiceUrl,
              rid,
              scoreType,
            });
            const extraLog = {
              requestId,
              retry: retries,
              error: errorMsg,
              stack: e.stack,
            };

            orderManager.updateScore(runner, scoreType, 0, extraLog);
            retries += 1;
            return requestResult();
          }

          logger?.error({
            type: 'throw',
            deploymentId: orderManager.getProjectId(),
            indexer: runner,
            requestId,
            triedFallback,
            retry: retries,
            error: errorMsg,
            stack: e.stack,
            fallbackServiceUrl: orderManager.fallbackServiceUrl,
            rid,
          });

          throw new FetchError(errorMsg, 'SQN');
        }

        logger?.error({
          type: type === OrderType.fallback ? 'error_fallback' : 'throwOut',
          deploymentId: orderManager.getProjectId(),
          indexer: runner,
          requestId,
          triedFallback,
          retry: retries,
          error: errorMsg,
          stack: e.stack,
          fallbackServiceUrl: orderManager.fallbackServiceUrl,
          rid,
        });

        throw new FetchError(`reach max retries.${errorMsg ? ' error: ' + errorMsg : ''}`, 'SQN');
      }
    };

    return requestResult();
  };
}

function handleErrorMsg(errorMsg: string, resHeaders?: Headers): [boolean, ScoreType] {
  let needRetry = true;
  let scoreType = ScoreType.RPC;
  const errorObj = safeJSONParse(errorMsg);

  if (errorObj?.code && (errorObj?.error || errorObj?.message)) {
    if (fatalErrorCodes.has(errorObj.code)) {
      scoreType = ScoreType.FATAL;
      if (errorObj.code === 1011) {
        [needRetry, scoreType] = handle1011Error(
          errorObj?.error || errorObj?.message,
          needRetry,
          scoreType
        );
      }
    } else if (rpcErrorCodes.has(errorObj.code)) {
      scoreType = ScoreType.RPC;
    } else {
      needRetry = false;
    }
  } else {
    const fmt = resHeaders?.get('X-Indexer-Response-Format');
    const state = resHeaders?.get('X-Channel-State');
    if (fmt === ResponseFormat.Inline && state) {
      const data = Base64.toUint8Array(state);
      const active = data[0] as ActiveType;
      if (active === ActiveType.Inactive2) {
        scoreType = ScoreType.FATAL_INACTIVE;
      }
    }
  }
  return [needRetry, scoreType];
}

function handle1011Error(
  message: string,
  rawNeedRetry: boolean,
  rawScoreType: ScoreType
): [overrideRetry: boolean, overrideScoreType: ScoreType] {
  message = message || '';
  let obj = null;
  if (message.startsWith('GraphQL internal:')) {
    obj = safeJSONParse(message.slice(17));
  } else if (message.startsWith('GraphQL query:')) {
    obj = safeJSONParse(message.slice(14));
  }
  if (!obj) return [rawNeedRetry, rawScoreType];

  // -32600: Invalid Request
  // -32601: Method not found
  // -32602: Invalid params
  if (obj.error?.code === -32600 || obj.error?.code === -32601 || obj.error?.code === -32602) {
    return [false, ScoreType.NONE];
  }

  // graphql syntax error
  if (Array.isArray(obj.errors)) {
    const exists = obj.errors.find((e: any) => e.extensions?.code === 'GRAPHQL_VALIDATION_FAILED');
    if (exists) return [false, ScoreType.NONE];
  }

  return [true, ScoreType.FATAL];
}
