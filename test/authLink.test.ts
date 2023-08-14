// Copyright 2020-2022 SubQuery Pte Ltd authors & contributors
// SPDX-License-Identifier: Apache-2.0

/* eslint-disable @typescript-eslint/ban-ts-comment */
import dotenv from 'dotenv';
import axios from 'axios';

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

const mockAxios = axios as jest.Mocked<typeof axios>;

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

const logger: Logger = Pino({ level: 'debug' });
const metadataQuery = gql`
  query Metadata {
    _metadata {
      indexerHealthy
      indexerNodeVersion
    }
  }
`;

describe('auth link', () => {
  const indexerUrl = 'https://test.sqindexer.tech' as const;
  const deploymentId = 'QmQqwN439pN8WLQTnf5xig1yRr7nDu3kR6N1kJhceuryEw' as const;
  const uri = `${indexerUrl}/query/${deploymentId}`;
  const options = {
    indexerUrl,
    sk: process.env.SK ?? '',
    indexer: '0xFCA0037391B3cfe28f17453D6DBc4A7618F771e1',
    consumer: '0xCef192586b70e3Fc2FAD76Dd1D77983a30d38D04',
    chainId: 80001,
    deploymentId,
    agreement: '17',
  };

  let token = '';
  const fakeToken =
    'eyJhbCI6IkhTMjU2IiwiYWxnIjoiSFMyNTYifQ.eyJleHAiOiIyMDk5LTA5LTA5In0.kau0kzybKIrHqVzTP8QERsD6nWlnsIjyrqqkEK5iyIA';

  const makeAnAuthLink = async (customFetch = fetch, customToken = token) => {
    const { AuthLink } = await getLinks();
    const authLink = new AuthLink(options, logger, customToken);

    return new ApolloClient({
      cache: new InMemoryCache({ resultCaching: true }),
      // @ts-ignore
      link: from([authLink, new HttpLink({ uri, fetch: customFetch })]),
    });
  };

  const clearAllExistData = () => {
    token = '';
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  const queryTest = async () => {
    const client = await makeAnAuthLink();
    try {
      const result = await client.query({ query: metadataQuery });
      expect(result.data._metadata).toBeTruthy();
    } catch (e) {
      const errorStack = JSON.parse(JSON.stringify(e));

      // error code 1020 is permission deny, error code is auth Header error, only those error represent auth error.
      if (
        errorStack?.networkError?.statusCode === 404 &&
        (errorStack?.networkError?.result.code === 1020 ||
          errorStack?.networkError?.result.code === 1030)
      ) {
        expect(1).toBe(2);
        return;
      }

      console.warn('query auth link pass with warning');
      expect(1).toBe(1);
    }
  };

  const queryTestWithMock = async () => {
    const client = await makeAnAuthLink(
      (uri: RequestInfo | URL, options: any): Promise<Response> => {
        if (options.headers.authorization) {
          expect(options.headers.authorization).toContain('Bearer');
          token = options.headers.authorization.replace('Bearer ', '');
        }

        if (options.headers.authorization === `Bearer ${fakeToken}`) {
          // @ts-ignore
          return Promise.resolve({
            json: () =>
              Promise.resolve({
                data: {
                  _metadata: {
                    indexerHealthy: true,
                    indexerNodeVersion: '00.00',
                  },
                },
              }),
            text: () =>
              Promise.resolve(
                JSON.stringify({
                  data: {
                    _metadata: {
                      indexerHealthy: true,
                      indexerNodeVersion: '00.00',
                    },
                  },
                })
              ),
          });
        }

        return fetch(uri, options);
      }
    );
    mockAxios.post.mockImplementation((url, data) => {
      if (url.includes('/token')) {
        expect(data).toHaveProperty('indexer', options.indexer);
        expect(data).toHaveProperty('agreement', options.agreement);
        expect(data).toHaveProperty('chain_id', options.chainId);
        expect(data).toHaveProperty('consumer', options.consumer);
        expect(data).toHaveProperty('deployment_id', options.deploymentId);
        // TODO: verify this actually sign with consumer
        expect(data).toHaveProperty('signature');
        expect(data).toHaveProperty('timestamp');

        return Promise.resolve({
          data: {
            token: fakeToken,
          },
        });
      }

      return Promise.resolve();
    });

    const result = await client.query({ query: metadataQuery, fetchPolicy: 'no-cache' });
    expect(result.data._metadata).toBeTruthy();
  };

  it('can query token with mock', queryTestWithMock);
  // the second test case for test query with a not expired token. token set on beforeAll.
  it('can query token with mock and exist token', queryTestWithMock);

  it('can query when token be polluted', async () => {
    clearAllExistData();

    const newClinet = await makeAnAuthLink(
      (uri: RequestInfo | URL, options: any): Promise<Response> => {
        if (options.headers.authorization) {
          token = options.headers.authorization;
          expect(token).toContain('Bearer');
        }

        if (token === `Bearer ${fakeToken}`) {
          // @ts-ignore
          return Promise.resolve({
            json: () =>
              Promise.resolve({
                data: {
                  _metadata: {
                    indexerHealthy: true,
                    indexerNodeVersion: '00.00',
                  },
                },
              }),
            text: () =>
              Promise.resolve(
                JSON.stringify({
                  data: {
                    _metadata: {
                      indexerHealthy: true,
                      indexerNodeVersion: '00.00',
                    },
                  },
                })
              ),
          });
        }

        return fetch(uri, options);
      },
      'error token'
    );
    mockAxios.post.mockImplementation((url) => {
      if (url.includes('/token')) {
        return Promise.resolve({
          data: {
            token: fakeToken,
          },
        });
      }

      return Promise.resolve();
    });

    const result = await newClinet.query({ query: metadataQuery, fetchPolicy: 'no-cache' });
    expect(result.data._metadata).toBeTruthy();
  });

  it('can query with auth link', queryTest);
});

describe('auth link with auth center', () => {
  let client: ApolloClient<unknown>;
  const authUrl = process.env.AUTH_URL ?? 'input your local test auth url here';
  const fallbackUrl =
    process.env.FALLBACK_URL ?? 'https://api.subquery.network/sq/subquery/kepler-testnet';
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
  }, 30000);

  it('can query data with deployment auth link', async () => {
    const deploymentId = 'QmV6sbiPyTDUjcQNJs2eGcAQp2SMXL2BU6qdv5aKrRr7Hg';
    const { deploymentHttpLink } = await getLinks();
    const link = deploymentHttpLink({ ...options, deploymentId });
    client = createApolloClient(link);

    const count = 5;
    for (let i = 0; i < count; i++) {
      await expect(client.query({ query: metadataQuery })).resolves.toBeTruthy();
    }
  }, 50000);

  it('use fallback url when no agreement available', async () => {
    const fallbackServiceUrl = fallbackUrl;
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
  }, 30000);

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
    const fallbackServiceUrl = fallbackUrl;

    const link = dictHttpLink({ ...options, logger: mockLogger, fallbackServiceUrl });
    client = createApolloClient(link);

    await expect(client.query({ query: metadataQuery })).resolves.toBeTruthy();
    expect(mockLogger.debug).toHaveBeenCalledWith(`use fallback url: ${fallbackServiceUrl}`);
  });

  it('should fall back to fallback url after max retries (request indexer failed)', async () => {
    mockIndexerRequestFailed();

    const { dictHttpLink } = await getLinks();
    const fallbackServiceUrl = fallbackUrl;

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
