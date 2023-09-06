// Copyright 2020-2022 SubQuery Pte Ltd authors & contributors
// SPDX-License-Identifier: Apache-2.0

/* eslint-disable @typescript-eslint/ban-ts-comment */
import axios from 'axios';

const mockAxios = axios as jest.Mocked<typeof axios>;

import dotenv from 'dotenv';

import { ApolloClient, ApolloLink, from, HttpLink, InMemoryCache } from '@apollo/client/core';
import fetch from 'cross-fetch';
import gql from 'graphql-tag';
import Pino from 'pino';
import { ProjectType } from '../packages/apollo-links/src/types';
import { Logger } from '../packages/apollo-links/src/utils/logger';

dotenv.config();

const fakeToken =
  'eyJhbCI6IkhTMjU2IiwiYWxnIjoiSFMyNTYifQ.eyJleHAiOiIyMDk5LTA5LTA5In0.kau0kzybKIrHqVzTP8QERsD6nWlnsIjyrqqkEK5iyIA';
const indexerSign =
  '000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001b';

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
    sk: process.env.SK ?? '000000000000000000000000000000000000000000000000000000000000000f',
    indexer: '0xFCA0037391B3cfe28f17453D6DBc4A7618F771e1',
    consumer: '0xCef192586b70e3Fc2FAD76Dd1D77983a30d38D04',
    chainId: 80001,
    deploymentId,
    agreement: '17',
  };

  let token = '';

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

  const queryTestWithMock = async () => {
    const client = await makeAnAuthLink(
      (uri: RequestInfo | URL, options: any): Promise<Response> => {
        expect(options.headers.authorization).toContain('Bearer');
        expect(options.headers.authorization.length).toBeGreaterThan('Bearer '.length);

        token = options.headers.authorization.replace('Bearer ', '');

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

  it('mock: can query token ', queryTestWithMock);
  // the second test case for test query with a not expired token. token set on beforeAll.
  it('mock: can query token with exist token', queryTestWithMock);

  it('mock: can query if token be polluted', async () => {
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
});

describe('mock: auth link with auth center', () => {
  let client: ApolloClient<unknown>;
  const authUrl = process.env.AUTH_URL ?? 'https://kepler-auth.subquery.network';
  const chainId = '0x91b171bb158e2d3848fa23a9f1c25182fb8e20313b2c1eb49219da7a70ce90c3';
  const httpOptions = { fetch, fetchOptions: { timeout: 5000 } };
  const options = { authUrl, chainId, httpOptions, logger: mockLogger };

  afterEach(() => {
    jest.mock('../packages/apollo-links/src/core/clusterAuthLink', () =>
      jest.requireActual('../packages/apollo-links/src/core/clusterAuthLink')
    );
    jest.resetAllMocks();
    jest.clearAllMocks();
  });

  it('mock: can query data with dictionary auth link', async () => {
    const { dictHttpLink } = await getLinks();

    mockAxios.get.mockImplementation((url) => {
      if (url.includes(`/orders/${ProjectType.dictionary}`)) {
        return Promise.resolve({
          data: {
            agreements: [
              {
                id: '655',
                url: 'https://mock-sv/query/QmZGAZQ7e1oZgfuK4V29Fa5gveYK3G2zEwvUzTZKNvSBsm',
                indexer: '0x0000000000000',
                metadata: {
                  chain: 'Polkadot',
                  genesisHash: '0x91b171bb158e2d3848fa23a9f1c25182fb8e20313b2c1eb49219da7a70ce90c3',
                  indexerHealthy: true,
                  indexerNodeVersion: '2.10.0',
                  lastProcessedHeight: 16838659,
                  lastProcessedTimestamp: '1691999699898',
                  queryNodeVersion: '2.4.0',
                  specName: 'polkadot',
                  startHeight: 1,
                  targetHeight: 16838659,
                },
                score: 100,
              },
            ],
            plans: [],
          },
        });
      }

      return Promise.resolve();
    });

    mockAxios.post.mockImplementation((url) => {
      if (url.includes('/orders/token')) {
        return Promise.resolve({
          data: {
            token: fakeToken,
          },
        });
      }

      return Promise.resolve();
    });

    const { link } = dictHttpLink({
      ...options,
      chainId,
      httpOptions: {
        ...httpOptions,
        fetch: (uri: RequestInfo | URL, options: any): Promise<Response> => {
          expect(options.headers.authorization).toContain('Bearer');
          expect(options.headers.authorization.length).toBeGreaterThan('Bearer '.length);
          if (uri.toString().includes('mock-sv/query')) {
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
      },
    });
    client = createApolloClient(link);

    const result = await client.query({ query: metadataQuery });

    expect(result.data._metadata).toBeTruthy();
  }, 5000);

  it('mock: can query data with payg', async () => {
    const deploymentId = 'QmV6sbiPyTDUjcQNJs2eGcAQp2SMXL2BU6qdv5aKrRr7Hg';
    const { deploymentHttpLink } = await getLinks();
    const signBeforeQueryPayg = jest.fn();
    const stateAfterQueryPayg = jest.fn();

    mockAxios.get.mockImplementation((url) => {
      if (url.includes(`/orders/${ProjectType.deployment}`)) {
        return Promise.resolve({
          data: {
            agreements: [],
            plans: [
              {
                id: '0x091abb40d77fe1f340a98a57a0c5bc24b3a9b91007e345ea4795901d9698adf4',
                url: 'https://mock-request/payg/QmUVXKjcsYkS6WfJQfeD7juDbnMWCuo5qKgRRo893LajE2',
                indexer: '0x000000000000000c',
                metadata: {
                  chain: '137',
                  genesisHash: '0xa9c28ce2141b56c474f1dc504bee9b01eb1bd7d1a507580d5519d4437a97de1b',
                  indexerHealthy: true,
                  indexerNodeVersion: '2.10.0',
                  lastProcessedHeight: 46285057,
                  lastProcessedTimestamp: '1691992757459',
                  queryNodeVersion: '2.4.0',
                  specName: 'ethereum',
                  startHeight: 41192135,
                  targetHeight: 46285057,
                },
                score: 100,
              },
            ],
          },
        });
      }

      return Promise.resolve();
    });

    mockAxios.post.mockImplementation((url, data) => {
      if (url.includes('/channel/sign')) {
        expect(data).toHaveProperty('deployment');
        expect(data).toHaveProperty('channelId');
        signBeforeQueryPayg();

        return Promise.resolve({
          data: {
            channelId: '0x91ABB40D77FE1F340A98A57A0C5BC24B3A9B91007E345EA4795901D9698ADF4',
            consumer: '0x0000000000000000',
            consumerSign: indexerSign,
            indexer: '0x000000000000000c',
            indexerSign,
            isFinal: false,
            remote: '10000000000000000',
            spent: '10000000000000000',
          },
        });
      }

      if (url.includes('/channel/state')) {
        expect(data).toBeInstanceOf(Object);
        expect(data).toHaveProperty('channelId');
        expect(data).toHaveProperty('consumer');
        expect(data).toHaveProperty('consumerSign');
        expect(data).toHaveProperty('indexer');
        expect(data).toHaveProperty('indexerSign');
        expect((data as { indexerSign: string }).indexerSign).not.toEqual(indexerSign);

        stateAfterQueryPayg();
      }

      return Promise.resolve();
    });

    const { link } = deploymentHttpLink({
      ...options,
      deploymentId,
      httpOptions: {
        ...httpOptions,
        fetch: (uri: RequestInfo | URL, options: any): Promise<Response> => {
          if (uri.toString().includes('mock-request/payg')) {
            const authorization = JSON.parse(options.headers.authorization);
            expect(authorization).toHaveProperty('channelId');
            expect(authorization).toHaveProperty('consumer');
            expect(authorization).toHaveProperty('consumerSign');
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
                  state: {
                    channelId: '0x91ABB40D77FE1F340A98A57A0C5BC24B3A9B91007E345EA4795901D9698ADF4',
                    consumer: '0x0000000',
                    consumerSign:
                      'e239518860984116c1bee0264c3ad1df02c574db56be715e9a74b665a160fc56782db19f7a40c354b661ad8279e1a1ca99dfed25264e9d8bfc89427a70d5c0451c',
                    indexer: '0x11111111',
                    indexerSign:
                      '4db7ad2c0c4426cec02c05586b2363c23358394ea540d516dc6f7efdffd3a6967205c115fea4e3054f74aaf0f27c4b90416bee71f9775915d315644720a61d2a1b',
                    isFinal: false,
                    remote: '10000000000000000',
                    spent: '10000000000000000',
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
                    state: {
                      channelId:
                        '0x91ABB40D77FE1F340A98A57A0C5BC24B3A9B91007E345EA4795901D9698ADF4',
                      consumer: '0x0000000',
                      consumerSign:
                        'e239518860984116c1bee0264c3ad1df02c574db56be715e9a74b665a160fc56782db19f7a40c354b661ad8279e1a1ca99dfed25264e9d8bfc89427a70d5c0451c',
                      indexer: '0x11111111',
                      indexerSign:
                        '4db7ad2c0c4426cec02c05586b2363c23358394ea540d516dc6f7efdffd3a6967205c115fea4e3054f74aaf0f27c4b90416bee71f9775915d315644720a61d2a1b',
                      isFinal: false,
                      remote: '10000000000000000',
                      spent: '10000000000000000',
                    },
                  })
                ),
            });
          }

          return fetch(uri, options);
        },
      },
    });
    client = createApolloClient(link);

    const result = await client.query({ query: metadataQuery });

    expect(result.data._metadata).toBeTruthy();
    expect(signBeforeQueryPayg).toBeCalledTimes(1);
    expect(stateAfterQueryPayg).toBeCalledTimes(1);
  }, 5000);

  it('mock: can query data with service agreement', async () => {
    const deploymentId = 'QmV6sbiPyTDUjcQNJs2eGcAQp2SMXL2BU6qdv5aKrRr7Hg';
    const { deploymentHttpLink } = await getLinks();

    mockAxios.get.mockImplementation((url) => {
      if (url.includes(`/orders/${ProjectType.deployment}`)) {
        return Promise.resolve({
          data: {
            agreements: [
              {
                id: '655',
                url: 'https://mock-sv/query/QmZGAZQ7e1oZgfuK4V29Fa5gveYK3G2zEwvUzTZKNvSBsm',
                indexer: '0x0000000000000',
                metadata: {
                  chain: 'Polkadot',
                  genesisHash: '0x91b171bb158e2d3848fa23a9f1c25182fb8e20313b2c1eb49219da7a70ce90c3',
                  indexerHealthy: true,
                  indexerNodeVersion: '2.10.0',
                  lastProcessedHeight: 16838659,
                  lastProcessedTimestamp: '1691999699898',
                  queryNodeVersion: '2.4.0',
                  specName: 'polkadot',
                  startHeight: 1,
                  targetHeight: 16838659,
                },
                score: 100,
              },
            ],
            plans: [],
          },
        });
      }

      return Promise.resolve();
    });

    mockAxios.post.mockImplementation((url) => {
      if (url.includes('/orders/token')) {
        return Promise.resolve({
          data: {
            token: fakeToken,
          },
        });
      }

      return Promise.resolve();
    });

    const { link } = deploymentHttpLink({
      ...options,
      deploymentId,
      httpOptions: {
        ...httpOptions,
        fetch: (uri: RequestInfo | URL, options: any): Promise<Response> => {
          expect(options.headers.authorization).toContain('Bearer');
          expect(options.headers.authorization.length).toBeGreaterThan('Bearer '.length);
          if (uri.toString().includes('mock-sv/query')) {
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
      },
    });
    client = createApolloClient(link);

    const result = await client.query({ query: metadataQuery });

    expect(result.data._metadata).toBeTruthy();
  }, 5000);

  it('mock: can query data with payg when one of source query failed or the good one failed by chance', async () => {
    const deploymentId = 'QmV6sbiPyTDUjcQNJs2eGcAQp2SMXL2BU6qdv5aKrRr7Hg';
    const { deploymentHttpLink } = await getLinks();
    const signBeforeQueryPayg = jest.fn();
    const stateAfterQueryPayg = jest.fn();
    let times = 0;
    mockAxios.get.mockImplementation((url) => {
      if (url.includes(`/orders/${ProjectType.deployment}`)) {
        return Promise.resolve({
          data: {
            agreements: [],
            plans: [
              {
                id: '0x091abb40d77fe1f340a98a57a0c5bc24b3a9b91007e345ea4795901d9698adf4',
                url: 'https://mock-request/payg/QmUVXKjcsYkS6WfJQfeD7juDbnMWCuo5qKgRRo893LajE2',
                indexer: '0x000000000000000c',
                metadata: {
                  chain: '137',
                  genesisHash: '0xa9c28ce2141b56c474f1dc504bee9b01eb1bd7d1a507580d5519d4437a97de1b',
                  indexerHealthy: true,
                  indexerNodeVersion: '2.10.0',
                  lastProcessedHeight: 46285057,
                  lastProcessedTimestamp: '1691992757459',
                  queryNodeVersion: '2.4.0',
                  specName: 'ethereum',
                  startHeight: 41192135,
                  targetHeight: 46285057,
                },
                score: 100,
              },
              {
                id: '0x091abb40d77fe1f340a98a57a0c5bc24b3a9b91007e345ea4795901d9698adf4',
                url: 'https://mock-real-request/payg/QmUVXKjcsYkS6WfJQfeD7juDbnMWCuo5qKgRRo893LajE2',
                indexer: '0x000000000000000c',
                metadata: {
                  chain: '137',
                  genesisHash: '0xa9c28ce2141b56c474f1dc504bee9b01eb1bd7d1a507580d5519d4437a97de1b',
                  indexerHealthy: true,
                  indexerNodeVersion: '2.10.0',
                  lastProcessedHeight: 46285057,
                  lastProcessedTimestamp: '1691992757459',
                  queryNodeVersion: '2.4.0',
                  specName: 'ethereum',
                  startHeight: 41192135,
                  targetHeight: 46285057,
                },
                score: 100,
              },
            ],
          },
        });
      }

      return Promise.resolve();
    });

    mockAxios.post.mockImplementation((url, data) => {
      if (url.includes('/channel/sign')) {
        expect(data).toHaveProperty('deployment');
        expect(data).toHaveProperty('channelId');
        signBeforeQueryPayg();

        return Promise.resolve({
          data: {
            channelId: '0x91ABB40D77FE1F340A98A57A0C5BC24B3A9B91007E345EA4795901D9698ADF4',
            consumer: '0x0000000000000000',
            consumerSign: indexerSign,
            indexer: '0x000000000000000c',
            indexerSign,
            isFinal: false,
            remote: '10000000000000000',
            spent: '10000000000000000',
          },
        });
      }

      if (url.includes('/channel/state')) {
        expect(data).toBeInstanceOf(Object);
        expect(data).toHaveProperty('channelId');
        expect(data).toHaveProperty('consumer');
        expect(data).toHaveProperty('consumerSign');
        expect(data).toHaveProperty('indexer');
        expect(data).toHaveProperty('indexerSign');
        expect((data as { indexerSign: string }).indexerSign).not.toEqual(indexerSign);
        stateAfterQueryPayg();
      }

      return Promise.resolve();
    });

    const { link } = deploymentHttpLink({
      ...options,
      deploymentId,
      httpOptions: {
        ...httpOptions,
        fetch: (uri: RequestInfo | URL, options: any): Promise<Response> => {
          if (uri.toString().includes('mock-request')) {
            return Promise.reject({
              status: 500,
            });
          }
          if (uri.toString().includes('mock-real-request/payg')) {
            if (times === 0) {
              times = 1;
              return Promise.reject({
                status: 500,
              });
            }
            const authorization = JSON.parse(options.headers.authorization);
            expect(authorization).toHaveProperty('channelId');
            expect(authorization).toHaveProperty('consumer');
            expect(authorization).toHaveProperty('consumerSign');
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
                  state: {
                    channelId: '0x91ABB40D77FE1F340A98A57A0C5BC24B3A9B91007E345EA4795901D9698ADF4',
                    consumer: '0x0000000',
                    consumerSign:
                      'e239518860984116c1bee0264c3ad1df02c574db56be715e9a74b665a160fc56782db19f7a40c354b661ad8279e1a1ca99dfed25264e9d8bfc89427a70d5c0451c',
                    indexer: '0x11111111',
                    indexerSign:
                      '4db7ad2c0c4426cec02c05586b2363c23358394ea540d516dc6f7efdffd3a6967205c115fea4e3054f74aaf0f27c4b90416bee71f9775915d315644720a61d2a1b',
                    isFinal: false,
                    remote: '10000000000000000',
                    spent: '10000000000000000',
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
                    state: {
                      channelId:
                        '0x91ABB40D77FE1F340A98A57A0C5BC24B3A9B91007E345EA4795901D9698ADF4',
                      consumer: '0x0000000',
                      consumerSign:
                        'e239518860984116c1bee0264c3ad1df02c574db56be715e9a74b665a160fc56782db19f7a40c354b661ad8279e1a1ca99dfed25264e9d8bfc89427a70d5c0451c',
                      indexer: '0x11111111',
                      indexerSign:
                        '4db7ad2c0c4426cec02c05586b2363c23358394ea540d516dc6f7efdffd3a6967205c115fea4e3054f74aaf0f27c4b90416bee71f9775915d315644720a61d2a1b',
                      isFinal: false,
                      remote: '10000000000000000',
                      spent: '10000000000000000',
                    },
                  })
                ),
            });
          }

          return fetch(uri, options);
        },
      },
      fallbackServiceUrl:
        'https://mock-real-request/payg/QmUVXKjcsYkS6WfJQfeD7juDbnMWCuo5qKgRRo893LajE2',
    });
    client = createApolloClient(link);

    const result = await client.query({ query: metadataQuery });

    expect(result.data._metadata).toBeTruthy();
    expect(signBeforeQueryPayg).toBeCalled();
    expect(stateAfterQueryPayg).toBeCalled();
  }, 5000);

  it('mock: can query data with fallback when all orders failed', async () => {
    const deploymentId = 'QmV6sbiPyTDUjcQNJs2eGcAQp2SMXL2BU6qdv5aKrRr7Hg';
    const { deploymentHttpLink } = await getLinks();
    const signBeforeQueryPayg = jest.fn();
    const stateAfterQueryPayg = jest.fn();
    mockAxios.get.mockImplementation((url) => {
      if (url.includes(`/orders/${ProjectType.deployment}`)) {
        return Promise.resolve({
          data: {
            agreements: [],
            plans: [
              {
                id: '0x091abb40d77fe1f340a98a57a0c5bc24b3a9b91007e345ea4795901d9698adf4',
                url: 'https://mock-request/payg/QmUVXKjcsYkS6WfJQfeD7juDbnMWCuo5qKgRRo893LajE2',
                indexer: '0x000000000000000c',
                metadata: {
                  chain: '137',
                  genesisHash: '0xa9c28ce2141b56c474f1dc504bee9b01eb1bd7d1a507580d5519d4437a97de1b',
                  indexerHealthy: true,
                  indexerNodeVersion: '2.10.0',
                  lastProcessedHeight: 46285057,
                  lastProcessedTimestamp: '1691992757459',
                  queryNodeVersion: '2.4.0',
                  specName: 'ethereum',
                  startHeight: 41192135,
                  targetHeight: 46285057,
                },
                score: 100,
              },
            ],
          },
        });
      }

      return Promise.resolve();
    });

    mockAxios.post.mockImplementation((url, data) => {
      if (url.includes('/channel/sign')) {
        expect(data).toHaveProperty('deployment');
        expect(data).toHaveProperty('channelId');
        signBeforeQueryPayg();

        return Promise.resolve({
          data: {
            channelId: '0x91ABB40D77FE1F340A98A57A0C5BC24B3A9B91007E345EA4795901D9698ADF4',
            consumer: '0x0000000000000000',
            consumerSign: indexerSign,
            indexer: '0x000000000000000c',
            indexerSign,
            isFinal: false,
            remote: '10000000000000000',
            spent: '10000000000000000',
          },
        });
      }

      if (url.includes('/channel/state')) {
        expect(data).toBeInstanceOf(Object);
        expect(data).toHaveProperty('channelId');
        expect(data).toHaveProperty('consumer');
        expect(data).toHaveProperty('consumerSign');
        expect(data).toHaveProperty('indexer');
        expect(data).toHaveProperty('indexerSign');
        expect((data as { indexerSign: string }).indexerSign).not.toEqual(indexerSign);

        stateAfterQueryPayg();
      }

      return Promise.resolve();
    });

    const { link } = deploymentHttpLink({
      ...options,
      deploymentId,
      httpOptions: {
        ...httpOptions,
        fetch: (uri: RequestInfo | URL, options: any): Promise<Response> => {
          if (uri.toString().includes('https://mock-request/payg')) {
            return Promise.reject({
              status: 500,
            });
          }
          if (uri.toString().includes('mock-fallback-request')) {
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
                  state: {
                    channelId: '0x91ABB40D77FE1F340A98A57A0C5BC24B3A9B91007E345EA4795901D9698ADF4',
                    consumer: '0x0000000',
                    consumerSign:
                      'e239518860984116c1bee0264c3ad1df02c574db56be715e9a74b665a160fc56782db19f7a40c354b661ad8279e1a1ca99dfed25264e9d8bfc89427a70d5c0451c',
                    indexer: '0x11111111',
                    indexerSign:
                      '4db7ad2c0c4426cec02c05586b2363c23358394ea540d516dc6f7efdffd3a6967205c115fea4e3054f74aaf0f27c4b90416bee71f9775915d315644720a61d2a1b',
                    isFinal: false,
                    remote: '10000000000000000',
                    spent: '10000000000000000',
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
                    state: {
                      channelId:
                        '0x91ABB40D77FE1F340A98A57A0C5BC24B3A9B91007E345EA4795901D9698ADF4',
                      consumer: '0x0000000',
                      consumerSign:
                        'e239518860984116c1bee0264c3ad1df02c574db56be715e9a74b665a160fc56782db19f7a40c354b661ad8279e1a1ca99dfed25264e9d8bfc89427a70d5c0451c',
                      indexer: '0x11111111',
                      indexerSign:
                        '4db7ad2c0c4426cec02c05586b2363c23358394ea540d516dc6f7efdffd3a6967205c115fea4e3054f74aaf0f27c4b90416bee71f9775915d315644720a61d2a1b',
                      isFinal: false,
                      remote: '10000000000000000',
                      spent: '10000000000000000',
                    },
                  })
                ),
            });
          }

          return fetch(uri, options);
        },
      },
      fallbackServiceUrl:
        'https://mock-fallback-request/payg/QmUVXKjcsYkS6WfJQfeD7juDbnMWCuo5qKgRRo893LajE2',
    });
    client = createApolloClient(link);

    const result = await client.query({ query: metadataQuery });

    expect(result.data._metadata).toBeTruthy();
  });

  it('mock: can query data with fallback when no orders', async () => {
    const deploymentId = 'QmV6sbiPyTDUjcQNJs2eGcAQp2SMXL2BU6qdv5aKrRr7Hg';
    const { deploymentHttpLink } = await getLinks();
    const { link } = deploymentHttpLink({
      ...options,
      deploymentId,
      httpOptions: {
        ...httpOptions,
        fetch: (uri: RequestInfo | URL, options: any): Promise<Response> => {
          if (uri.toString().includes('mock-fallback-request')) {
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
      },
      fallbackServiceUrl:
        'https://mock-fallback-request/payg/QmUVXKjcsYkS6WfJQfeD7juDbnMWCuo5qKgRRo893LajE2',
    });
    client = createApolloClient(link);

    const result = await client.query({ query: metadataQuery });

    expect(result.data._metadata).toBeTruthy();
  }, 5000);

  it('mock: can query data with fallback if auth center return an error response', async () => {
    const deploymentId = 'QmV6sbiPyTDUjcQNJs2eGcAQp2SMXL2BU6qdv5aKrRr7Hg';
    const { deploymentHttpLink } = await getLinks();

    mockAxios.get.mockImplementation((url) => {
      if (url.includes(`/orders/${ProjectType.deployment}`)) {
        return Promise.resolve({
          data: '',
        });
      }

      return Promise.resolve();
    });

    const { link } = deploymentHttpLink({
      ...options,
      deploymentId,
      httpOptions: {
        ...httpOptions,
        fetch: (uri: RequestInfo | URL, options: any): Promise<Response> => {
          if (uri.toString().includes('mock-fallback-request')) {
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
      },
      fallbackServiceUrl:
        'https://mock-fallback-request/payg/QmUVXKjcsYkS6WfJQfeD7juDbnMWCuo5qKgRRo893LajE2',
    });
    client = createApolloClient(link);

    const result = await client.query({ query: metadataQuery });

    expect(result.data._metadata).toBeTruthy();
  }, 5000);

  it('mock: should not retries when fallback is wrong', async () => {
    const deploymentId = 'QmV6sbiPyTDUjcQNJs2eGcAQp2SMXL2BU6qdv5aKrRr7Hg';
    const { deploymentHttpLink } = await getLinks();
    const { link } = deploymentHttpLink({
      ...options,
      deploymentId,
      httpOptions: {
        ...httpOptions,
        fetch: (uri: RequestInfo | URL, options: any): Promise<Response> => {
          if (uri.toString().includes('mock-fallback-request')) {
            // @ts-ignore
            return Promise.reject({
              status: 500,
            });
          }

          return fetch(uri, options);
        },
      },
      authUrl: '',
      fallbackServiceUrl:
        'https://mock-fallback-request/payg/QmUVXKjcsYkS6WfJQfeD7juDbnMWCuo5qKgRRo893LajE2',
    });
    client = createApolloClient(link);

    try {
      await client.query({ query: metadataQuery });
    } catch (e) {
      expect(mockLogger.debug).toHaveBeenCalledWith(
        'use fallback url: https://mock-fallback-request/payg/QmUVXKjcsYkS6WfJQfeD7juDbnMWCuo5qKgRRo893LajE2'
      );
      expect(mockLogger.debug).not.toHaveBeenCalledWith(expect.stringMatching(/retry:/));
    }
  }, 5000);

  it('mock: log the error msg for Graphql Error', async () => {
    const deploymentId = 'QmV6sbiPyTDUjcQNJs2eGcAQp2SMXL2BU6qdv5aKrRr7Hg';
    const { deploymentHttpLink } = await getLinks();

    mockAxios.get.mockImplementation((url) => {
      if (url.includes(`/orders/${ProjectType.deployment}`)) {
        return Promise.resolve({
          data: '',
        });
      }

      return Promise.resolve();
    });

    const debugFc = jest.fn();

    const { link } = deploymentHttpLink({
      ...options,
      deploymentId,
      logger: {
        debug: debugFc,
        info: jest.fn(),
        warn: jest.fn(),
        error: jest.fn(),
      },
      httpOptions: {
        ...httpOptions,
        fetch: (uri: RequestInfo | URL, options: any): Promise<Response> => {
          if (uri.toString().includes('mock-fallback-request')) {
            // @ts-ignore
            return Promise.resolve({
              status: 400,
              json: () =>
                Promise.resolve({
                  errors: [
                    {
                      message:
                        'Cannot query field "amountss" on type "EraReward". Did you mean "amount"?',
                      extensions: {
                        code: 'GRAPHQL_VALIDATION_FAILED',
                        exception: {
                          stacktrace: [
                            'GraphQLError: Cannot query field "amountss" on type "EraReward". Did you mean "amount"?',
                            '    at Object.Field (/usr/local/lib/node_modules/@subql/query/node_modules/graphql/validation/rules/FieldsOnCorrectTypeRule.js:48:31)',
                            '    at Object.enter (/usr/local/lib/node_modules/@subql/query/node_modules/graphql/language/visitor.js:323:29)',
                            '    at Object.enter (/usr/local/lib/node_modules/@subql/query/node_modules/graphql/utilities/TypeInfo.js:370:25)',
                            '    at visit (/usr/local/lib/node_modules/@subql/query/node_modules/graphql/language/visitor.js:243:26)',
                            '    at validate (/usr/local/lib/node_modules/@subql/query/node_modules/graphql/validation/validate.js:69:24)',
                            '    at validate (/usr/local/lib/node_modules/@subql/query/node_modules/apollo-server-core/dist/requestPipeline.js:186:39)',
                            '    at processGraphQLRequest (/usr/local/lib/node_modules/@subql/query/node_modules/apollo-server-core/dist/requestPipeline.js:98:34)',
                            '    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)',
                            '    at async processHTTPRequest (/usr/local/lib/node_modules/@subql/query/node_modules/apollo-server-core/dist/runHttpQuery.js:221:30)',
                          ],
                        },
                      },
                    },
                  ],
                }),
              text: () =>
                Promise.resolve(
                  JSON.stringify({
                    errors: [
                      {
                        message:
                          'Cannot query field "amountss" on type "EraReward". Did you mean "amount"?',
                        extensions: {
                          code: 'GRAPHQL_VALIDATION_FAILED',
                          exception: {
                            stacktrace: [
                              'GraphQLError: Cannot query field "amountss" on type "EraReward". Did you mean "amount"?',
                              '    at Object.Field (/usr/local/lib/node_modules/@subql/query/node_modules/graphql/validation/rules/FieldsOnCorrectTypeRule.js:48:31)',
                              '    at Object.enter (/usr/local/lib/node_modules/@subql/query/node_modules/graphql/language/visitor.js:323:29)',
                              '    at Object.enter (/usr/local/lib/node_modules/@subql/query/node_modules/graphql/utilities/TypeInfo.js:370:25)',
                              '    at visit (/usr/local/lib/node_modules/@subql/query/node_modules/graphql/language/visitor.js:243:26)',
                              '    at validate (/usr/local/lib/node_modules/@subql/query/node_modules/graphql/validation/validate.js:69:24)',
                              '    at validate (/usr/local/lib/node_modules/@subql/query/node_modules/apollo-server-core/dist/requestPipeline.js:186:39)',
                              '    at processGraphQLRequest (/usr/local/lib/node_modules/@subql/query/node_modules/apollo-server-core/dist/requestPipeline.js:98:34)',
                              '    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)',
                              '    at async processHTTPRequest (/usr/local/lib/node_modules/@subql/query/node_modules/apollo-server-core/dist/runHttpQuery.js:221:30)',
                            ],
                          },
                        },
                      },
                    ],
                  })
                ),
            });
          }

          return fetch(uri, options);
        },
      },
      fallbackServiceUrl:
        'https://mock-fallback-request/payg/QmUVXKjcsYkS6WfJQfeD7juDbnMWCuo5qKgRRo893LajE2',
    });
    client = createApolloClient(link);

    try {
      await client.query({ query: metadataQuery });
    } catch (e) {
      expect(debugFc).toBeCalled();
    }
    // expect(result.data._metadata).toBeTruthy();
  }, 5000);

  it('mock: log the error msg for query Network Error', async () => {
    const deploymentId = 'QmV6sbiPyTDUjcQNJs2eGcAQp2SMXL2BU6qdv5aKrRr7Hg';
    const { deploymentHttpLink } = await getLinks();

    mockAxios.get.mockImplementation((url) => {
      if (url.includes(`/orders/${ProjectType.deployment}`)) {
        return Promise.resolve({
          data: '',
        });
      }

      return Promise.resolve();
    });

    const debugFc = jest.fn();

    const { link } = deploymentHttpLink({
      ...options,
      deploymentId,
      logger: {
        debug: debugFc,
        info: jest.fn(),
        warn: jest.fn(),
        error: jest.fn(),
      },
      httpOptions: {
        ...httpOptions,
        fetch: (uri: RequestInfo | URL, options: any): Promise<Response> => {
          if (uri.toString().includes('mock-fallback-request')) {
            // @ts-ignore
            return Promise.reject({
              status: 500,
            });
          }

          return fetch(uri, options);
        },
      },
      fallbackServiceUrl: '',
    });
    client = createApolloClient(link);

    try {
      await client.query({ query: metadataQuery });
    } catch (e) {
      expect(debugFc).toBeCalled();
    }
    // expect(result.data._metadata).toBeTruthy();
  }, 5000);
});

/// real data test
const authUrl = process.env.AUTH_URL ?? 'https://kepler-auth.subquery.network';
const httpOptions = { fetch, fetchOptions: { timeout: 5000 } };

const createDictionaryClient = async (chainId: string, fallbackServiceUrl: string) => {
  const options = {
    authUrl,
    chainId,
    httpOptions,
    logger: mockLogger,
    cacheEnabled: true,
    fallbackServiceUrl,
  };
  const { dictHttpLink } = await getLinks();
  const { link } = dictHttpLink(options);
  return createApolloClient(link);
};

const createDeploymentClient = async (deploymentId: string, fallbackServiceUrl?: string) => {
  const options = {
    authUrl,
    deploymentId,
    httpOptions,
    logger: mockLogger,
    cacheEnabled: true,
    fallbackServiceUrl,
  };
  const { deploymentHttpLink } = await getLinks();
  const { link } = deploymentHttpLink(options);
  return createApolloClient(link);
};

describe('Auth http link with real data', () => {
  const defaultFallbackUrl = 'https://api.subquery.network/sq/subquery/karura-dictionary';
  const chainId = '0x91b171bb158e2d3848fa23a9f1c25182fb8e20313b2c1eb49219da7a70ce90c3';
  // TODO: need to update this one to network deploymentId
  const deploymentId = 'QmV6sbiPyTDUjcQNJs2eGcAQp2SMXL2BU6qdv5aKrRr7Hg';
  const unavailableChainId = '0x91b171bb158e2d3848fa23a9f1c25182fb8e20313b2c1eb49219da7a70ce90c4';

  beforeEach(async () => {
    const actualAxios = jest.requireActual('axios');
    mockAxios.get.mockImplementation(actualAxios.get);
    mockAxios.post.mockImplementation(actualAxios.post);
  });

  it('can query data with dictionary auth link without fallback service url', async () => {
    const client = await createDictionaryClient(chainId, '');
    for (let i = 0; i < 20; i++) {
      const result = await client.query({ query: metadataQuery });
      expect(result.data._metadata).toBeTruthy();
    }
  });

  it('can query data with dictionary auth link without orders', async () => {
    const client = await createDictionaryClient(unavailableChainId, defaultFallbackUrl);
    for (let i = 0; i < 10; i++) {
      const result = await client.query({ query: metadataQuery });
      expect(result.data._metadata).toBeTruthy();
    }
  });

  it('can query data with deployment auth link for payg', async () => {
    const client = await createDeploymentClient(deploymentId);
    for (let i = 0; i < 10; i++) {
      const result = await client.query({ query: metadataQuery });
      expect(result.data._metadata).toBeTruthy();
    }
  });
});
