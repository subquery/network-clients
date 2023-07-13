// Copyright 2020-2022 SubQuery Pte Ltd authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { from, ApolloLink, HttpOptions } from '@apollo/client/core';

import OrderMananger from './utils/orderManager';
import { Logger, silentLogger } from './utils/logger';
import { ProjectType } from './types';
import {
  createRetryLink,
  FallbackLink,
  DynamicHttpLink,
  ResponseLink,
  creatErrorLink,
  ClusterAuthLink,
} from './core';

interface DictAuthOptions extends BaseAuthOptions {
  chainId: string; // chain id for the requested dictionary
}

interface DeploymentAuthOptions extends BaseAuthOptions {
  deploymentId: string; // deployment id
}

interface AuthOptions extends DeploymentAuthOptions {
  projectType: ProjectType; // order type
}

interface BaseAuthOptions {
  authUrl: string; // auth service url
  httpOptions: HttpOptions; // http options for init `HttpLink`
  logger?: Logger; // logger for `AuthLink`
  fallbackServiceUrl?: string; // fall back service url for `AuthLink`
}

export function dictHttpLink(options: DictAuthOptions): ApolloLink {
  const { chainId } = options;
  return authHttpLink({ ...options, deploymentId: chainId, projectType: ProjectType.dictionary });
}

export function deploymentHttpLink(options: DeploymentAuthOptions): ApolloLink {
  return authHttpLink({ ...options, projectType: ProjectType.deployment });
}

function authHttpLink(options: AuthOptions): ApolloLink {
  const {
    deploymentId,
    httpOptions,
    fallbackServiceUrl,
    authUrl,
    logger: _logger,
    projectType,
  } = options;

  const logger = _logger ?? silentLogger();
  const orderMananger = new OrderMananger({
    authUrl,
    projectId: deploymentId,
    logger,
    projectType,
  });

  const retryLink = createRetryLink(logger);
  const fallbackLink = new FallbackLink(fallbackServiceUrl, logger);
  const httpLink = new DynamicHttpLink({ httpOptions, logger });
  const responseLink = new ResponseLink({ logger, authUrl });
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
  return from([errorLink, retryLink, authLink, fallbackLink, responseLink, httpLink]);
}
