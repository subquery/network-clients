// Copyright 2020-2022 SubQuery Pte Ltd authors & contributors
// SPDX-License-Identifier: Apache-2.0

/* eslint-disable @typescript-eslint/ban-ts-comment */
import { ApolloClient, ApolloLink, InMemoryCache } from '@apollo/client/core';
import { DeploymentAuthOptions } from '@subql/apollo-links';
import dotenv from 'dotenv';
import gql from 'graphql-tag';
import { deploymentHttpLink } from '../../packages/apollo-links/src';

import { Logger } from '../../packages/apollo-links/src/utils/logger';

dotenv.config();

const mockLogger: Logger = {
  debug: jest.fn(console.log),
  error: jest.fn(console.log),
  warn: jest.fn(console.log),
  info: jest.fn(console.log),
};

const metadataQuery = gql`
  query Metadata {
    _metadata {
      indexerHealthy
      indexerNodeVersion
    }
  }
`;

describe('auth link e2e', () => {
  const testnetOptions = {
    authUrl: 'https://kepler-auth.thechaindata.com',
    deploymentId: 'QmNYsNZvM9XZuzkF3n6XcqFVxvMLfWYtEQHzszMFfNCkgt',
    httpOptions: { fetchOptions: { timeout: 5000 } },
    logger: mockLogger,
    // selector: {runnerAddresses:['0x7601D5876dC1f95a2d897B9C603B84F866FEeA18']},
  };
  const keplerOptions = {
    authUrl: 'https://kepler-auth.subquery.network',
    deploymentId: 'QmQ77QHgkKa81cVXbiChfLCcivucQpVmbim8GnnXxzd2Lu',
    httpOptions: { fetchOptions: { timeout: 5000 } },
    logger: mockLogger,
  };

  let cleanup: (() => void) | undefined;
  const makeAuthLink = (deployment: string, options: DeploymentAuthOptions) => {
    options.deploymentId = deployment;
    const { link, cleanup: _cleanup } = deploymentHttpLink(options);
    cleanup = _cleanup;
    return new ApolloClient({
      cache: new InMemoryCache(),
      defaultOptions: { query: { fetchPolicy: 'no-cache' } },
      link,
    });
  };

  afterEach(() => {
    if (cleanup) {
      cleanup();
      cleanup = undefined;
    }
    jest.clearAllMocks();
  });

  it('can query via state channel', async () => {
    // const client = await makeAuthLink('QmQ77QHgkKa81cVXbiChfLCcivucQpVmbim8GnnXxzd2Lu', keplerOptions);
    const client = makeAuthLink('QmNYsNZvM9XZuzkF3n6XcqFVxvMLfWYtEQHzszMFfNCkgt', testnetOptions);
    const res = await client.query({ query: metadataQuery });
    expect(res).toBeTruthy();
  });
});
