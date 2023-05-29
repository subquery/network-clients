// Copyright 2020-2022 SubQuery Pte Ltd authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { from, ApolloLink, HttpOptions } from '@apollo/client/core';

import { AuthLink } from './auth-link';
import { DynamicHttpLink } from './dynamicHttpLink';
import agreementMananger from './agreementMananger';
import { errorLink } from './errorLink';
import { retryLink } from './retryLink';

interface AuthHttpOptions {
  authUrl: string;          // auth service url
  projectChainId: string;   // genesis hash of the chain
  httpOptions: HttpOptions; // http options for init `HttpLink`
  backupDictionary?: string; // backup dictionary for `AuthLink`
  deploymentId: string;     // deployment id of the project
}

export function authHttpLink(options: AuthHttpOptions): ApolloLink {
  const { projectChainId, httpOptions, backupDictionary, deploymentId, authUrl } = options;

  agreementMananger.init(authUrl, projectChainId);
  agreementMananger.start();

  const httpLink = new DynamicHttpLink({ httpOptions, backupDictionary });
  const authLink = new AuthLink({ authUrl, deploymentId, indexer: '', projectChainId });
  
  // 1. errorLink: This link helps in handling and logging any GraphQL or network errors that may occur down the chain. 
  //    Placing it at the beginning ensures that it catches any errors that may occur in any of the other links.
  // 2. retryLink: This comes after the errorLink to allow it to handle network errors and retry requests if necessary.
  // 3. authLink: The authLink comes next. It is responsible for adding authentication credentials to every request.
  // 4. httpLink: This should always be at the end of the link chain. This link is responsible for sending the request to the server.
  return from([authLink, httpLink]);
}