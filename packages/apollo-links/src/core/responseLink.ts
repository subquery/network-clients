// Copyright 2020-2022 SubQuery Pte Ltd authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { ApolloLink, FetchResult, NextLink, Observable, Operation } from '@apollo/client/core';
import { Logger } from '../utils/logger';
import { POST } from '../utils/query';
import { ChannelState, OrderType } from '../types';

type Options = {
  authUrl: string;
  logger?: Logger;
};

export class ResponseLink extends ApolloLink {
  private options: Options;

  constructor(private option: Options) {
    super();
    this.options = option;
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
      this.logger?.debug(`syncChannelState succeed`);
    } catch (e) {
      this.logger?.debug(`syncChannelState failed: ${e}`);
    }
  }

  override request(operation: Operation, forward: NextLink): Observable<FetchResult> | null {
    if (!forward) return null;

    const { type, headers } = operation.getContext();

    return new Observable<FetchResult>((observer) => {
      const subscription = forward(operation).subscribe({
        next: (response) => {
          if (!response.errors && type === OrderType.flexPlan) {
            void this.syncChannelState(headers.authorization);
          }

          observer.next(response);
        },
        error: observer.error.bind(observer),
        complete: observer.complete.bind(observer),
      });

      return () => subscription.unsubscribe();
    });
  }
}
