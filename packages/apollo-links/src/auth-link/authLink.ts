// Copyright 2020-2022 SubQuery Pte Ltd authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { ApolloLink, FetchResult, NextLink, Observable, Operation } from '@apollo/client/core';
import { signTypedData, SignTypedDataVersion } from '@metamask/eth-sig-util';
import jwt_decode from 'jwt-decode';
import axios from 'axios';
import buffer from 'buffer';

import { AuthMessage, createAuthRequestBody, buildTypedMessage, Message } from './eip712';
import { Subscription } from 'zen-observable-ts';

const Buffer = buffer.Buffer;

export interface AuthOptions extends Message {
  authUrl: string;
  chainId: number;
  pk?: string;
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

  private isTokenExpired(): boolean {
    if (!this._token) return true;

    const { exp } = jwt_decode(this._token) as { exp: number };
    const currentDate = new Date().getTime();

    return exp < currentDate;
  }

  private signMessage(msg: AuthMessage): string {
    const { pk } = this._options;
    if (!pk) return '';

    return signTypedData({
      privateKey: Buffer.from(pk, 'hex'),
      data: buildTypedMessage(msg, this._options.chainId),
      version: SignTypedDataVersion.V4,
    });
  }

  private async requestToken(): Promise<string> {
    if (!this.isTokenExpired()) return this._token;

    const message = this.generateMessage();
    const signature = this.signMessage(message);
    const body = createAuthRequestBody(message, signature, this._options.chainId);
    const headers = { 'Content-Type': 'application/json' };

    const res = await axios.post(this._options.authUrl, body, { headers });
    this._token = res.data.token;

    return this._token;
  }
}
