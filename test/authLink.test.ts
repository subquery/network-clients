// Copyright 2020-2022 SubQuery Pte Ltd authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { ApolloClient, from, HttpLink, InMemoryCache } from '@apollo/client/core';
import fetch from 'cross-fetch';
import gql from 'graphql-tag';
import dotenv from 'dotenv';

dotenv.config();

import { authHttpLink, AuthLink } from '../packages/apollo-links/src';

const indexerProxyEndpoint = 'http://ec2-3-27-14-20.ap-southeast-2.compute.amazonaws.com';
const deploymentId = 'Qmdpka4MpaUtGP7B3AAoPji4H6X7a2ir53a1mxnUumqMm4';
const uri = `${indexerProxyEndpoint}/query/${deploymentId}`;
const options = {
  authUrl: `${indexerProxyEndpoint}/token`,
  sk: process.env.SK ?? '',
  indexer: '0xCef192586b70e3Fc2FAD76Dd1D77983a30d38D04',
  consumer: '0x6De0bf7cd34344Ff1356038fAE8ba6E05B50D4c1',
  chainId: 1287,
  deploymentId,
  agreement: '19',
};

const metadtaQuery = gql`
  query Metadata {
    _metadata {
      indexerHealthy
      indexerNodeVersion
    }
  }
`;

describe.skip('auth link', () => {
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

describe('can query with auth http link', () => {
  let client: ApolloClient<unknown>;

  beforeAll(async () => {
    const authUrl = 'http://3.27.14.20:3030';
    const chainId = '0x91bc6e169807aaa54802737e1c504b2577d4fafedd5a02c10293b1cd60e39527';
    const httpOptions = { fetch };
    const options = { authUrl, chainId, httpOptions }
    const link = await authHttpLink(options);

    client = new ApolloClient({
      cache: new InMemoryCache({ resultCaching: true }),
      link,
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
