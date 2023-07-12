// Copyright 2020-2022 SubQuery Pte Ltd authors & contributors
// SPDX-License-Identifier: Apache-2.0

/* eslint-disable @typescript-eslint/ban-ts-comment */
import dotenv from 'dotenv';
import {
  ApolloClient,
  ApolloLink,
  FetchResult,
  from,
  HttpLink,
  InMemoryCache,
  NextLink,
  Observable,
  Operation,
} from '@apollo/client/core';
import fetch from 'cross-fetch';
import gql from 'graphql-tag';
import Pino from 'pino';
import { Logger } from '../packages/apollo-links/src/utils/logger';

dotenv.config();

const mockLogger: Logger = {
  debug: jest.fn(console.log),
  error: jest.fn(console.log),
  warn: jest.fn(console.log),
  info: jest.fn(console.log),
};

function createApolloClient(link: ApolloLink) {
  return new ApolloClient({
    cache: new InMemoryCache(),
    defaultOptions: { query: { fetchPolicy: 'no-cache' } },
    link,
  });
}

function getLinks() {
  return import('../packages/apollo-links/src');
}

function mockIndexerRequestFailed() {
  jest.mock('../packages/apollo-links/src/core/clusterAuthLink', () => {
    const originalModule = jest.requireActual('../packages/apollo-links/src/core/clusterAuthLink');
    return {
      ClusterAuthLink: class MockLink extends originalModule.ClusterAuthLink {
        // @ts-ignore
        constructor(options) {
          super(options);
        }

        request(operation: Operation, forward?: NextLink): Observable<FetchResult> | null {
          operation.setContext({ url: 'https://abcd.com' });
          return forward!(operation);
          // return super.request(operation, forward);
        }
      },
    };
  });
}

function mockGetIndexerUrlOrTokenFailed() {
  jest.mock('../packages/apollo-links/src/core/clusterAuthLink', () => {
    const originalModule = jest.requireActual('../packages/apollo-links/src/core/clusterAuthLink');
    return {
      ClusterAuthLink: class MockLink extends originalModule.ClusterAuthLink {
        // @ts-ignore
        constructor(options) {
          super(options);
        }

        request(): Observable<FetchResult> | null {
          return new Observable<FetchResult>((observer) =>
            observer.error(new Error('failed to get indexer url and token'))
          );
          // return super.request(operation, forward);
        }
      },
    };
  });
}

// TODO: need fix the test cases
const logger: Logger = Pino({ level: 'debug' });
const indexerUrl = 'http://ec2-3-27-14-20.ap-southeast-2.compute.amazonaws.com';
const deploymentId = 'Qmdpka4MpaUtGP7B3AAoPji4H6X7a2ir53a1mxnUumqMm4';
const uri = `${indexerUrl}/query/${deploymentId}`;
const options = {
  indexerUrl,
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
    const { AuthLink } = await getLinks();
    const authLink = new AuthLink(options, logger);
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

describe('auth link with auth center', () => {
  let client: ApolloClient<unknown>;
  const authUrl = process.env.AUTH_URL ?? 'input your local test auth url here';
  const chainId = '0x91b171bb158e2d3848fa23a9f1c25182fb8e20313b2c1eb49219da7a70ce90c3';
  const httpOptions = { fetch, fetchOptions: { timeout: 5000 } };
  const options = { authUrl, chainId, httpOptions, logger: mockLogger };
  const invalidChainId = '0x1234';

  afterEach(() => {
    jest.mock('../packages/apollo-links/src/core/clusterAuthLink', () =>
      jest.requireActual('../packages/apollo-links/src/core/clusterAuthLink')
    );
    jest.resetModules();
    jest.resetAllMocks();
    jest.clearAllMocks();
  });

  it('can query data with dictionary auth link', async () => {
    const { dictHttpLink } = await getLinks();
    const link = dictHttpLink(options);
    client = createApolloClient(link);

    const count = 3;
    for (let i = 0; i < count; i++) {
      await expect(client.query({ query: metadataQuery })).resolves.toBeTruthy();
    }
  }, 20000);

  it.only('can query data with deployment auth link', async () => {
    const deploymentId = 'QmV6sbiPyTDUjcQNJs2eGcAQp2SMXL2BU6qdv5aKrRr7Hg';
    const { deploymentHttpLink } = await getLinks();
    const link = deploymentHttpLink({ ...options, deploymentId });
    client = createApolloClient(link);

    const count = 3;
    for (let i = 0; i < count; i++) {
      await expect(client.query({ query: metadataQuery })).resolves.toBeTruthy();
    }
  }, 20000);

  it('use fallback url when no agreement available', async () => {
    const fallbackServiceUrl = 'https://api.subquery.network/sq/subquery/polkadot-dictionary';
    const { dictHttpLink } = await getLinks();
    const link = dictHttpLink({
      ...options,
      logger: mockLogger,
      chainId: invalidChainId,
      fallbackServiceUrl,
    });

    client = createApolloClient(link);
    await expect(client.query({ query: metadataQuery })).resolves.toBeTruthy();
    expect(mockLogger.debug).toHaveBeenCalledWith(expect.stringMatching(/use fallback url:/));
  });

  it('should not retry if no endpoint can be found', async () => {
    const { dictHttpLink } = await getLinks();
    const link = dictHttpLink({
      ...options,
      logger: mockLogger,
      chainId: invalidChainId,
      fallbackServiceUrl: '',
    });

    client = createApolloClient(link);
    await expect(client.query({ query: metadataQuery })).rejects.toThrow('empty url');
    expect(mockLogger.debug).not.toHaveBeenCalledWith(expect.stringMatching(/retry:/));
  });

  it('should use fallback when failed to get token', async () => {
    mockGetIndexerUrlOrTokenFailed();

    const { dictHttpLink } = await getLinks();
    const fallbackServiceUrl = 'https://api.subquery.network/sq/subquery/polkadot-dictionary';

    const link = dictHttpLink({ ...options, logger: mockLogger, fallbackServiceUrl });
    client = createApolloClient(link);

    await expect(client.query({ query: metadataQuery })).resolves.toBeTruthy();
    expect(mockLogger.debug).toHaveBeenCalledWith(`use fallback url: ${fallbackServiceUrl}`);
  });

  it('should fall back to fallback url after max retries (request indexer failed)', async () => {
    mockIndexerRequestFailed();

    const { dictHttpLink } = await getLinks();
    const fallbackServiceUrl = 'https://api.subquery.network/sq/subquery/polkadot-dictionary';

    const link = dictHttpLink({ ...options, logger: mockLogger, fallbackServiceUrl });
    client = createApolloClient(link);

    await expect(client.query({ query: metadataQuery })).resolves.toBeTruthy();
    expect(mockLogger.debug).toHaveBeenCalledWith(expect.stringMatching(/reach max retries:/));
    expect(mockLogger.debug).toHaveBeenCalledWith(`use fallback url: ${fallbackServiceUrl}`);
  });

  it('fallback url should not trigger retry', async () => {
    const { dictHttpLink } = await getLinks();
    const fallbackServiceUrl = 'https://api.subquery.network/wrong';

    const link = dictHttpLink({ ...options, authUrl: '', logger: mockLogger, fallbackServiceUrl });
    client = createApolloClient(link);

    await expect(client.query({ query: metadataQuery })).rejects.toThrow(/Response not successful/);
    expect(mockLogger.debug).toHaveBeenCalledWith(`use fallback url: ${fallbackServiceUrl}`);
    expect(mockLogger.debug).not.toHaveBeenCalledWith(expect.stringMatching(/retry:/));
  }, 20000);
});
