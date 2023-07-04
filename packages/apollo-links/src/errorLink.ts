// Copyright 2020-2022 SubQuery Pte Ltd authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { onError } from '@apollo/client/link/error';
import { Logger } from './logger';
import { ApolloLink, FetchResult, NextLink, Observable } from '@apollo/client/core';

export type ErrorLinkOption = {
  logger?: Logger;
  fallbackLink: ApolloLink;
  httpLink: ApolloLink;
};

export const creatErrorLink = ({ logger, fallbackLink, httpLink }: ErrorLinkOption) =>
  onError(({ graphQLErrors, networkError, operation, forward }) => {
    if (graphQLErrors)
      graphQLErrors.forEach(({ message, locations, path }) =>
        logger?.debug(
          `[GraphQL error]: Message: ${message}, Location: ${JSON.stringify(
            locations
          )}, Path: ${path}`
        )
      );

    if (networkError) {
      if (!operation.getContext().fallback) {
        operation.setContext({ url: undefined });
        return fallbackLink.request(
          operation,
          httpLink.request.bind(httpLink) as NextLink
        ) as Observable<FetchResult>;
      }
      logger?.debug(`[Network error]: ${networkError}`);
    }
  });
