// Copyright 2020-2022 SubQuery Pte Ltd authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { ApolloLink, FetchResult, NextLink, Observable, Operation } from '@apollo/client/core';
import { Subscription } from 'zen-observable-ts';

import { isTokenExpired } from '../auth/authHelper';
import OrderMananger from '../utils/orderManager';
import { POST } from '../utils/query';
import { Logger } from '../utils/logger';
import { ChannelState, OrderType } from '../types';

export type AuthOptions = {
  authUrl: string; // the url for geting token
  projectId: string; // chainId or deploymentId for the project
  orderMananger: OrderMananger; // agreement manager for managing agreements
  logger: Logger; // logger for logging
};

type RequestParams = {
  url: string;
  token: string;
  type: OrderType;
};

export class ClusterAuthLink extends ApolloLink {
  private options: AuthOptions;
  private logger: Logger;
  private orderMananger: OrderMananger;

  constructor(options: AuthOptions) {
    super();
    this.options = options;
    this.logger = options.logger;
    this.orderMananger = options.orderMananger;
  }

  override request(operation: Operation, forward?: NextLink): Observable<FetchResult> | null {
    if (!forward) return null;

    return new Observable<FetchResult>((observer) => {
      let sub: Subscription;
      this.getRequestParams()
        .then((data) => {
          if (data) {
            const { token, url, type } = data;
            const headers = { authorization: `Bearer ${token}` };
            operation.setContext({ url, headers, type });
          }

          sub = forward(operation).subscribe(observer);
        })
        .catch((error) => {
          this.logger.warn(`Failed to get token: ${error.message}`);
          observer.error(new Error('failed to get indexer url and token'));
        });

      return () => sub?.unsubscribe();
    });
  }

  private async getRequestParams(): Promise<RequestParams | undefined> {
    const orderType = await this.orderMananger.getNextOrderType();
    if (!orderType) return undefined;

    switch (orderType) {
      case OrderType.agreement:
        return this.getAgreementRequestParams();
      case OrderType.flexPlan:
        return this.getPlanRequestParams();
      default:
        return undefined;
    }
  }

  private async getAgreementRequestParams(): Promise<RequestParams | undefined> {
    const nextAgreement = await this.orderMananger.getNextAgreement();
    if (!nextAgreement) return undefined;

    const type = OrderType.agreement;
    const { token, id, url, indexer } = nextAgreement;
    if (!isTokenExpired(token)) return { token, url, type };
    this.logger.debug(`request new token for indexer ${indexer}`);
    const { projectId, authUrl } = this.options;

    const tokenUrl = new URL('/orders/token', authUrl);
    const res = await POST<{ token: string }>(tokenUrl.toString(), {
      projectId,
      indexer,
      agreementId: id,
    });

    this.orderMananger.updateTokenById(id, res.token);
    this.logger.debug(`request new token for indexer ${indexer} success`);
    return { token: res.token, url, type };
  }

  private async getPlanRequestParams(): Promise<RequestParams | undefined> {
    const nextPlan = await this.orderMananger.getNextPlan();
    if (!nextPlan) return undefined;

    const type = OrderType.flexPlan;
    const { id: channelId, url, indexer } = nextPlan;

    this.logger.debug(`request new signature for indexer ${indexer}`);
    const { projectId: deployment, authUrl } = this.options;

    const tokenUrl = new URL('/channel/sign', authUrl);
    const signedState = await POST<ChannelState>(tokenUrl.toString(), {
      deployment,
      channelId,
    });

    this.logger.debug(`state signature: ${signedState}`);
    const token = JSON.stringify({ QueryState: signedState });
    this.logger.debug(`request new state signature for indexer ${indexer} success`);

    return { token, url, type };
  }
}
