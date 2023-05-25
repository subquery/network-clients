// Copyright 2020-2022 SubQuery Pte Ltd authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { from, ApolloLink, HttpOptions } from '@apollo/client/core';

import { AuthLink, GET } from '../auth-link';
import { DynamicHttpLink } from '../http-link/dynamicHttpLink';
import { Agreement } from '../types';

interface AuthHttpOptions {
  authUrl: string;          // auth service url
  chainId: string;          // genesis hash of the chain
  httpOptions: HttpOptions; // http options for init `HttpLink`
  backupDictionary: string; // backup dictionary for `AuthLink`
}

interface AgreementsResponse {
  agreements: Agreement[];
  deploymentId: string;
  networkChainId: number;
}

export async function authHttpLink(options: AuthHttpOptions): Promise<ApolloLink> {
  const { chainId, httpOptions, backupDictionary } = options;

  const authUrl = options.authUrl?.trim().replace(/\/+$/, '');

  // TODO: 1. get all the available indexers, indexer { address, deploymentId, networkChainId, uri }
  const agreementsURL = `${authUrl}/agreements/${chainId}`;
  const { agreements, deploymentId, networkChainId } = await GET<AgreementsResponse>(agreementsURL);

  const httpLink = new DynamicHttpLink({ httpOptions, backupDictionary });
  const authLink = new AuthLink({ authUrl, deploymentId, indexer: '', chainId: networkChainId });

  return from([authLink, httpLink]);
}