// Copyright 2020-2022 SubQuery Pte Ltd authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { from, ApolloLink, HttpOptions } from '@apollo/client/core';

import { ClusterAuthLink } from './auth-link';
import { DynamicHttpLink } from './dynamicHttpLink';
import OrderMananger from './orderManager';
import { creatErrorLink } from './errorLink';
import { createRetryLink } from './retryLink';
import { Logger, silentLogger } from './logger';
import { FallbackLink } from './fallbackLink';
import { OrderType } from './types';

interface DictAuthOptions extends BaseAuthOptions {
  chainId: string; // chain id for the requested dictionary
}

interface DeploymentAuthOptions extends BaseAuthOptions {
  deploymentId: string; // deployment id
}

interface AuthOptions extends DeploymentAuthOptions {
  orderType: OrderType; // order type
}

interface BaseAuthOptions {
  authUrl: string; // auth service url
  httpOptions: HttpOptions; // http options for init `HttpLink`
  logger?: Logger; // logger for `AuthLink`
  fallbackServiceUrl?: string; // fall back service url for `AuthLink`
}

export function dictHttpLink(options: DictAuthOptions): ApolloLink {
  const { chainId } = options;
  return authHttpLink({ ...options, deploymentId: chainId, orderType: OrderType.dictionary });
}

export function deploymentHttpLink(options: DeploymentAuthOptions): ApolloLink {
  return authHttpLink({ ...options, orderType: OrderType.deployment });
}

function authHttpLink(options: AuthOptions): ApolloLink {
  const {
    deploymentId,
    httpOptions,
    fallbackServiceUrl,
    authUrl,
    logger: _logger,
    orderType,
  } = options;

  const logger = _logger ?? silentLogger();
  const orderMananger = new OrderMananger({
    authUrl,
    projectId: deploymentId,
    logger,
    orderType,
  });

  const retryLink = createRetryLink(logger);
  const fallbackLink = new FallbackLink(fallbackServiceUrl, logger);
  const httpLink = new DynamicHttpLink({ httpOptions, logger });
  const errorLink = creatErrorLink({ logger, fallbackLink, httpLink });
  const authLink = new ClusterAuthLink({
    authUrl,
    projectId: deploymentId,
    logger,
    orderMananger,
  });

  // 1. errorLink: This link helps in handling and logging any GraphQL or network errors that may occur down the chain.
  //    Placing it at the beginning ensures that it catches any errors that may occur in any of the other links.
  // 2. retryLink: This comes after the errorLink to allow it to handle network errors and retry requests if necessary.
  // 3. authLink: The authLink comes next. It is responsible for adding authentication credentials to every request.
  // 4. httpLink: This should always be at the end of the link chain. This link is responsible for sending the request to the server.
  return from([errorLink, retryLink, authLink, fallbackLink, httpLink]);
}
