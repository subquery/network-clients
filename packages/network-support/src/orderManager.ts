// Copyright 2020-2022 SubQuery Pte Ltd authors & contributors
// SPDX-License-Identifier: Apache-2.0

import assert from 'assert';
import { Base64 } from 'js-base64';
import { ScoreManager, ScoreType } from './scoreManager';
import {
  ChannelState,
  FlexPlanOrder,
  Order,
  OrderType,
  OrderWithType,
  ProjectType,
  RequestParam,
  RequestParamError,
  RunnerSelector,
  ServiceAgreementOrder,
  WrappedResponse,
} from './types';
import { createStore, fetchOrders, isTokenExpired, IStore, Logger, POST } from './utils';
import { BlockType, State, StateManager } from './stateManager';
import { Version } from './utils/version';

export enum ResponseFormat {
  Inline = 'inline',
  Wrapped = 'wrapped',
}

type Options = {
  logger: Logger;
  authUrl: string;
  apikey?: string;
  fallbackServiceUrl?: string;
  projectId: string;
  projectType: ProjectType;
  responseFormat?: ResponseFormat;
  scoreStore?: IStore;
  stateStore?: IStore;
  selector?: RunnerSelector;
  timeout?: number;
};

function tokenToAuthHeader(token: string) {
  return `Bearer ${token}`;
}

export class OrderManager {
  private projectType: ProjectType;

  private _agreements: ServiceAgreementOrder[] = [];
  private _plans: FlexPlanOrder[] = [];

  private logger: Logger;
  private timer: NodeJS.Timeout | undefined;

  private selectedRunnersStore: IStore;
  private scoreManager: ScoreManager;
  private stateManager: StateManager;

  private authUrl: string;
  private apikey?: string;
  private projectId: string;
  private interval = 300_000;
  private healthy = true;
  private selector?: RunnerSelector;
  private responseFormat?: ResponseFormat;
  private timeout = 60000;
  private _init: Promise<void>;

  constructor(private options: Options) {
    const {
      authUrl,
      apikey,
      fallbackServiceUrl,
      projectId,
      logger,
      projectType,
      scoreStore,
      stateStore,
      selector,
      responseFormat,
      timeout = 60000,
    } = this.options;
    this.authUrl = authUrl;
    this.apikey = apikey;
    this.projectId = projectId;
    this.projectType = projectType;
    this.logger = logger;
    this.responseFormat = responseFormat;

    this.selectedRunnersStore = createStore({ ttl: 600_000 });
    this.scoreManager = new ScoreManager({
      logger,
      projectId,
      fallbackServiceUrl,
      scoreStore,
    });
    this.stateManager = new StateManager({
      logger,
      authUrl,
      projectId,
      apikey,
      stateStore,
    });

    this._init = this.refreshOrders();
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    this.timer = setInterval(() => this.refreshOrders(), this.interval);
    this.selector = selector;
    this.timeout = timeout;
  }

  get agreements(): ServiceAgreementOrder[] {
    let result: ServiceAgreementOrder[] = this._agreements;
    if (this.selector?.agreements?.length) {
      result = result.filter((a) => this.selector?.agreements?.includes(a.id));
    }
    if (this.selector?.runnerAddresses?.length) {
      result = result.filter(
        (a) =>
          !!this.selector?.runnerAddresses?.find(
            (addr) => addr.toLowerCase() === a.indexer.toLowerCase()
          )
      );
    }

    return result;
  }

  get plans(): FlexPlanOrder[] {
    let result: FlexPlanOrder[] = this._plans;
    if (this.selector?.channelIds?.length) {
      result = result.filter((p) => this.selector?.channelIds?.includes(p.id));
    }
    if (this.selector?.runnerAddresses?.length) {
      result = result.filter(
        (p) =>
          !!this?.selector?.runnerAddresses?.find(
            (addr) => addr.toLowerCase() === p.indexer.toLowerCase()
          )
      );
    }
    return result;
  }

  get fallbackServiceUrl(): string | undefined {
    return this.options.fallbackServiceUrl;
  }

  private async refreshOrders() {
    try {
      const orders = await fetchOrders(this.authUrl, this.projectId, this.projectType, this.apikey);
      if (orders.agreements && orders.agreements.length > 0) {
        this._agreements = orders.agreements;
      }
      if (orders.plans && orders.plans.length > 0) {
        this._plans = orders.plans;
      }
      this.healthy = true;
    } catch (e) {
      // it seems cannot reach this code, fetchOrders already handle the errors.
      this.logger?.error(`fetch orders failed: ${String(e)}`);
      this.healthy = false;
    }
  }

