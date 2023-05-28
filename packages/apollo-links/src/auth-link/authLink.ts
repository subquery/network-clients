// Copyright 2020-2022 SubQuery Pte Ltd authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { ApolloLink, FetchResult, NextLink, Observable, Operation } from '@apollo/client/core';
import { Subscription } from 'zen-observable-ts';

import { requestAuthToken } from './authHelper';
import { POST, getInitialIndexer } from '../query';
import { Message } from './eip712';
import cache from '../cache';

export interface AuthOptions extends Message {
  authUrl: string;         // the url for geting token
  chainId?: number;        // chainId for the network
  projectChainId?: string; // chainId for the project
  sk?: string;             // `sk` of the consumer or corresponding controller account
}

export class AuthLink extends ApolloLink {
  private _options: AuthOptions;

  constructor(options: AuthOptions) {
    super();
    this._options = options;
  }

  override request(operation: Operation, forward?: NextLink): Observable<FetchResult> | null {
    if (!forward) return null;

    return new Observable<FetchResult>(observer => {
      let sub: Subscription;
      this.getUriAndToken().then((data) => {
        if (data) {
          const { token, uri } = data;
          const headers = { authorization: `Bearer ${token}` };
          operation.setContext({ uri, headers }); 
        }
        sub = forward(operation).subscribe(observer);
      }).catch((error) => observer.error(error));

      return () => sub.unsubscribe();
    });
  }

  private generateMessage() {
    const { indexer, consumer, agreement, deploymentId } = this._options;
    const timestamp = new Date().getTime();
    return { indexer, consumer, agreement, deploymentId, timestamp };
  }

  private async getUriAndToken(): Promise<{ uri: string; token: string } | undefined> {
    const nextAgreement = cache.getNextAgreement();
    if (!nextAgreement) return undefined;

    const { token, id, uri, indexer } = nextAgreement;
    if (token) return { token, uri };
    
    const { projectChainId, sk, chainId, agreement, deploymentId, authUrl } = this._options;

    if (!sk) {
      const host = authUrl?.trim().replace(/\/+$/, '');
      const res = await POST<{ token: string }>(`${host}/token`, { projectChainId, indexer });
      const token = res.token;
      cache.updateToken(id, token);
      return { token, uri };
    }

    if (!chainId || !agreement) throw new Error('chainId and agreement are required');

    const message = this.generateMessage();
    const queryUrl = `${authUrl}/query/${deploymentId}`;
    const authToken = await requestAuthToken(authUrl, message, sk, chainId)
    cache.updateToken(agreement, token);

    return { token: authToken, uri: queryUrl };
  }
}
