// Copyright 2020-2022 SubQuery Pte Ltd authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { ApolloLink, FetchResult, NextLink, Observable, Operation } from '@apollo/client/core';
import { Subscription } from 'zen-observable-ts';

import { requestAuthToken } from './authHelper';
import { POST, getInitialIndexer } from '../query';
import { Message } from './eip712';
import { getNextAgreement, getNextToken, updateCurrentToken } from '../cache';

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
    this._token = '';
  }

  override request(operation: Operation, forward?: NextLink): Observable<FetchResult> | null {
    if (!forward) return null;

    return new Observable<FetchResult>(observer => {
      let sub: Subscription;
      this.requestToken().then((token) => {
        operation.setContext({ headers: { authorization: `Bearer ${token}` } }); 
        sub = forward(operation).subscribe(observer);
      }).catch((error) => observer.error(error));

      return () => sub.unsubscribe();
    });
  }

  get indexer(): string {
    const { indexer } = this._options;
    if (indexer) return indexer;

    return getNextAgreement()?.indexer ?? '';
  }

  private generateMessage() {
    const { indexer, consumer, agreement, deploymentId } = this._options;
    const timestamp = new Date().getTime();
    return { indexer, consumer, agreement, deploymentId, timestamp };
  }

  private async requestToken(): Promise<string> {
    let token = getNextToken();
    if (token) return token;
    
    const { projectChainId, sk, chainId, authUrl } = this._options;

    if (!sk) {
      const indexer = this.indexer ?? await getInitialIndexer(authUrl, projectChainId ?? '');
      const host = authUrl?.trim().replace(/\/+$/, '');
      const res = await POST<{ token: string }>(`${host}/token`, { projectChainId, indexer });
      const token = res.token;
      updateCurrentToken(token);
      return token;
    }

    if (!chainId) throw new Error('chainId is required');

    const message = this.generateMessage();
    token = await requestAuthToken(authUrl, message, sk, chainId)
    updateCurrentToken(token);

    return token;
  }
}
