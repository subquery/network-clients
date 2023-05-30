// Copyright 2020-2022 SubQuery Pte Ltd authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { onError } from "@apollo/client/link/error";
import { Logger } from "./types";

export const creatErrorLink = (logger: Logger) => onError(({ graphQLErrors, networkError }) => {
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
