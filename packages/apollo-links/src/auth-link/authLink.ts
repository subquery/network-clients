// Copyright 2020-2022 SubQuery Pte Ltd authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { ApolloLink, FetchResult, NextLink, Observable, Operation } from '@apollo/client/core';
import { Subscription } from 'zen-observable-ts';
import Pino from 'pino';

import { isTokenExpired, requestAuthToken } from './authHelper';
import { POST } from '../query';
import { Message } from './eip712';
import cache from '../agreementMananger';

export interface AuthOptions extends Message {
  authUrl: string;         // the url for geting token
  chainId?: number;        // chainId for the network
  projectChainId?: string; // chainId for the project
  sk?: string;             // `sk` of the consumer or corresponding controller account
}

export class AuthLink extends ApolloLink {
  private _options: AuthOptions;
  private _logger: Pino.Logger;

  constructor(options: AuthOptions, logger: Pino.Logger) {
    super();
    this._options = options;
    this._logger = logger;
  }

  override request(operation: Operation, forward?: NextLink): Observable<FetchResult> | null {
    if (!forward) return null;

    return new Observable<FetchResult>(observer => {
      let sub: Subscription;
      this.getUrlAndToken().then((data) => {
        if (data) {
          const { token, url } = data;
          const headers = { authorization: `Bearer ${token}` };
          operation.setContext({ url, headers }); 
        }
      })
      .catch((error) => observer.error(error))
      .finally(() => {
        sub = forward(operation).subscribe(observer);
      });

      return () => sub?.unsubscribe();
    });
  }

  private generateMessage() {
    const { indexer, consumer, agreement, deploymentId } = this._options;
    const timestamp = new Date().getTime();
    return { indexer, consumer, agreement, deploymentId, timestamp };
  }

  private async getUrlAndToken(): Promise<{ url: string; token: string } | undefined> {
    const nextAgreement = await cache.getNextAgreement();
    if (!nextAgreement) return undefined;

    const { token, id, url, indexer } = nextAgreement;
    if (!isTokenExpired(token)) return { token, url };
    
    const { projectChainId, sk, chainId, agreement, deploymentId, authUrl } = this._options;

    if (!sk) {
      const host = authUrl?.trim().replace(/\/+$/, '');
      const res = await POST<{ token: string }>(`${host}/token`, { projectChainId, indexer, agreementId: id });
      const token = res.token;
      cache.updateTokenById(id, token);
      return { token, url };
    }

    if (!chainId || !agreement) throw new Error('chainId and agreement are required');

    const message = this.generateMessage();
    const queryUrl = `${authUrl}/query/${deploymentId}`;
    const authToken = await requestAuthToken(authUrl, message, sk, chainId)
    cache.updateTokenById(agreement, token);

    return { token: authToken, url: queryUrl };
  }
}
