// Copyright 2020-2022 SubQuery Pte Ltd authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { onError } from "@apollo/client/link/error";
import Pino from 'pino';

export const creatErrorLink = (logger: Pino.Logger) => onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.forEach(({ message, locations, path }) =>
      logger.warn(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    );

  if (networkError) {
    logger.warn(`[Network error]: ${networkError}`);
  }
});
