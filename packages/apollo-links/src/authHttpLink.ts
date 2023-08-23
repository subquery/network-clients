// Copyright 2020-2022 SubQuery Pte Ltd authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { ApolloLink, HttpOptions, from } from '@apollo/client/core';

import {
  ClusterAuthLink,
  DynamicHttpLink,
  FallbackLink,
  ResponseLink,
  creatErrorLink,
  createRetryLink,
} from './core';
import { ProjectType } from './types';
import { createCache } from './utils/cache';
import { Logger, silentLogger } from './utils/logger';
import OrderMananger from './utils/orderManager';

interface BaseAuthOptions {
  authUrl: string; // auth service url
  httpOptions: HttpOptions; // http options for init `HttpLink`
  logger?: Logger; // logger for `AuthLink`
  fallbackServiceUrl?: string; // fall back service url for `AuthLink`
  cacheEnabled?: boolean; // enable cache for `AuthLink`
  ttl?: number; // ttl for cache, milliseconds, 1 day by default
}

interface DictAuthOptions extends BaseAuthOptions {
  chainId: string; // chain id for the requested dictionary
}

interface DeploymentAuthOptions extends BaseAuthOptions {
  deploymentId: string; // deployment id
}

interface AuthOptions extends DeploymentAuthOptions {
  projectType: ProjectType; // order type
}

interface AuthHttpLink {
  link: ApolloLink;
  cleanup: () => void;
}

export function dictHttpLink(options: DictAuthOptions): AuthHttpLink {
  const { chainId } = options;
  return authHttpLink({ ...options, deploymentId: chainId, projectType: ProjectType.dictionary });
}

export function deploymentHttpLink(options: DeploymentAuthOptions): AuthHttpLink {
  return authHttpLink({ ...options, projectType: ProjectType.deployment });
}

function authHttpLink(options: AuthOptions): AuthHttpLink {
  const {
    deploymentId,
    httpOptions,
    fallbackServiceUrl,
    authUrl,
    projectType,
    logger: _logger,
    cacheEnabled,
    ttl,
  } = options;

  const logger = _logger ?? silentLogger();
  const cache = cacheEnabled !== false ? createCache({ ttl: ttl ?? 86_400_000 }) : undefined;
  const orderManager = new OrderMananger({
    authUrl,
    projectId: deploymentId,
    projectType,
    logger,
    cache,
  });

  const retryLink = createRetryLink(logger);
  const fallbackLink = new FallbackLink(fallbackServiceUrl, logger);
  const httpLink = new DynamicHttpLink({ httpOptions, logger });
  const responseLink = new ResponseLink({ authUrl, logger });
  const errorLink = creatErrorLink({ orderManager, fallbackLink, httpLink, logger });
  const authLink = new ClusterAuthLink({
    authUrl,
    projectId: deploymentId,
    logger,
    orderManager,
  });

  const cleanup = () => {
    // add more cleanup logic here if needed
    orderManager.cleanup();
  };

  // 1. errorLink: This link helps in handling and logging any GraphQL or network errors that may occur down the chain.
  //    Placing it at the beginning ensures that it catches any errors that may occur in any of the other links.
  // 2. retryLink: This comes after the errorLink to allow it to handle network errors and retry requests if necessary.
  // 3. authLink: The authLink comes next. It is responsible for adding authentication credentials to every request.
  // 4. httpLink: This should always be at the end of the link chain. This link is responsible for sending the request to the server.
  const link = from([errorLink, retryLink, authLink, fallbackLink, responseLink, httpLink]);

  return { link, cleanup };
}
