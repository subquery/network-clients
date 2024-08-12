// Copyright 2020-2022 SubQuery Pte Ltd authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { OrderManager } from './orderManager';
import { customFetch, generateUniqueId, Logger, safeJSONParse, tryStringToJSON } from './utils';
import { ChannelState, OrderType } from './types';
import { ScoreType } from './scoreManager';
import { Base64 } from 'js-base64';
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
  stream?: boolean,
  abortController?: AbortController
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
        const httpVersion = Number(_res.headers.get('httpVersion')) || 1;

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
          const ts = handleStreamResponse(
            runner,
            orderManager,
            type,
            channelId,
            _res,
            // init.signal
            abortController,
            logger
          );
          readableStream = ts.readable;
        } else {
          res = await handleJsonResponse(orderManager, type, channelId, _res);
          orderManager.updateScore(runner, ScoreType.SUCCESS, httpVersion);
        }

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
  // signal?: AbortSignal | null
  abortController?: AbortController,
  logger?: Logger
) {
  const ts = new TransformStream(
    new ProxyTransformer(runner, type, channelId, orderManager, _res, abortController, logger)
  );
  _res.body?.pipeThrough(ts, { signal: abortController?.signal });
  return ts;
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

const OLLAMA_TIIMEOUT = 120 * 1000;

class ProxyTransformer {
  runner: string;
  type: OrderType;
  channelId: string | undefined;
  orderManager: OrderManager;
  res: Response;
  buffer: string;
  abortController?: AbortController;
  errored: boolean;
  erroredMsg: string;
  timeoutHandler: any;
  logger?: Logger;
  testSplit: boolean;
  testSplitBuffer: any[];

  constructor(
    runner: string,
    type: OrderType,
    channelId: string | undefined,
    orderManager: OrderManager,
    res: Response,
    abortController?: AbortController,
    logger?: Logger
  ) {
    this.runner = runner;
    this.type = type;
    this.channelId = channelId;
    this.orderManager = orderManager;
    this.res = res;
    this.buffer = '';
    this.abortController = abortController;
    this.errored = false;
    this.erroredMsg = '';
    this.logger = logger;
    this.timeoutHandler = setTimeout(this.timeoutFunc.bind(this), OLLAMA_TIIMEOUT);

    this.testSplit = false;
    this.testSplitBuffer = [];
  }

  transform(chunk: Uint8Array, controller: TransformStreamDefaultController) {
    // console.log(
    //   ' ============ Received chunk with %d bytes.',
    //   chunk.byteLength,
    //   'error:',
    //   this.errored
    // );
    if (this.errored) return;

    if (this.type === OrderType.flexPlan) {
      const str = new TextDecoder().decode(chunk);
      this.buffer += str;
      const parts = this.buffer.split('\n\n');
      this.buffer = parts.pop() ?? '';

      if (this.testSplit && !this.errored) {
        for (const buffer of this.testSplitBuffer) {
          controller.enqueue(buffer);
        }
        this.testSplitBuffer = [];
      }

      let i = 0;
      const len = parts.length;
      for (const part of parts) {
        let errorMsg = '';
        let stop = false;
        i++;
        try {
          this.handleMessage(part);
        } catch (err) {
          errorMsg = (err as Error)?.message || '';
          stop = true;
        }
        if (errorMsg) {
          this.setError(errorMsg);
          return;
        }
        if (stop) continue;

        if (this.testSplit && i === len) {
          const pivot = Math.floor(part.length / 2);
          controller.enqueue(new TextEncoder().encode(`${part.slice(0, pivot)}`));
          // controller.enqueue(new TextEncoder().encode(`${part.slice(pivot)}\n\n`));
          // console.log(
          //   'split:',
          //   ' before:',
          //   part.slice(0, pivot),
          //   ' split after:',
          //   part.slice(pivot)
          // );
          // this.testSplitBuffer.push(new TextEncoder().encode(`${part.slice(0, pivot)}`));
          this.testSplitBuffer.push(new TextEncoder().encode(`${part.slice(pivot)}\n\n`));
          continue;
        }
        controller.enqueue(new TextEncoder().encode(`${part}\n\n`));
      }
    }
    // controller.enqueue(chunk);
  }

  private checkSuccess(success: boolean, message: string) {
    if (!success) {
      throw new Error(`invalid json: ${message}`);
    }
  }

  private checkState(result: any) {
    if (this.channelId && result.state) {
      let state: State | ChannelState;
      try {
        state = JSON.parse(Base64.decode(result.state)) as ChannelState;
      } catch (e) {
        state = {
          authorization: result.state,
        } as State;
      }
      this.orderManager.syncChannelState(this.channelId, state);
      throw new Error('');
    }
  }

  private checkError(result: any) {
    if (result?.error && typeof result?.error === 'object') {
      result = result.error as { code: number; message: string };
    }
    if (result?.code && (result?.error || result?.message)) {
      let [scoreType] = [ScoreType.RPC];
      [scoreType] = parseErrorObj(result);
      this.orderManager.updateScore(this.runner, scoreType);
      if (result.code === 1050 && [result?.error, result?.message].includes('PAYG conflict')) {
        this.orderManager.getStateManager().forceReportInactiveState(this.channelId);
      }
      throw new Error(JSON.stringify(result));
    }
  }

  handleMessage(message: string) {
    const { success, result } = tryStringToJSON(message.slice(5));

    // console.log('success:', success, ' result:', result);
    this.checkSuccess(success, message);
    this.checkState(result);
    this.checkError(result);
  }

  setError(msg: string) {
    this.errored = true;
    this.erroredMsg = msg;
  }

  flush(controller: TransformStreamDefaultController) {
    // console.log('------- flush ------ ', 'error:', this.errored);

    if (!this.errored) {
      if (this.testSplit) {
        for (const buffer of this.testSplitBuffer) {
          controller.enqueue(buffer);
        }
        this.testSplitBuffer = [];
      }
      for (const part of this.buffer.split('\n\n').filter((p) => p !== '')) {
        let errorMsg = '';
        let stop = false;
        try {
          this.handleMessage(part);
        } catch (err) {
          errorMsg = (err as Error)?.message || '';
          stop = true;
        }
        if (errorMsg) {
          this.setError(errorMsg);
          break;
        }
        if (stop) continue;
        controller.enqueue(new TextEncoder().encode(`${part}\n\n`));
      }
    }

    if (!this.errored) {
      controller.enqueue(null);

      const httpVersion = Number(this.res.headers.get('httpVersion')) || 1;
      this.orderManager.updateScore(this.runner, ScoreType.SUCCESS, httpVersion);

      return;
    }
    this.abortController?.abort(this.erroredMsg);
  }

  timeoutFunc() {
    clearTimeout(this.timeoutHandler);
    this.abortController?.abort(`aborted. duration over ${OLLAMA_TIIMEOUT}s`);
  }
}
