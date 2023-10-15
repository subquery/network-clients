// Copyright 2020-2022 SubQuery Pte Ltd authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { ApolloLink, FetchResult, NextLink, Observable, Operation } from '@apollo/client/core';
import { Subscription } from 'zen-observable-ts';

import { OrderManager } from './orderManager';
import { isTokenExpired } from '../auth';
import { ChannelAuth, OrderType } from '../types';
import { Logger } from '../utils/logger';
import { POST } from '../utils/query';

export type AuthOptions = {
  authUrl: string; // the url for geting token
  projectId: string; // chainId or deploymentId for the project
  orderManager: OrderManager; // agreement manager for managing agreements
  logger: Logger; // logger for logging
};

type ParamsResponse = {
  data?: {
    url: string;
    authorization: string;
    type: OrderType;
    indexer: string;
  };
  error?: {
    indexer: string;
    message: string;
  };
};

export class ClusterAuthLink extends ApolloLink {
  private options: AuthOptions;
  private logger: Logger;
  private orderManager: OrderManager;

  constructor(options: AuthOptions) {
    super();
    this.options = options;
    this.logger = options.logger;
    this.orderManager = options.orderManager;
  }

  override request(operation: Operation, forward?: NextLink): Observable<FetchResult> | null {
    if (!forward) return null;

    return new Observable<FetchResult>((observer) => {
      let sub: Subscription;

      this.getRequestParams()
        .then((params) => {
          if (params?.data) {
            const { authorization, url, type, indexer } = params.data;
            const headers = { authorization };
            operation.setContext({ url, headers, type, indexer });

            sub = forward(operation).subscribe(observer);
          } else if (params?.error) {
            const { indexer, message } = params.error;
            operation.setContext({ indexer });

            this.logger?.debug(`Failed to get token: ${message}`);
            observer.error(new Error('failed to get indexer request params'));
          } else {
            this.logger?.debug('no available orders');
            sub = forward(operation).subscribe(observer);
          }
        })
        .catch((error) => {
          this.logger?.debug(`Failed to get order request params: ${error.message}`);
          observer.error(new Error('failed to get indexer url and token'));
        });

      return () => sub?.unsubscribe();
    });
  }

  private tokenToAuthHeader(token: string) {
    return { authorization: `Bearer ${token}` };
  }

  private async getRequestParams(): Promise<ParamsResponse | undefined> {
    const orderType = await this.orderManager.getNextOrderType();
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

  private async getAgreementRequestParams(): Promise<ParamsResponse | undefined> {
    const nextAgreement = await this.orderManager.getNextAgreement();
    if (!nextAgreement) return undefined;

    const type = OrderType.agreement;
    const { token, id, url, indexer } = nextAgreement;
    if (!isTokenExpired(token))
      return { data: { url, type, indexer, ...this.tokenToAuthHeader(token) } };

    try {
      this.logger?.debug(`request new token for indexer ${indexer}`);
      const { projectId, authUrl } = this.options;
      const tokenUrl = new URL('/orders/token', authUrl);
      const res = await POST<{ token: string }>(tokenUrl.toString(), {
        projectId,
        indexer,
        agreementId: id,
      });

      this.orderManager.updateTokenById(id, res.token);
      this.logger?.debug(`request new token for indexer ${indexer} success`);
      return { data: { url, type, indexer, ...this.tokenToAuthHeader(res.token) } };
    } catch (error) {
      this.logger?.debug(
        `request new token for indexer ${indexer} and url: ${nextAgreement.url} failed`
      );
      return { error: { indexer: nextAgreement.indexer, message: (error as Error).message } };
    }
  }

  private async getPlanRequestParams(): Promise<ParamsResponse | undefined> {
    const nextPlan = await this.orderManager.getNextPlan();
    if (!nextPlan) return undefined;

    const type = OrderType.flexPlan;
    const { id: channelId, url, indexer } = nextPlan;

    try {
      this.logger?.debug(`request new signature for indexer ${indexer}`);
      const { projectId: deployment, authUrl } = this.options;

      const tokenUrl = new URL('/channel/sign', authUrl);
      const signedState = await POST<ChannelAuth>(tokenUrl.toString(), {
        deployment,
        channelId,
      });

      this.logger?.debug(`request new state signature for indexer ${indexer} success`);
      const { authorization } = signedState;
      return { data: { authorization, url, type, indexer } };
    } catch (error) {
      this.logger?.debug(`request new state signature for indexer ${indexer} failed`);
      return { error: { indexer: nextPlan.indexer, message: (error as Error).message } };
    }
  }
}
