// Copyright 2020-2022 SubQuery Pte Ltd authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { OrderManager } from './orderManager';
import { customFetch, generateUniqueId, Logger } from './utils';
import { ChannelState, OrderType } from './types';
import { ScoreType } from './scoreManager';
import { Base64 } from 'js-base64';
import { State } from './stateManager';

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
  logger?: Logger
): (init: RequestInit) => Promise<Response> {
  let retries = 0;
  let triedFallback = false;
  return async function fetch(init: RequestInit): Promise<Response> {
    const requestId = generateUniqueId();
    const requestResult: () => Promise<Response> = async () => {
      if (init.method?.toLowerCase() !== 'post') {
        throw new FetchError(`method not supported`, 'sqn');
      }
      let requestParams;
      if (retries < maxRetries) {
        requestParams = await orderManager.getRequestParams(requestId);
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
          logger?.warn(`fallback to ${orderManager.fallbackServiceUrl}`);
        } else {
          throw new FetchError(`no available order`, 'sqn');
        }
      }
      const { url, headers, type, runner, channelId } = requestParams;
      try {
        const _res = await customFetch(url, {
          headers: {
            ...(init.headers || {}),
            ...headers,
          },
          method: 'post',
          body: init.body,
        });
        let state: State | ChannelState | undefined, res: object;
        if (type === OrderType.flexPlan) {
          [res, state] = orderManager.extractChannelState(
            JSON.parse((await _res.text()) || '{}'),
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

        orderManager.updateScore(runner, ScoreType.SUCCESS);
        if (type === OrderType.flexPlan && channelId && state) {
          void orderManager.syncChannelState(channelId, state);
        }
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
        if (retries < maxRetries || (orderManager.fallbackServiceUrl && !triedFallback)) {
          orderManager.updateScore(runner, ScoreType.RPC);
          retries += 1;
          return requestResult();
        }
        throw new FetchError(`reach max retries`, 'SQN');
      }
    };

    return requestResult();
  };
}
