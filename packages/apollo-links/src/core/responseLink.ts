// Copyright 2020-2022 SubQuery Pte Ltd authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { ApolloLink, FetchResult, NextLink, Observable, Operation } from '@apollo/client/core';
import { ChannelState, OrderType, POST } from '@subql/network-support';
import { Base64 } from 'js-base64';
import { Logger } from '../utils/logger';

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

  async syncChannelState(state: ChannelState): Promise<void> {
    try {
      const stateUrl = new URL('/channel/state', this.options.authUrl);
      const res = await POST<{ consumerSign: string }>(stateUrl.toString(), state);

      if (res.consumerSign) {
        this.logger?.debug(`syncChannelState succeed`);
      } else {
        this.logger?.debug(`syncChannelState failed: ${JSON.stringify(res)}`);
      }
    } catch (e) {
      this.logger?.debug(`syncChannelState failed: ${String(e)}`);
    }
  }

  override request(operation: Operation, forward: NextLink): Observable<FetchResult> | null {
    if (!forward) return null;

    const { type } = operation.getContext();

    return new Observable<FetchResult>((observer) => {
      const subscription = forward(operation).subscribe({
        next: (response: FetchResult<Record<string, any>> & { state: ChannelState }) => {
          if (!response.errors && type === OrderType.flexPlan) {
            const responseHeaders = operation.getContext().response.headers;
            const channelState = responseHeaders.get('X-Channel-State')
              ? (JSON.parse(
                  Base64.decode(responseHeaders.get('X-Channel-State')).toString()
                ) as ChannelState)
              : response.state;
            void this.syncChannelState(channelState);
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
