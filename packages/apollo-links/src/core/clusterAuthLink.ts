// Copyright 2020-2022 SubQuery Pte Ltd authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { ApolloLink, FetchResult, NextLink, Observable, Operation } from '@apollo/client/core';
import { OrderManager } from '@subql/network-support';
import { Subscription } from 'zen-observable-ts';

import { Logger } from '../utils/logger';

export type ClusterAuthLinkOptions = {
  authUrl: string; // the url for geting token
  projectId: string; // chainId or deploymentId for the project
  orderManager: OrderManager; // agreement manager for managing agreements
  logger: Logger; // logger for logging
};

export class ClusterAuthLink extends ApolloLink {
  private options: ClusterAuthLinkOptions;
  private logger: Logger;
  private orderManager: OrderManager;

  constructor(options: ClusterAuthLinkOptions) {
    super();
    this.options = options;
    this.logger = options.logger;
    this.orderManager = options.orderManager;
  }

  override request(operation: Operation, forward?: NextLink): Observable<FetchResult> | null {
    if (!forward) return null;

    return new Observable<FetchResult>((observer) => {
      let sub: Subscription;

      this.orderManager
        .getRequestParams()
        .then((params) => {
          if (params) {
            const { headers, url, type, runner } = params;
            operation.setContext({ url, headers, type, indexer: runner });
            sub = forward(operation).subscribe(observer);
          } else {
            this.logger?.debug('no available orders');
            // For handling if one indexer's score is not enough for reduce retries times
            // e.g indexer have 10 score, when first failed, the score is reach to 0,
            // but because at above code set the url & indexer. retryLink also believe it's a
            // valid url. so re-try again.
            // set url is null-string can enter fallbackLink to handle if use fallback link
            // otherwise would re-try until reach the max retires.
            operation.setContext({ url: '' });
            sub = forward(operation).subscribe(observer);
          }
        })
        .catch((error) => {
          if (error.indexer) {
            this.logger?.debug(`Failed to get token: ${String(error.message)}`);
            operation.setContext({ indexer: error.indexer });
            observer.error(new Error('failed to get indexer request params'));
          } else {
            this.logger?.debug(`Failed to get order request params: ${String(error.message)}`);
            observer.error(new Error('failed to get indexer url and token'));
          }
        });

      return () => sub?.unsubscribe();
    });
  }

  private tokenToAuthHeader(token: string) {
    return { authorization: `Bearer ${token}` };
  }
}
