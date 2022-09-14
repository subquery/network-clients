// Copyright 2020-2022 SubQuery Pte Ltd authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { ApolloLink, FetchResult, NextLink, Observable, Operation } from '@apollo/client';
import axios from 'axios';

import { AuthMessage, authRequestBody, buildTypedMessage, Message } from './eip712';

export interface AuthOptions extends AuthMessage {
  pk?: string;
}

export class AuthLink extends ApolloLink {
  private _token: string;
  private _message: Message;
  private _options: AuthOptions;

  constructor(options: AuthOptions) {
    super();
    this._options = options;
    this.updateMessage();
  }

  override request(operation: Operation, forward?: NextLink): Observable<FetchResult> | null {
    operation.setContext(({ headers }: { headers: HeadersInit }) => {
      return ({
        headers: {
          authorization: `Bearer ${this._token}`,
          ...headers
        }
      }); 
    });

    return forward ? forward(operation) : null;
  }

  private updateMessage() {
    const { indexer, consumer, agreement, deploymentId } = this._options;
    const timestamp = new Date().getTime();
    this._message = { indexer, consumer, agreement, deploymentId, timestamp };
  }

  private isTokenExpired(): boolean {
    // 1. decode jwt token
    // 2. check token expired
    return false;
  }

  private signMsg(): string {
    this.updateMessage();
    const typedMessage = buildTypedMessage(this._message);
    // sign the typed message
    const signature = '';
    return signature;
  }

  private async requestToken(): Promise<string> {
    if (!this.isTokenExpired()) return this._token;
    
    const signature = this.signMsg();
    const body = authRequestBody(this._message, signature);

    // 1. try to get token from cache first, get url from `indexer` metadata
    const { indexer } = this._options;
    const url = 'http://ec2-13-239-36-188.ap-southeast-2.compute.amazonaws.com/token'
    const res = await axios.post(url, body);
    return res.data.token;
  }
}
