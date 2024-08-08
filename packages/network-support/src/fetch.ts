// Copyright 2020-2022 SubQuery Pte Ltd authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { OrderManager, ResponseFormat } from './orderManager';
import { customFetch, generateUniqueId, Logger, safeJSONParse, tryUint8ArrayToJSON } from './utils';
import { ChannelState, OrderType, WrappedResponse } from './types';
import { ScoreType } from './scoreManager';
import { Base64 } from 'js-base64';
import assert from 'assert';
import { State } from './stateManager';

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
  overrideFetch?: typeof fetch,
  stream?: boolean
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
            body: JSON.stringify(body),
          },
          overrideFetch
        );
        const after = Date.now();

        let res: object;
        let readableStream: ReadableStream | null = null;
        stream =
          stream ||
          _res.headers.get('X-Response-Format') === 'stream' ||
          _res.headers.get('x-response-format') === 'stream' ||
          _res.headers.get('Content-Type')?.includes('text/event-stream') ||
          _res.headers.get('content-type')?.includes('text/event-stream') ||
          _res.headers.get('Content-Type')?.includes('application/x-ndjson') ||
          _res.headers.get('content-type')?.includes('application/x-ndjson');

        if (stream) {
          // setFetchTimeout(120000); // TODO: can only work after first request
          // orderManager.extractChannelState({}, new Headers(_res.headers), channelId);
          _res.headers.set('Content-Type', 'text/event-stream');
          _res.headers.set('X-Response-Format', 'stream');
          _res.headers.set('Transfer-Encoding', 'chunked');
          readableStream = handleStreamResponse(
            runner,
            orderManager,
            type,
            channelId,
            _res,
            init.signal
          );
        } else {
          res = await handleJsonResponse(orderManager, type, channelId, _res);
        }

        const httpVersion = Number(_res.headers.get('httpVersion')) || 1;
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
          body: readableStream,
          json: () => res,
          text: () => undefined,
        } as unknown as Response;
      } catch (e) {
        logger?.warn(e);
        errorMsg = (e as Error)?.message || '';

        const allMsg = `${requestId} ${errorMsg}`;
        if (!triedFallback && (retries < maxRetries || orderManager.fallbackServiceUrl)) {
          const errorObj = safeJSONParse(errorMsg);

          let [scoreType, needRetry] = [ScoreType.RPC, true];
          if (errorObj?.code && (errorObj?.error || errorObj?.message)) {
            [scoreType, needRetry] = parseErrorObj(errorObj);
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

function handleStreamResponse(
  runner: string,
  orderManager: OrderManager,
  type: OrderType,
  channelId: string | undefined,
  _res: Response,
  signal?: AbortSignal | null
) {
  handleInline(_res, channelId, orderManager);
  return new ReadableStream({
    start(controller) {
      let timeout: any = null;
      _res.body?.pipeTo(
        new WritableStream({
          write(chunk) {
            if (type === OrderType.flexPlan) {
              const { success, result } = tryUint8ArrayToJSON(chunk, /^data: /);

              if (success && channelId && result.state) {
                orderManager.syncChannelState(
                  channelId,
                  JSON.parse(Base64.decode(result.state)) as ChannelState
                );
                return;
              }

              if (success && _res.headers) {
                let payload = result;
                switch (_res.headers.get('X-Indexer-Response-Format')) {
                  case ResponseFormat.Wrapped: {
                    if ('result' in result && 'signature' in result && 'state' in result) {
                      const body = result as WrappedResponse;
                      const state = JSON.parse(Base64.decode(body.state)) as ChannelState;
                      if (channelId) orderManager.syncChannelState(channelId, state);
                      // return [JSON.parse(Base64.decode(body.result)), state, body.signature];
                    }
                    break;
                  }
                  case undefined: {
                    const body = result;
                    const state = body.state;
                    if (channelId && state) orderManager.syncChannelState(channelId, state);
                    // return [body, state, ''];
                    break;
                  }
                  default:
                    if ((result as any).error && typeof (result as any).error === 'object') {
                      payload = (payload as any).error as { code: number; message: string };
                    }

                    if ((payload as any).code) {
                      if (
                        (payload as any).code === 1050 &&
                        ((payload as any).error === 'PAYG conflict' ||
                          (payload as any).message === 'PAYG conflict')
                      ) {
                        orderManager.getStateManager().forceReportInactiveState(channelId);
                      }
                      controller.error(new Error(JSON.stringify(payload)));
                    } else {
                      controller.error(new Error('invalid X-Indexer-Response-Format'));
                    }
                    return;
                }
              }

              if (success && result?.code && (result?.error || result?.message)) {
                let [scoreType] = [ScoreType.RPC];
                [scoreType] = parseErrorObj(result);
                orderManager.updateScore(runner, scoreType);
                return;
              }
            }
            controller.enqueue(chunk);
          },
          close() {
            // controller.close();
            controller.enqueue(null);
            clearTimeout(timeout);
          },
          abort(reason) {
            controller.error(reason);
            clearTimeout(timeout);
          },
        })
      );
      signal?.addEventListener('abort', () => {
        controller.error(new Error('Request stream aborted'));
        clearTimeout(timeout);
      });
      timeout = setTimeout(() => {
        controller.error(new Error('Request timeout'));
      }, 120000);
    },
  });
}

async function handleJsonResponse(
  orderManager: OrderManager,
  type: OrderType,
  channelId: string | undefined,
  _res: Response
) {
  let res: any;
  if (type === OrderType.flexPlan) {
    [res] = orderManager.extractChannelState(
      await _res.text(),
      new Headers(_res.headers),
      channelId
    );
  } else if (type === OrderType.agreement) {
    const data = await _res.json();
    // todo: need to confirm
    res = {
      ...data,
      ...JSON.parse(Base64.decode(data.result)),
    };
  } else if (type === OrderType.fallback) {
    res = await _res.json();
  }
  return res;
}

function parseErrorObj(errorObj: any): [ScoreType, boolean] {
  let needRetry = true;
  let scoreType = ScoreType.RPC;

  if (fatalErrorCodes.has(errorObj.code)) {
    scoreType = ScoreType.FATAL;
  } else if (rpcErrorCodes.has(errorObj.code)) {
    scoreType = ScoreType.RPC;
  } else {
    needRetry = false;
  }
  return [scoreType, needRetry];
}

function handleInline(_res: Response, channelId: string | undefined, orderManager: OrderManager) {
  if (_res.headers.get('X-Indexer-Response-Format') === ResponseFormat.Inline) {
    const _state = _res.headers.get('X-Channel-State');
    assert(_state, 'invalid response, missing channel state');
    let state: State | ChannelState;
    try {
      state = JSON.parse(Base64.decode(_state)) as ChannelState;
    } catch (e) {
      state = {
        authorization: _state,
      } as State;
    }
    if (channelId) orderManager.syncChannelState(channelId, state);
    // const _signature = headers.get('X-Indexer-Sig') || '';
    // assert(_signature, 'invalid response, missing channel signature');
    // return [typeof payload === 'string' ? JSON.parse(payload) : payload, state, _signature];
  }
}
