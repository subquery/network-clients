// Copyright 2020-2022 SubQuery Pte Ltd authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { ApolloLink, FetchResult, NextLink, Observable, Operation } from '@apollo/client/core';
import { ChannelState, OrderManager, OrderType, ScoreType, State } from '@subql/network-support';
import { Base64 } from 'js-base64';
import { Logger } from '../utils/logger';

export type ResponseLinkOptions = {
  authUrl: string;
  orderManager: OrderManager;
  logger?: Logger;
};

export class ResponseLink extends ApolloLink {
  constructor(private options: ResponseLinkOptions) {
    super();
  }

  get logger(): Logger | undefined {
    return this.options.logger;
  }

  override request(operation: Operation, forward: NextLink): Observable<FetchResult> | null {
    if (!forward) return null;

    const { type, indexer, channelId } = operation.getContext();

    return new Observable<FetchResult>((observer) => {
      const subscription = forward(operation).subscribe({
        next: (response: FetchResult<Record<string, any>> & { state: State | ChannelState }) => {
          if (!response.errors || response.errors?.length === 0) {
            this.options.orderManager.updateScore(indexer, ScoreType.SUCCESS);
          }

          if (type === OrderType.flexPlan) {
            const responseHeaders = operation.getContext().response.headers;
            if (responseHeaders) {
              let channelState: State | ChannelState;
              if (responseHeaders.get('X-Channel-State')) {
                try {
                  channelState = JSON.parse(
                    Base64.decode(responseHeaders.get('X-Channel-State')).toString()
                  ) as ChannelState;
                } catch {
                  channelState = {
                    authorization: responseHeaders.get('X-Channel-State'),
                  };
                }
              } else {
                channelState = response.state;
              }

              if (!channelState) {
                this.logger?.debug("Can't find the channel state information");
              }
              void this.options.orderManager.syncChannelState(channelId, channelState);
            }
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
