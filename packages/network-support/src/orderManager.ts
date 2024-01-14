// Copyright 2020-2022 SubQuery Pte Ltd authors & contributors
// SPDX-License-Identifier: Apache-2.0

import assert from 'assert';
import { Base64 } from 'js-base64';
import { ScoreManager, ScoreType } from './scoreManager';
import {
  ChannelAuth,
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

export enum ResponseFormat {
  Inline = 'inline',
  Wrapped = 'wrapped',
}

type Options = {
  logger: Logger;
  authUrl: string;
  fallbackServiceUrl?: string;
  projectId: string;
  projectType: ProjectType;
  responseFormat?: ResponseFormat;
  scoreStore?: IStore;
  selector?: RunnerSelector;
  timeout?: number;
};

function tokenToAuthHeader(token: string) {
  return `Bearer ${token}`;
}

export class OrderManager {
  private projectType: ProjectType;
  private nextAgreementIndex: number | undefined;

  private nextPlanIndex: number | undefined;
  private _agreements: ServiceAgreementOrder[] = [];
  private _plans: FlexPlanOrder[] = [];

  private logger: Logger;
  private timer: NodeJS.Timeout | undefined;

  private selectedRunnersStore: IStore;
  private scoreManager: ScoreManager;

  private authUrl: string;
  private projectId: string;
  private interval = 300_000;
  private minScore = 0;
  private healthy = true;
  private selector?: RunnerSelector;
  private responseFormat?: ResponseFormat;
  private timeout = 60000;
  private _init: Promise<void>;

  constructor(options: Options) {
    const {
      authUrl,
      fallbackServiceUrl,
      projectId,
      logger,
      projectType,
      scoreStore,
      selector,
      responseFormat,
      timeout = 60000,
    } = options;
    this.authUrl = authUrl;
    this.projectId = projectId;
    this.projectType = projectType;
    this.logger = logger;
    // this.scoreStore = scoreStore ?? createStore({ ttl: 86_400_000 });
    this.responseFormat = responseFormat;

    this.selectedRunnersStore = createStore({ ttl: 86_400_000 });
    this.scoreManager = new ScoreManager({
      projectId,
      fallbackServiceUrl,
      scoreStore,
    });

    this._init = this.refreshAgreements();
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    this.timer = setInterval(() => this.refreshAgreements(), this.interval);
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

  private async refreshAgreements() {
    try {
      const orders = await fetchOrders(this.authUrl, this.projectId, this.projectType);
      if (orders.agreements) {
        this._agreements = orders.agreements;
      }
      if (orders.plans) {
        this._plans = orders.plans;
      }
      this.healthy = true;
    } catch (e) {
      // it seems cannot reach this code, fetchOrders already handle the errors.
      this.logger?.error(`fetch orders failed: ${String(e)}`);
      this.healthy = false;
    }
  }

  private getRandomStartIndex(n: number) {
    return Math.floor(Math.random() * n);
  }

  private getCacheKey(runner: string): string {
    return `$query-score-${runner}-${this.projectId}`;
  }

  private filterOrdersByScore(orders: Order[]) {
    return orders.filter(({ indexer }) => this.scoreManager.getScore(indexer) > this.minScore);
  }

  private filterOrdersBySelectedRunners(requestId: string, orders: Order[]) {
    if (!requestId) return orders;
    const selected = this.getSelectedRunners(requestId);
    return orders.filter(({ indexer }) => !selected.includes(indexer));
  }

  private getNextOrderIndex(total: number, currentIndex: number) {
    return currentIndex < total - 1 ? currentIndex + 1 : 0;
  }

  async getRequestParams(requestId: string): Promise<RequestParam | undefined> {
    const innerRequest = async () => {
      const order = await this.getNextOrder(requestId);
      const headers: RequestParam['headers'] = {};
      if (order) {
        const { type, indexer: runner, url, id } = order;
        if (type === OrderType.agreement) {
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
          return { url, runner, headers, type };
        } else if (type === OrderType.flexPlan) {
          const channelId = id;
          headers['X-Indexer-Response-Format'] = this.responseFormat ?? 'inline';
          try {
            this.logger?.debug(`request new signature for runner ${runner}`);

            const tokenUrl = new URL('/channel/sign', this.authUrl);
            const signedState = await POST<ChannelAuth>(tokenUrl.toString(), {
              deployment: this.projectId,
              channelId,
            });

            this.logger?.debug(`request new state signature for runner ${runner} success`);
            const { authorization } = signedState;
            // TODO: debug to confirm
            headers.authorization = authorization;

            return {
              type,
              url,
              runner,
              headers,
            };
          } catch (error) {
            this.logger?.debug(`request new state signature for runner ${runner} failed`);
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
    headers: Headers
  ): [object | string, ChannelState, string] {
    switch (headers.get('X-Indexer-Response-Format')) {
      case ResponseFormat.Wrapped: {
        const body = (
          typeof payload === 'string' ? JSON.parse(payload) : payload
        ) as WrappedResponse;
        return [Base64.decode(body.result), JSON.parse(Base64.decode(body.state)), body.signature];
      }
      case ResponseFormat.Inline: {
        const _state = headers.get('X-Channel-State');
        assert(_state, 'invalid response, missing channel state');
        const _signature = headers.get('X-Channel-Signature');
        assert(_signature, 'invalid response, missing channel signature');
        return [payload, JSON.parse(Base64.decode(_state)), _signature];
      }
      case undefined: {
        let _payload = payload;
        if (typeof payload === 'string') {
          _payload = JSON.parse(payload);
        }
        const state = (_payload as unknown as any).state;
        return [_payload, state, ''];
      }
      default:
        throw new Error('invalid X-Indexer-Response-Format');
    }
  }

  async syncChannelState(state: ChannelState): Promise<void> {
    try {
      const stateUrl = new URL('/channel/state', this.authUrl);
      const res = await POST<{ consumerSign: string }>(stateUrl.toString(), state);

      if (res.consumerSign) {
        this.logger?.debug(`syncChannelState succeed`);
      } else {
        this.logger?.debug(`syncChannelState failed: ${JSON.stringify(res)}`);
      }
    } catch (e) {
      this.logger?.debug(`syncChannelState failed: ${e}`);
    }
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

  protected async getNextAgreement(requestId: string): Promise<ServiceAgreementOrder | undefined> {
    await this._init;

    if (!this.agreements) return;

    const agreements = this.filterOrdersByScore(
      this.filterOrdersBySelectedRunners(requestId, this.agreements)
    ) as ServiceAgreementOrder[];
    this.logger?.debug(`available agreements count: ${agreements.length}`);

    if (!this.healthy || !agreements.length) return;

    if (this.nextAgreementIndex === undefined) {
      this.nextAgreementIndex = this.getRandomStartIndex(agreements.length);
    }

    const agreement = agreements[this.nextAgreementIndex];
    this.nextAgreementIndex = this.getNextOrderIndex(agreements.length, this.nextAgreementIndex);

    this.logger?.debug(`next agreement: ${JSON.stringify(agreement.indexer)}`);

    this.updateSelectedRunner(requestId, agreement.indexer);

    return agreement;
  }

  protected async getNextPlan(requestId: string): Promise<FlexPlanOrder | undefined> {
    await this._init;

    if (!this.plans) return;

    const plans = this.filterOrdersByScore(
      this.filterOrdersBySelectedRunners(requestId, this.plans)
    );
    if (!this.healthy || !plans?.length) return;

    if (this.nextPlanIndex === undefined) {
      this.nextPlanIndex = this.getRandomStartIndex(plans.length);
    }

    const plan = plans[this.nextPlanIndex];
    this.nextPlanIndex = this.getNextOrderIndex(plans.length, this.nextPlanIndex);

    this.updateSelectedRunner(requestId, plan.indexer);

    return plan;
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

  private getSelectedRunners(requestId: string): string[] {
    if (!requestId) return [];
    return this.selectedRunnersStore.get<string[]>(requestId) || [];
  }

  private updateSelectedRunner(requestId: string, runner: string) {
    if (!requestId || !runner) return;
    const runners = this.getSelectedRunners(requestId) ?? [];
    if (runners.includes(runner)) return;
    this.selectedRunnersStore.set(requestId, [...runners, runner]);
  }

  protected updateTokenById(agreementId: string, token: string) {
    if (this.agreements === undefined) return;
    const index = this.agreements?.findIndex((a) => a.id === agreementId);
    if (index === -1) return;

    this.agreements[index].token = token;
  }

  updateScore(runner: string, errorType: ScoreType) {
    this.scoreManager.updateScore(runner, errorType);
  }

  cleanup() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }
}
