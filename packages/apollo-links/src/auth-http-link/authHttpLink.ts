// Copyright 2020-2022 SubQuery Pte Ltd authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { HttpOptions } from "@apollo/client";
import { from, HttpLink, } from '@apollo/client/core';
import axios from "axios";
import { AuthLink } from "../auth-link";
import { ApolloLink } from '@apollo/client/core';

interface AuthHttpOptions {
  authUrl: string;
  chainId: string;
  httpOptions: HttpOptions;
}

export async function authHttpLink(options: AuthHttpOptions): Promise<ApolloLink> {
  const { authUrl, chainId, httpOptions } = options;

  const metadataUrl = `${authUrl}/metadata/${chainId}`;
  const tokenUrl = `${authUrl}/token`;

  const headers = { 'Content-Type': 'application/json' };
  const res = await axios.get(metadataUrl, { headers });
  const { indexer, uri, deploymentId } = res.data;

  const httpLink = new HttpLink({ ...httpOptions, uri });
  const authLink = new AuthLink({ authUrl: tokenUrl, deploymentId, indexer, chainId: 1287 });

  return from([authLink, httpLink]);
}