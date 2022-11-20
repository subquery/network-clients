// Copyright 2020-2022 SubQuery Pte Ltd authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { ApolloLink, FetchResult, NextLink, Observable, Operation } from '@apollo/client/core';
import { Subscription } from 'zen-observable-ts';

import { isTokenExpired, POST, requestAuthToken } from './authHelper';
import { Message } from './eip712';

export interface AuthOptions extends Message {
  authUrl: string;   // the url for geting token
  chainId: number;   // chainId for the network
  sk?: string;       // `sk` of the consumer or corresponding controller account
}

export class AuthLink extends ApolloLink {
  private _options: AuthOptions;
  private _token: string;

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
      });

      return () => sub.unsubscribe();
    });
  }

  private generateMessage() {
    const { indexer, consumer, agreement, deploymentId } = this._options;
    const timestamp = new Date().getTime();
    return { indexer, consumer, agreement, deploymentId, timestamp };
  }

  private async requestToken(): Promise<string> {
    if (!isTokenExpired(this._token)) return this._token;

    const { indexer, deploymentId, sk, chainId, authUrl } = this._options;

    if (!sk) {
      const res = await POST<{ token: string }>(authUrl, { deploymentId, indexer });
      this._token = res.token;
      return this._token;
    } 

    const message = this.generateMessage();
    this._token = await requestAuthToken(authUrl, message, sk, chainId)

    return this._token;
  }
}
