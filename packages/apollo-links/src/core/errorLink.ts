// Copyright 2020-2022 SubQuery Pte Ltd authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { ApolloLink, FetchResult, NextLink, Observable } from '@apollo/client/core';
import { onError } from '@apollo/client/link/error';
import { Logger } from '../utils/logger';
import OrderManager from '../utils/orderManager';

export type ErrorLinkOption = {
  orderManager: OrderManager;
  fallbackLink: ApolloLink;
  httpLink: ApolloLink;
  logger?: Logger;
};

export const creatErrorLink = ({ fallbackLink, httpLink, orderManager, logger }: ErrorLinkOption) =>
  onError(({ graphQLErrors, networkError, operation }) => {
    const { indexer } = operation.getContext();

    if (graphQLErrors)
      graphQLErrors.forEach(({ message, locations, path }) => {
        orderManager.updateIndexerScore(indexer, 'graphql');
        logger?.info(
          `[GraphQL error]: Message: ${message}, Location: ${JSON.stringify(
            locations
          )}, Path: ${path}`
        );
      });

    if (networkError) {
      orderManager.updateIndexerScore(indexer, 'network');
      if (!operation.getContext().fallback) {
        operation.setContext({ url: undefined });
        return fallbackLink.request(
          operation,
          httpLink.request.bind(httpLink) as NextLink
        ) as Observable<FetchResult>;
      }
      logger?.info(`[Network error]: ${networkError}`);
    }
  });
