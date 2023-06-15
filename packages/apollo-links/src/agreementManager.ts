// Copyright 2020-2022 SubQuery Pte Ltd authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { Logger } from './logger';
import { fetchAgreements } from './query';
import { Agreement } from './types';

type Options = {
  logger: Logger;
  authUrl: string;
  projectId: string;
};

class AgreementManager {
  private nextAgreementIndex: number;
  private agreements: Agreement[] | undefined;
  private logger: Logger;

  private authUrl: string;
  private projectId: string;
  private interval = 300_000;
  private healthy = true;
  private _init: Promise<void>;

  constructor(options: Options) {
    const { authUrl, projectId, logger } = options;
    this.authUrl = authUrl;
    this.projectId = projectId;
    this.logger = logger;
    this.nextAgreementIndex = 0;
    this._init = this.refreshAgreements();
    setInterval(this.refreshAgreements, this.interval);
  }

  private async refreshAgreements() {
    try {
      this.agreements = await fetchAgreements(this.authUrl, this.projectId);
      this.healthy = true;
    } catch (e) {
      this.logger.error(`fetchAgreements failed: ${String(e)}`);
      this.healthy = false;
    }
  }

  public async getNextAgreement(): Promise<Agreement | undefined> {
    await this._init;
    if (!this.healthy) {
      return;
    }

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

  public updateTokenById(agreementId: string, token: string) {
    if (this.agreements === undefined) return;
    const index = this.agreements?.findIndex((a) => a.id === agreementId);
    if (index === -1) return;

    this.agreements[index].token = token;
  }
}

export default AgreementManager;
