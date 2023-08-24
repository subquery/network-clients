// Copyright 2020-2022 SubQuery Pte Ltd authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { Agreement, Order, OrderType, Plan, ProjectType } from '../types';
import { ICache } from './cache';
import { Logger } from './logger';
import { fetchOrders } from './query';

type Options = {
  logger: Logger;
  authUrl: string;
  projectId: string;
  projectType: ProjectType;
  cache?: ICache;
};

class OrderManager {
  private nextAgreementIndex: number | undefined;
  private agreements: Agreement[] | undefined;

  private nextPlanIndex: number | undefined;
  private plans: Plan[] | undefined;

  private projectType: ProjectType;
  private logger: Logger;
  private cache: ICache | undefined;
  private timer: NodeJS.Timeout | undefined;

  private authUrl: string;
  private projectId: string;
  private interval = 300_000;
  private minScore = 0;
  private healthy = true;
  private _init: Promise<void>;

  constructor(options: Options) {
    const { authUrl, projectId, logger, projectType, cache } = options;
    this.authUrl = authUrl;
    this.projectId = projectId;
    this.projectType = projectType;
    this.logger = logger;
    this.cache = cache;

    this._init = this.refreshAgreements();
    this.timer = setInterval(this.refreshAgreements, this.interval);
  }

  private async refreshAgreements() {
    try {
      const orders = await fetchOrders(this.authUrl, this.projectId, this.projectType);
      this.agreements = this.filterOrdersByScore(orders.agreements) as Agreement[];
      this.plans = this.filterOrdersByScore(orders.plans);
      this.healthy = true;
    } catch (e) {
      // it seems cannot reach this code, fetchOrders already handle the errors.
      this.logger.error(`fetch orders failed: ${String(e)}`);
      this.healthy = false;
    }
  }

  private getRandomStartIndex(n: number) {
    return Math.floor(Math.random() * n);
  }

  private getCacheKey(indexer: string): string {
    return `$query-score-${indexer}-${this.projectId}`;
  }

  private getIndexerScore(indexer: string) {
    const key = this.getCacheKey(indexer);
    return this.cache?.get<number>(key) || 100;
  }

  private isIndexerSelectable(indexer: string) {
    const score = this.getIndexerScore(indexer);
    return score > this.minScore;
  }

  private filterOrdersByScore(orders: Order[]) {
    if (!this.cache) return orders;
    return orders.filter(({ indexer }) => this.isIndexerSelectable(indexer));
  }

  private getNextOrderIndex(total: number, currentIndex: number) {
    return currentIndex < total - 1 ? currentIndex + 1 : 0;
  }

  public async getNextOrderType(): Promise<OrderType | undefined> {
    await this._init;
    if (this.agreements?.length) return OrderType.agreement;
    if (this.plans?.length) return OrderType.flexPlan;
    return undefined;
  }

  public async getNextAgreement(): Promise<Agreement | undefined> {
    await this._init;

    if (!this.healthy || !this.agreements?.length) return;

    if (this.nextAgreementIndex === undefined) {
      this.nextAgreementIndex = this.getRandomStartIndex(this.agreements.length);
    }

    const agreement = this.agreements[this.nextAgreementIndex];
    this.nextAgreementIndex = this.getNextOrderIndex(
      this.agreements.length,
      this.nextAgreementIndex
    );

    return agreement;
  }

  public async getNextPlan(): Promise<Plan | undefined> {
    await this._init;

    if (!this.healthy || !this.plans?.length) return;

    if (this.nextPlanIndex === undefined) {
      this.nextPlanIndex = this.getRandomStartIndex(this.plans.length);
    }

    const plan = this.plans[this.nextPlanIndex];
    this.nextPlanIndex = this.getNextOrderIndex(this.plans.length, this.nextPlanIndex);

    return plan;
  }

  public updateTokenById(agreementId: string, token: string) {
    if (this.agreements === undefined) return;
    const index = this.agreements?.findIndex((a) => a.id === agreementId);
    if (index === -1) return;

    this.agreements[index].token = token;
  }

  public updateIndexerScore(indexer: string, errorType: 'graphql' | 'network') {
    if (!this.cache) return;

    const key = this.getCacheKey(indexer);
    const score = this.cache.get<number>(key) || 100;

    let newScore = score;
    if (errorType === 'graphql') {
      newScore -= 5;
    } else if (errorType === 'network') {
      newScore -= 20;
    }

    this.cache.set(key, newScore);
  }

  public cleanup() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }
}

export default OrderManager;