  private async filterOrdersByRequestId(requestId: string, orders: Order[]) {
    if (!requestId) return orders;
    const selected = await this.getSelectedRunners(requestId);
    return orders.filter(({ indexer }) => !selected.includes(indexer));
  }

  async getRequestParams(requestId: string): Promise<RequestParam | undefined> {
    const innerRequest = async () => {
      const order = await this.getNextOrder(requestId);
      const headers: RequestParam['headers'] = {};
      if (order) {
        const { type, indexer: runner, url, id, metadata } = order;
        if (type === OrderType.agreement) {
          const channelId = id;
          headers['X-Indexer-Response-Format'] = this.responseFormat ?? 'inline';
          let { token } = order as ServiceAgreementOrder;
          if (isTokenExpired(token)) {
            try {
              token = await this.refreshAgreementToken(id, runner);
            } catch (error) {
              this.logger?.debug(`request new token for indexer ${runner} and url: ${url} failed`);
              throw new RequestParamError((error as any).message, runner);
            }
          }
          headers.authorization = tokenToAuthHeader(token);
          return { url, runner, channelId, headers, type } as RequestParam;
        } else if (type === OrderType.flexPlan) {
          const channelId = id;
          headers['X-Indexer-Response-Format'] = this.responseFormat ?? 'inline';
          try {
            const higherVersion = Version.gte(metadata.proxyVersion, 'v2.1.0');
            const signedState = await this.stateManager.getSignedState(
              channelId,
              higherVersion ? BlockType.Multiple : BlockType.Single
            );
            const { authorization } = signedState;
            headers.authorization = authorization;
            headers['X-Channel-Block'] = higherVersion ? 'multiple' : 'single';
            const convertResult = this.stateManager.tryConvertJson(authorization);
            if (convertResult.error) {
              throw new Error(convertResult.error);
            }
            if (higherVersion && this.stateManager.tryConvertJson(authorization).success) {
              headers['X-Channel-Block'] = 'single';
            }
            if (headers['X-Channel-Block'] === 'single') {
              this.logger?.debug(
                `requested state signature of [${headers['X-Channel-Block']}] for runner ${runner}`
              );
            }
            return {
              type,
              url,
              runner,
              channelId,
              headers,
            } as RequestParam;
          } catch (error) {
            this.logger?.debug(`request state signature for runner ${runner} failed`);
            this.logger?.debug(error);
            throw new RequestParamError((error as any).message, runner);
          }
        }
      }
    };

    // innerRequest includes multi promise tasks. we want timeout once.
    const raceAwait = await Promise.race<RequestParam | 'timeout' | undefined>([
      innerRequest(),
      new Promise((resolve) => setTimeout(() => resolve('timeout'), this.timeout)),
    ]);

    if (raceAwait === 'timeout') {
      this.logger?.debug(`request order timeout`);
      return undefined;
    }

    return raceAwait;
  }

  extractChannelState(
    payload: string | object,
    headers: Headers,
    channelId?: string
  ): [object, State | ChannelState, string] {
    switch (headers.get('X-Indexer-Response-Format')) {
      case ResponseFormat.Wrapped: {
        const body = (
          typeof payload === 'string' ? JSON.parse(payload) : payload
        ) as WrappedResponse;
        const state = JSON.parse(Base64.decode(body.state)) as ChannelState;
        if (channelId) this.syncChannelState(channelId, state);
        return [JSON.parse(Base64.decode(body.result)), state, body.signature];
      }
      case ResponseFormat.Inline: {
        const _state = headers.get('X-Channel-State');
        assert(_state, 'invalid response, missing channel state');
        let state: State | ChannelState;
        try {
          state = JSON.parse(Base64.decode(_state)) as ChannelState;
        } catch (e) {
          state = {
            authorization: _state,
          } as State;
        }
        if (channelId) this.syncChannelState(channelId, state);
        const _signature = headers.get('X-Indexer-Sig') || '';
        assert(_signature, 'invalid response, missing channel signature');
        return [typeof payload === 'string' ? JSON.parse(payload) : payload, state, _signature];
      }
      case undefined: {
        const body = typeof payload === 'string' ? JSON.parse(payload) : payload;
        const state = body.state;
        if (channelId) this.syncChannelState(channelId, state);
        return [body, state, ''];
      }
      default:
        if (
          (typeof payload === 'object' && (payload as any).code) ||
          (typeof payload === 'string' && JSON.parse(payload).code)
        ) {
          throw new Error(JSON.stringify(payload));
        } else {
          throw new Error('invalid X-Indexer-Response-Format');
        }
    }
  }

