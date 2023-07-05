// Copyright 2020-2022 SubQuery Pte Ltd authors & contributors
// SPDX-License-Identifier: Apache-2.0

import {
  ApolloLink,
  FetchResult,
  HttpLink,
  HttpOptions,
  NextLink,
  Observable,
  Operation,
} from '@apollo/client/core';
import { Logger } from './logger';
import { POST } from './query';
import { ChannelState, OrderType } from './types';

export interface Options {
  httpOptions: HttpOptions; // http options for init `HttpLink`
  authUrl: string;
  logger?: Logger;
}

export class DynamicHttpLink extends ApolloLink {
  private options: Options;

  constructor(options: Options) {
    super();
    this.options = options;
  }

  get logger(): Logger | undefined {
    return this.options.logger;
  }

  tokenToStateChannel(authToken: string): ChannelState | undefined {
    const parts = authToken.split(/\s+/);
    try {
      if (parts.length >= 2 && parts[0] === 'Bearer') {
        const token = parts[1];
        return JSON.parse(token);
      } else {
        this.logger?.debug(`invalid token: ${authToken}`);
      }
    } catch (e) {
      this.logger?.debug(`invalid token: ${authToken} ${e}`);
    }
  }

  async syncChannelState(token: string): Promise<void> {
    try {
      const state = this.tokenToStateChannel(token);
      if (!state) return;

      const stateUrl = new URL('/channel/state', this.options.authUrl);
      await POST(stateUrl.toString(), state);
    } catch (e) {
      this.logger?.debug(`syncChannelState failed: ${e}`);
    }
  }

  override request(operation: Operation, forward?: NextLink): Observable<FetchResult> | null {
    const { url, type, headers } = operation.getContext();
    if (!url) {
      return new Observable<FetchResult>((observer) => {
        observer.error(new Error(`empty url`));
      });
    }

    this.logger?.debug(`use url: ${url}`);
    const httpLink = this.createHttpLink(url);

    if (type === OrderType.flexPlan) {
      this.syncChannelState(headers.authorization);
    }

    return httpLink.request(operation, forward);
  }

  private createHttpLink(url: string): HttpLink {
    return new HttpLink({
      ...this.options.httpOptions,
      uri: url,
    });
  }
}
