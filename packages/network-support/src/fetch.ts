// Copyright 2020-2022 SubQuery Pte Ltd authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { OrderManager, ResponseFormat } from './orderManager';
import { customFetch, generateUniqueId, Logger, safeJSONParse } from './utils';
import { OrderType, RequestParam } from './types';
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
  traceId?: string,
  hv?: string
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
        try {
          requestParams = await orderManager.getRequestParams(requestId, proxyVersion, {
            traceId,
            retries,
          });
        } catch (err: any) {
          logger?.error({
            type: 'request_param_error',
            deploymentId: orderManager.getProjectId(),
            requestId,
            retry: retries,
            traceId,
            error: err.message,
          });
          retries++;
          return requestResult();
        }
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
      let limit = 0;
      let limitRemain = 0;

      try {
        if (type === OrderType.fallback) {
          logger?.info({
            type: 'to_fallback',
            deploymentId: orderManager.getProjectId(),
            indexer: runner,
            requestId,
            fallbackServiceUrl: orderManager.fallbackServiceUrl,
            retry: retries,
            traceId,
          });
        }

        if (type === OrderType.agreement) {
          logger?.info({
            type: 'to_agreement',
            deploymentId: orderManager.getProjectId(),
            indexer: runner,
            agrId: channelId,
            requestId,
            fallbackServiceUrl: orderManager.fallbackServiceUrl,
            retry: retries,
            traceId,
          });
        }

        const before = Date.now();
        const _res = await customFetch(
          url,
          {
            headers: {
              'x-hv': hv || '',
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
        limit = Number(_res.headers.get('x-ratelimit-limit-second')) || 0;
        limitRemain = Number(_res.headers.get('x-ratelimit-remaining-second')) || 0;

        let res: object | undefined;
        if (type === OrderType.flexPlan) {
          [res] = orderManager.extractChannelState(
            await _res.text(),
            new Headers(_res.headers),
            channelId,
            {
              traceId,
              requestId,
              deploymentId: orderManager.getProjectId(),
              indexer: runner,
              body: JSON.stringify(body),
            }
          );
        }
        if (type === OrderType.agreement) {
          const data = await _res.json();
          // proxy error will return like:
          // { code: 1006, error: 'Auth expired' } status: 400
          // { code: 1051, error: 'Exceed daily limit' } status: 400
          if (data.error) {
            throw new Error(JSON.stringify(data));
          }
          res = data;
          // todo: need to confirm
          // res = {
          //   ...data,
          //   ...JSON.parse(Base64.decode(data.result)),
          // };
        }
        if (type === OrderType.fallback) {
          logger?.info({
            type: 'res_fallback',
            deploymentId: orderManager.getProjectId(),
            indexer: runner,
            requestId,
            retry: retries,
            fallbackServiceUrl: orderManager.fallbackServiceUrl,
            traceId,
            status: _res.status,
          });
          res = await _res.json();
        }

        if (type !== OrderType.fallback) {
          orderManager.updateScore(runner, ScoreType.SUCCESS, httpVersion);
          orderManager.updateRatelimit(runner, limit, limitRemain, type);
        }

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
            traceId,
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
        // logger?.warn(e);
        errorMsg = (e as Error)?.message || '';

        if (!triedFallback && (retries < maxRetries || orderManager.fallbackServiceUrl)) {
          const [needRetry, scoreType] = handleErrorMsg(
            errorMsg,
            orderManager,
            requestParams,
            resHeaders,
            {
              phase: 'response',
              requestId,
              retry: retries,
              causeError: errorMsg,
              traceId,
            }
          );

          if (needRetry) {
            logger?.error({
              type: 'retry',
              deploymentId: orderManager.getProjectId(),
              indexer: runner,
              orderType: type,
              requestId,
              triedFallback,
              retry: retries,
              error: errorMsg,
              stack: e.stack,
              fallbackServiceUrl: orderManager.fallbackServiceUrl,
              traceId,
              scoreType,
            });

            if (scoreType !== ScoreType.NONE) {
              const extraLog = {
                requestId,
                retry: retries,
                error: errorMsg,
                stack: e.stack,
                orderType: type,
                traceId,
              };
              orderManager.updateScore(runner, scoreType, 0, extraLog);
            }
            retries += 1;
            return requestResult();
          }

          logger?.error({
            type: 'throw',
            deploymentId: orderManager.getProjectId(),
            indexer: runner,
            orderType: type,
            requestId,
            triedFallback,
            retry: retries,
            error: errorMsg,
            stack: e.stack,
            fallbackServiceUrl: orderManager.fallbackServiceUrl,
            traceId,
          });

          throw new FetchError(errorMsg, 'SQN');
        }

        logger?.error({
          type: type === OrderType.fallback ? 'error_fallback' : 'throwOut',
          deploymentId: orderManager.getProjectId(),
          indexer: runner,
          requestId,
          orderType: type,
          triedFallback,
          retry: retries,
          error: errorMsg,
          stack: e.stack,
          fallbackServiceUrl: orderManager.fallbackServiceUrl,
          traceId,
        });

        throw new FetchError(`reach max retries.${errorMsg ? ' error: ' + errorMsg : ''}`, 'SQN');
      }
    };

    return requestResult();
  };
}

function handleErrorMsg(
  errorMsg: string,
  orderManager: OrderManager,
  requestParams: RequestParam,
  resHeaders?: Headers,
  logData?: any
): [boolean, ScoreType] {
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
      const { type, channelId, runner } = requestParams;
      // for agreement. { code: 1051, error: 'Exceed daily limit' }
      if (type === OrderType.agreement && errorObj.code === 1051) {
        scoreType = ScoreType.NONE;
        orderManager.setDailyLimitedAgreement(channelId || '');

        // { code: 1006, error: 'Auth expired' }
      } else if (type === OrderType.agreement && errorObj.code === 1006) {
        scoreType = ScoreType.NONE;
        orderManager.refreshAgreementToken(channelId || '', runner, logData);

        // 1057: Exceed rate limit
      } else if (errorObj.code === 1057) {
        scoreType = ScoreType.NONE;
        // set ratemlit remain to 0;
        orderManager.updateRatelimit(requestParams.runner, 1, 0, type);
      } else {
        scoreType = ScoreType.RPC;
      }
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
