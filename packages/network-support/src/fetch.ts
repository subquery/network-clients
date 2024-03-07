// Copyright 2020-2022 SubQuery Pte Ltd authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { default as _fetch } from 'cross-fetch';
import { OrderManager } from './orderManager';
import { generateUniqueId } from './utils';
import { ChannelState, OrderType } from './types';
import { ScoreType } from './scoreManager';
import { Base64 } from 'js-base64';

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
  maxRetries = 5
): (init: RequestInit) => Promise<Response> {
  let retries = 0;
  return async function fetch(init: RequestInit): Promise<Response> {
    const requestId = generateUniqueId();
    const requestResult: () => Promise<Response> = async () => {
      const requestParams = await orderManager.getRequestParams(requestId);
      if (init.method?.toLowerCase() !== 'post') {
        throw new FetchError(`method not supported`, 'sqn');
      }
      if (!requestParams) {
        throw new FetchError(`no available order`, 'sqn');
      }
      const { url, headers, type, runner } = requestParams;
      try {
        const _res = await _fetch(url, {
          headers: {
            ...(init.headers || {}),
            ...headers,
          },
          method: 'post',
          body: init.body,
        });
        let state: ChannelState | undefined, res: object;
        if (type === OrderType.flexPlan) {
          [res, state] = orderManager.extractChannelState(
            await _res.json(),
            new Headers(_res.headers)
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

        orderManager.updateScore(runner, ScoreType.SUCCESS);
        if (state && type === OrderType.flexPlan) {
          void orderManager.syncChannelState(state);
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
        if (retries < maxRetries) {
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
