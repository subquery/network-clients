// Copyright 2020-2022 SubQuery Pte Ltd authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { from, ApolloLink, HttpOptions } from '@apollo/client/core';

import { AuthLink } from '../auth-link';
import { DynamicHttpLink } from '../http-link/dynamicHttpLink';
import agreementMananger from '../agreementMananger';

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

  return from([authLink, httpLink]);
}