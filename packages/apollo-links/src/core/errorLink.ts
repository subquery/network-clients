// Copyright 2020-2022 SubQuery Pte Ltd authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { ApolloLink, FetchResult, NextLink, Observable } from '@apollo/client/core';
import { onError } from '@apollo/client/link/error';
import { OrderManager, ScoreType } from '@subql/network-support';
import { Logger } from '../utils/logger';

export type ErrorLinkOption = {
  orderManager: OrderManager;
  fallbackLink: ApolloLink;
  httpLink: ApolloLink;
  useImmediateFallbackOnError?: boolean;
  logger?: Logger;
};

export const creatErrorLink = ({
  fallbackLink,
  httpLink,
  orderManager,
  useImmediateFallbackOnError,
  logger,
}: ErrorLinkOption) =>
  onError(({ graphQLErrors, networkError, operation, forward }) => {
    const { indexer } = operation.getContext();
    if (networkError) {
      orderManager.updateScore(indexer, ScoreType.NETWORK);
      logger?.debug(`[Network error]: ${networkError}`);
    }

    if (graphQLErrors) {
      graphQLErrors.forEach(({ message, locations, path }) => {
        orderManager.updateScore(indexer, ScoreType.GRAPHQL);
        logger?.debug(
          `[GraphQL error]: Message: ${message}, Location: ${JSON.stringify(
            locations
          )}, Path: ${path}`
        );
      });
    }
    // graphql error is 200 status. 200 would not handle by retryLink.
    // network error will retry before enter this handler.
    // both them are need use fallback url to retry.
    if (networkError || (graphQLErrors && useImmediateFallbackOnError)) {
      if (!operation.getContext().fallback) {
        operation.setContext({ url: undefined });
        return fallbackLink.request(
          operation,
          httpLink.request.bind(httpLink) as NextLink
        ) as Observable<FetchResult>;
      }
    }

    return forward(operation);
  });
