// Copyright 2020-2022 SubQuery Pte Ltd authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { from, HttpLink, ApolloLink, HttpOptions } from '@apollo/client/core';

import { AuthLink, GET } from "../auth-link";

interface AuthHttpOptions {
  authUrl: string;          // auth service url
  chainId: string;          // genesis hash of the chain
  httpOptions: HttpOptions; // http options for init `HttpLink`
}

export async function authHttpLink(options: AuthHttpOptions): Promise<ApolloLink> {
  const { authUrl, chainId, httpOptions } = options;

  const metadataUrl = `${authUrl}/metadata/${chainId}`;
  const tokenUrl = `${authUrl}/token`;

  const { indexer, uri, deploymentId } = await GET<{ indexer: string; uri: string; deploymentId: string }>(metadataUrl);

  const httpLink = new HttpLink({ ...httpOptions, uri });
  const authLink = new AuthLink({ authUrl: tokenUrl, deploymentId, indexer, chainId: 1287 });

  return from([authLink, httpLink]);
}