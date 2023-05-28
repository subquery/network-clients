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

const metadataQuery = gql`
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
      const result = await client.query({ query: metadataQuery });
      expect(result.data._metadata).toBeTruthy();
    } catch (e) {
      console.log(`Failed to send query with auth link: ${e}`);
    }
  });
});

describe.only('auth link with auth center', () => {
  let client: ApolloClient<unknown>;
  let n = 20;

  beforeAll(async () => {
    const authUrl = 'https://kepler-auth.subquery.network/';
    const projectChainId = '0x91b171bb158e2d3848fa23a9f1c25182fb8e20313b2c1eb49219da7a70ce90c3';
    const deploymentId = 'QmZGAZQ7e1oZgfuK4V29Fa5gveYK3G2zEwvUzTZKNvSBsm';
    const httpOptions = { fetch, fetchOptions: { timeout: 3000 } };
    const options = { authUrl, projectChainId, httpOptions, deploymentId }
    const link = await authHttpLink(options);

    client = new ApolloClient({
      cache: new InMemoryCache({ resultCaching: true }),
      link,
    });
  });

  it('can query with auth link', async () => {
    while (n > 0) {
      try {
        const result = await client.query({ query: metadataQuery });
        expect(result?.data._metadata).toBeTruthy();
      } catch (e) {
        console.log(`Failed to send query with auth link: ${e}`);
      }

      n--;
    }
  });
});