  async syncChannelState(channelId: string, state: State | ChannelState): Promise<void> {
    await this.stateManager.syncState(channelId, state);
  }

  private async getNextOrder(requestId: string): Promise<OrderWithType | undefined> {
    await this._init;
    const agreementsOrders = await this.getNextAgreement(requestId);
    if (agreementsOrders) {
      return { ...agreementsOrders, type: OrderType.agreement };
    }
    const flexPlanOrders = await this.getNextPlan(requestId);
    if (flexPlanOrders) {
      return { ...flexPlanOrders, type: OrderType.flexPlan };
    }
    return undefined;
  }

  private async getNextAgreement(requestId: string): Promise<ServiceAgreementOrder | undefined> {
    await this._init;

    if (!this.agreements) return;

    const agreements = await this.filterOrdersByRequestId(requestId, this.agreements);
    this.logger?.debug(`available agreements count: ${agreements.length}`);

    if (!this.healthy || !agreements.length) return;

    const agreement = (await this.selectRunner(agreements)) as ServiceAgreementOrder;

    this.logger?.debug(`next agreement: ${JSON.stringify(agreement.indexer)}`);

    if (agreement) {
      await this.updateSelectedRunner(requestId, agreement.indexer);
    }

    return agreement;
  }

  private async getNextPlan(requestId: string): Promise<FlexPlanOrder | undefined> {
    await this._init;

    if (!this.plans) return;

    const plans = await this.filterOrdersByRequestId(requestId, this.plans);
    this.logger?.debug(`available plans count: ${plans.length}`);

    if (!this.healthy || !plans?.length) return;

    const plan = await this.selectRunner(plans);

    if (plan) {
      await this.updateSelectedRunner(requestId, plan.indexer);
    }

    return plan;
  }

  private async selectRunner(orders: Order[]): Promise<Order | undefined> {
    if (!orders.length) return;
    const scores = await Promise.all(orders.map((o) => this.scoreManager.getBonusScore(o.indexer)));
    const random = Math.random() * scores.reduce((a, b) => a + b, 0);
    this.logger?.debug(`selectRunner: indexers: ${orders.map((o) => o.indexer)}`);
    this.logger?.debug(`selectRunner: scores: ${scores}`);
    this.logger?.debug(`selectRunner: random: ${random}`);
    let sum = 0;
    for (let i = 0; i < scores.length; i++) {
      if (scores[i] === 0) continue;
      sum += scores[i];
      if (random <= sum) {
        this.logger?.debug(`selectRunner: selected index: ${i}`);
        this.logger?.debug(`selectRunner: selected indexer: ${orders[i].indexer}`);
        return orders[i];
      }
    }
  }

  async refreshAgreementToken(agreementId: string, runner: string): Promise<string> {
    this.logger?.debug(`request new token for runner ${runner}`);
    const tokenUrl = new URL('/orders/token', this.authUrl);
    const res = await POST<{ token: string }>(tokenUrl.toString(), {
      projectId: this.projectId,
      indexer: runner,
      agreementId,
    });
    this.logger?.debug(`request new token for indexer ${runner} success`);
    this.updateTokenById(agreementId, res.token);
    return res.token;
  }

  private async getSelectedRunners(requestId: string): Promise<string[]> {
    if (!requestId) return [];
    return (await this.selectedRunnersStore.get<string[]>(requestId)) || [];
  }

  private async updateSelectedRunner(requestId: string, runner: string) {
    if (!requestId || !runner) return;
    const runners = (await this.getSelectedRunners(requestId)) ?? [];
    if (runners.includes(runner)) return;
    this.selectedRunnersStore.set(requestId, [...runners, runner]);
  }

  protected updateTokenById(agreementId: string, token: string) {
    if (this.agreements === undefined) return;
    const index = this.agreements?.findIndex((a) => a.id === agreementId);
    if (index === -1) return;

    this.agreements[index].token = token;
  }

  async getScore(runner: string) {
    return this.scoreManager.getScore(runner);
  }

  async updateScore(runner: string, errorType: ScoreType, httpVersion?: number) {
    await this.scoreManager.updateScore(runner, errorType, httpVersion);
  }

  cleanup() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }
}
