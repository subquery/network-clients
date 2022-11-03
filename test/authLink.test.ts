// Copyright 2020-2022 SubQuery Pte Ltd authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { ApolloClient, from, HttpLink, InMemoryCache } from '@apollo/client/core';
import fetch from 'cross-fetch';
import gql from 'graphql-tag';

import { AuthLink } from '../packages/apollo-links/src';

const indexerProxyEndpoint = 'http://ec2-3-27-14-20.ap-southeast-2.compute.amazonaws.com';
const deploymentId = 'Qmdpka4MpaUtGP7B3AAoPji4H6X7a2ir53a1mxnUumqMm4';
const uri = `${indexerProxyEndpoint}/query/${deploymentId}`;
const options = {
  authUrl: `${indexerProxyEndpoint}/token`,
  pk: '2de44e00deb5b936a838d61978170a4dab9f23056736fed3409301f58db07d8b',
  indexer: '0xCef192586b70e3Fc2FAD76Dd1D77983a30d38D04',
  consumer: '0x6De0bf7cd34344Ff1356038fAE8ba6E05B50D4c1',
  chainId: 1287,
  deploymentId,
  agreement: '17',
};

const metadtaQuery = gql`
  query Metadata {
    _metadata {
      indexerHealthy
      indexerNodeVersion
    }
  }
`;

describe('auth link', () => {
  let client: ApolloClient<unknown>;

  beforeAll(async () => {
    const authLink = new AuthLink(options);
    client = new ApolloClient({
      cache: new InMemoryCache({ resultCaching: true }),
      link: from([authLink, new HttpLink({ uri, fetch })]),
    });
  });

  it('can query with auth link', async () => {
    try {
      const result = await client.query({ query: metadtaQuery });
      expect(result.data._metadata).toBeTruthy();
    } catch (e) {
      console.log(`Failed to send query with auth link: ${e}`);
    }
  });
});

describe('auth link with auth center', () => {
  let client: ApolloClient<unknown>;

  beforeAll(async () => {
    const authUrl = 'http://localhost:3001/token';
    const indexer = '0xCef192586b70e3Fc2FAD76Dd1D77983a30d38D04';
    const options = { authUrl, deploymentId, indexer, chainId: 1287 };
    const authLink = new AuthLink(options);
    client = new ApolloClient({
      cache: new InMemoryCache({ resultCaching: true }),
      link: from([authLink, new HttpLink({ uri, fetch })]),
    });
  });

  it('can query with auth link', async () => {
    try {
      const result = await client.query({ query: metadtaQuery });
      expect(result.data._metadata).toBeTruthy();
    } catch (e) {
      console.log(`Failed to send query with auth link: ${e}`);
    }
  });
});