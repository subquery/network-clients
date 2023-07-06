// Copyright 2020-2022 SubQuery Pte Ltd authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { Logger } from './logger';
import { fetchOrders } from './query';
import { Agreement, ProjectType, Plan, OrderType } from '../types';

type Options = {
  logger: Logger;
  authUrl: string;
  projectId: string;
  projectType: ProjectType;
};

class OrderManager {
  private nextAgreementIndex: number;
  private agreements: Agreement[] | undefined;

  private nextPlanIndex: number;
  private plans: Plan[] | undefined;

  private projectType: ProjectType;
  private logger: Logger;

  private authUrl: string;
  private projectId: string;
  private interval = 300_000;
  private healthy = true;
  private _init: Promise<void>;

  constructor(options: Options) {
    const { authUrl, projectId, logger, projectType } = options;
    this.authUrl = authUrl;
    this.projectId = projectId;
    this.projectType = projectType;
    this.logger = logger;

    this.nextAgreementIndex = 0;
    this.nextPlanIndex = 0;

    this._init = this.refreshAgreements();
    setInterval(this.refreshAgreements, this.interval);
  }

  private async refreshAgreements() {
    try {
      const { agreements, plans } = await fetchOrders(
        this.authUrl,
        this.projectId,
        this.projectType
      );
      this.agreements = agreements;
      this.plans = plans;
      this.healthy = true;
    } catch (e) {
      this.logger.error(`fetch orders failed: ${String(e)}`);
      this.healthy = false;
    }
  }

  public getNextOrderType(): OrderType | undefined {
    if (this.agreements?.length) return OrderType.agreement;
    if (this.plans?.length) return OrderType.flexPlan;
    return undefined;
  }

  public async getNextAgreement(): Promise<Agreement | undefined> {
    await this._init;
    if (!this.healthy) return;

    if (!this.agreements?.length) return;

    let agreement = this.agreements[this.nextAgreementIndex];
    if (this.nextAgreementIndex < this.agreements.length - 1) {
      this.nextAgreementIndex = this.nextAgreementIndex + 1;
      agreement = this.agreements[this.nextAgreementIndex];
    } else {
      this.nextAgreementIndex = 0;
    }

    return agreement;
  }

  public async getNextPlan(): Promise<Plan | undefined> {
    await this._init;
    if (!this.healthy) return;

    if (!this.plans?.length) return;

    let plan = this.plans[this.nextAgreementIndex];
    if (this.nextPlanIndex < this.plans.length - 1) {
      this.nextPlanIndex = this.nextPlanIndex + 1;
      plan = this.plans[this.nextPlanIndex];
    } else {
      this.nextPlanIndex = 0;
    }

    return plan;
  }

  public updateTokenById(agreementId: string, token: string) {
    if (this.agreements === undefined) return;
    const index = this.agreements?.findIndex((a) => a.id === agreementId);
    if (index === -1) return;

    this.agreements[index].token = token;
  }
}

export default OrderManager;
