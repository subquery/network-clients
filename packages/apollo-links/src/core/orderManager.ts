// Copyright 2020-2023 SubQuery Pte Ltd authors & contributors
// SPDX-License-Identifier: Apache-2.0

// import { Agreement, Order, OrderType, Plan, ProjectType } from '../types';
// import { createStore, IStore } from '../utils/store';
// import { Logger } from '../utils/logger';
// import { fetchOrders } from '../utils/query';
//
// type Options = {
//   logger: Logger;
//   authUrl: string;
//   projectId: string;
//   projectType: ProjectType;
//   scoreStore?: IStore;
// };
//
// export class OrderManager {
//   private nextAgreementIndex: number | undefined;
//   private agreements: Agreement[] | undefined;
//
//   private nextPlanIndex: number | undefined;
//   private plans: Plan[] | undefined;
//
//   private projectType: ProjectType;
//   private logger: Logger;
//   private scoreStore: IStore;
//   private timer: NodeJS.Timeout | undefined;
//
//   private authUrl: string;
//   private projectId: string;
//   private interval = 300_000;
//   private minScore = 0;
//   private healthy = true;
//   private _init: Promise<void>;
//
//   constructor(options: Options) {
//     const { authUrl, projectId, logger, projectType, scoreStore } = options;
//     this.authUrl = authUrl;
//     this.projectId = projectId;
//     this.projectType = projectType;
//     this.logger = logger;
//     this.scoreStore = scoreStore ?? createStore({ ttl: 86_400_000 });
//
//     this._init = this.refreshAgreements();
//     this.timer = setInterval(this.refreshAgreements, this.interval);
//   }
//
//   private async refreshAgreements() {
//     try {
//       const orders = await fetchOrders(this.authUrl, this.projectId, this.projectType);
//       this.agreements = orders.agreements;
//       this.plans = orders.plans;
//       this.healthy = true;
//     } catch (e) {
//       // it seems cannot reach this code, fetchOrders already handle the errors.
//       this.logger?.error(`fetch orders failed: ${String(e)}`);
//       this.healthy = false;
//     }
//   }
//
//   private getRandomStartIndex(n: number) {
//     return Math.floor(Math.random() * n);
//   }
//
//   private getCacheKey(indexer: string): string {
//     return `$query-score-${indexer}-${this.projectId}`;
//   }
//
//   private getIndexerScore(indexer: string) {
//     const key = this.getCacheKey(indexer);
//     let score = this.scoreStore.get<number>(key);
//     if (score === undefined) {
//       score = 100;
//       this.scoreStore.set(key, score);
//     }
//     return score;
//   }
//
//   private filterOrdersByScore(orders: Order[]) {
//     return orders.filter(({ indexer }) => this.getIndexerScore(indexer) > this.minScore);
//   }
//
//   private getNextOrderIndex(total: number, currentIndex: number) {
//     return currentIndex < total - 1 ? currentIndex + 1 : 0;
//   }
//
//   public async getNextOrderType(): Promise<OrderType | undefined> {
//     await this._init;
//     if (this.agreements?.length) return OrderType.agreement;
//     if (this.plans?.length) return OrderType.flexPlan;
//     return undefined;
//   }
//
//   public async getNextAgreement(): Promise<Agreement | undefined> {
//     await this._init;
//
//     if (!this.agreements) return;
//
//     const agreements = this.filterOrdersByScore(this.agreements) as Agreement[];
//     this.logger?.debug(`available agreements count: ${agreements.length}`);
//
//     if (!this.healthy || !agreements.length) return;
//
//     if (this.nextAgreementIndex === undefined) {
//       this.nextAgreementIndex = this.getRandomStartIndex(agreements.length);
//     }
//
//     const agreement = agreements[this.nextAgreementIndex];
//     this.nextAgreementIndex = this.getNextOrderIndex(agreements.length, this.nextAgreementIndex);
//
//     this.logger?.debug(`next agreement: ${JSON.stringify(agreement.indexer)}`);
//
//     return agreement;
//   }
//
//   public async getNextPlan(): Promise<Plan | undefined> {
//     await this._init;
//
//     if (!this.plans) return;
//
//     const plans = this.filterOrdersByScore(this.plans) as Plan[];
//     if (!this.healthy || !plans?.length) return;
//
//     if (this.nextPlanIndex === undefined) {
//       this.nextPlanIndex = this.getRandomStartIndex(plans.length);
//     }
//
//     const plan = plans[this.nextPlanIndex];
//     this.nextPlanIndex = this.getNextOrderIndex(plans.length, this.nextPlanIndex);
//
//     return plan;
//   }
//
//   public updateTokenById(agreementId: string, token: string) {
//     if (this.agreements === undefined) return;
//     const index = this.agreements?.findIndex((a) => a.id === agreementId);
//     if (index === -1) return;
//
//     this.agreements[index].token = token;
//   }
//
//   public updateIndexerScore(indexer: string, errorType: 'graphql' | 'network') {
//     const key = this.getCacheKey(indexer);
//     const score = this.scoreStore.get<number>(key) ?? 100;
//
//     const delta = errorType === 'graphql' ? 10 : 50;
//     const newScore = Math.max(score - delta, 0);
//
//     this.scoreStore.set(key, newScore);
//   }
//
//   public cleanup() {
//     if (this.timer) {
//       clearInterval(this.timer);
//     }
//   }
// }
