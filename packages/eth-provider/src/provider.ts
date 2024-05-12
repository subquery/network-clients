// Copyright 2020-2023 SubQuery Pte Ltd authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { Networkish } from '@ethersproject/networks';
import { deepCopy } from '@ethersproject/properties';
import { JsonRpcProvider } from '@ethersproject/providers';
import { ConnectionInfo, fetchJson } from '@ethersproject/web';
import {
  ChannelState,
  IStore,
  Logger,
  OrderManager,
  OrderType,
  ProjectType,
  ResponseFormat,
  ScoreType,
  State,
  generateUniqueId,
  silentLogger,
} from '@subql/network-support';
import { Base64 } from 'js-base64';

function getResult(payload: {
  error?: { code?: number; data?: any; message?: string };
  result?: any;
}): any {
  if (payload.error) {
    // @TODO: not any
    const error: any = new Error(payload.error.message);
    error.code = payload.error.code;
    error.data = payload.error.data;
    throw error;
  }
  return payload.result;
}

interface Options {
  deploymentId: string;
  authUrl: string; // auth service url
  logger?: Logger; // logger for `AuthLink`
  fallbackUrl?: string | ConnectionInfo; // fall back service url for `AuthLink`
  scoreStore?: IStore; // pass store in, so it doesn't get lost between page refresh
  stateStore?: IStore;
  maxRetries?: number;
  network?: Networkish;
}

const MAX_RETRIES = 3;

export class SubqueryAuthedRpcProvider extends JsonRpcProvider {
  protected logger: Logger;
  protected fallbackUrl?: string | ConnectionInfo;
  protected maxRetries: number;
  protected orderManager: OrderManager;

  constructor(opt: Options) {
    super(undefined, opt.network);
    this.logger = opt.logger ? opt.logger : silentLogger();
    this.fallbackUrl = opt.fallbackUrl;
    this.maxRetries = opt.maxRetries ?? MAX_RETRIES;
    this.orderManager = new OrderManager({
      authUrl: opt.authUrl,
      projectId: opt.deploymentId,
      projectType: ProjectType.deployment,
      logger: this.logger,
      responseFormat: ResponseFormat.Wrapped,
      scoreStore: opt.scoreStore,
      stateStore: opt.stateStore,
    });
  }

  override async send(method: string, params: Array<any>): Promise<any> {
    const request = {
      method: method,
      params: params,
      id: this._nextId++,
      jsonrpc: '2.0',
    };

    this.emit('debug', {
      action: 'request',
      request: deepCopy(request),
      provider: this,
    });

    // We can expand this in the future to any call, but for now these
    // are the biggest wins and do not require any serializing parameters.
    const cache = ['eth_chainId', 'eth_blockNumber'].indexOf(method) >= 0;
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment, @typescript-eslint/no-misused-promises
    if (cache && (await super._cache[method])) {
      return super._cache[method];
    }
    let retries = 0;
    const requestId = generateUniqueId();
    const requestResult: () => Promise<string> = async () => {
      const requestParams = await this.orderManager.getRequestParams(requestId);
      if (requestParams) {
        const { url, headers, type, runner, channelId } = requestParams;
        try {
          const result = await this._send(
            {
              url,
              headers,
            },
            request,
            {
              type,
              channelId,
            }
          );

          if (!result) {
            throw new Error('Request RPC error');
          }
          this.orderManager.updateScore(runner, ScoreType.SUCCESS);
          return result;
        } catch (err) {
          if (retries < this.maxRetries) {
            this.orderManager.updateScore(runner, ScoreType.RPC);
            retries += 1;
            return requestResult();
          }
          if (this.fallbackUrl) {
            const result = await this._send(this.fallbackUrl, request);
            return result;
          } else {
            throw err;
          }
        }
      }
    };

    const result = await requestResult();
    // Cache the fetch, but clear it on the next event loop
    if (cache) {
      this._cache[method] = new Promise((resolve) => resolve(result));
      setTimeout(() => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        super._cache[method] = null;
      }, 50);
    }
    return result;
  }

  async _send(
    url: string | ConnectionInfo,
    request: unknown,
    options?: {
      type?: OrderType;
      channelId?: string;
    }
  ): Promise<any> {
    const type = options?.type;
    const channelId = options?.channelId;
    let result;
    try {
      result = await fetchJson(url, JSON.stringify(request), (payload, resp) => {
        let res = payload;
        if (type === OrderType.flexPlan) {
          [res] = this.orderManager.extractChannelState(
            payload,
            new Headers(resp.headers),
            channelId
          );
        }
        if (typeof res === 'string') {
          res = JSON.parse(res);
        }
        // is Agreement
        if (type === OrderType.agreement) {
          res = {
            ...res,
            ...JSON.parse(Base64.decode(res.result)),
          };
        }
        return getResult(res);
      }).then((result) => {
        this.emit('debug', {
          action: 'response',
          request: request,
          response: result,
          provider: this,
        });
        return result;
      });
    } catch (error) {
      this.logger.debug({
        action: 'response',
        error: error,
        request: request,
        provider: this,
      });
      throw error;
    }
    return result;
  }
}
