// Copyright 2020-2022 SubQuery Pte Ltd authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { ApolloLink, FetchResult, NextLink, Observable, Operation } from '@apollo/client/core';
import { Subscription } from 'zen-observable-ts';

import { isTokenExpired, requestAuthToken } from './authHelper';
import { Message } from './eip712';
import { Logger } from '../logger';

interface AuthOptions extends Message {
  indexerUrl: string;         // the url for geting token
  chainId?: number;        // chainId for the network
  projectChainId?: string; // chainId for the project
  sk: string;              // `sk` of the consumer or corresponding controller account
}

export class AuthLink extends ApolloLink {
  private _options: AuthOptions;
  private _logger: Logger;
  private _token: string;

  constructor(options: AuthOptions, logger: Logger) {
    super();
    this._options = options;
    this._logger = logger;
    this._token = '';
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

  get queryEndpoint() {
    const url = new URL('/query', this._options.indexerUrl);
    return url.toString();
  }

  private generateMessage() {
    const { indexer, consumer, agreement, deploymentId } = this._options;
    const timestamp = new Date().getTime();
    return { indexer, consumer, agreement, deploymentId, timestamp };
  }

  private async getUrlAndToken(): Promise<{ url: string; token: string } | undefined> {
    if (!isTokenExpired(this._token)) return { token: this._token, url: this.queryEndpoint };

    const { sk, chainId, agreement, indexerUrl } = this._options;

    if (!chainId || !agreement) throw new Error('chainId and agreement are required');

    const message = this.generateMessage();
    const tokenUrl = new URL('/token', indexerUrl);
    const authToken = await requestAuthToken(tokenUrl.toString(), message, sk, chainId)
    this._token = authToken;

    return { token: authToken, url: this.queryEndpoint };
  }
}
