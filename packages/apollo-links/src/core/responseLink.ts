// Copyright 2020-2022 SubQuery Pte Ltd authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { ApolloLink, FetchResult, NextLink, Observable, Operation } from '@apollo/client/core';
import { Logger } from '../utils/logger';
import { POST } from '../utils/query';
import { ChannelState, OrderType } from '../types';

export type ResponseLinkOptions = {
  authUrl: string;
  logger?: Logger;
};

export class ResponseLink extends ApolloLink {
  private options: ResponseLinkOptions;

  constructor(private option: ResponseLinkOptions) {
    super();
    this.options = option;
  }

  get logger(): Logger | undefined {
    return this.options.logger;
  }

  tokenToStateChannel(authToken: string): ChannelState | undefined {
    try {
      const token = JSON.parse(authToken) as ChannelState;
      return token;
    } catch (e) {
      this.logger?.debug(`invalid token: ${authToken} ${e}`);
    }
  }

  async syncChannelState(state: ChannelState): Promise<void> {
    try {
      const stateUrl = new URL('/channel/state', this.options.authUrl);
      await POST(stateUrl.toString(), state);
      this.logger?.debug(`syncChannelState succeed`);
    } catch (e) {
      this.logger?.debug(`syncChannelState failed: ${e}`);
    }
  }

  override request(operation: Operation, forward: NextLink): Observable<FetchResult> | null {
    if (!forward) return null;

    const { type } = operation.getContext();

    return new Observable<FetchResult>((observer) => {
      const subscription = forward(operation).subscribe({
        next: (response: FetchResult<Record<string, any>> & { state: ChannelState }) => {
          if (!response.errors && type === OrderType.flexPlan) {
            void this.syncChannelState(response.state);
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
