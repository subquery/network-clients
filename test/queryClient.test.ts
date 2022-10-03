// Copyright 2020-2022 SubQuery Pte Ltd authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { GraphqlQueryClient } from '../packages/network-clients';
import { NETWORK_CONFIGS } from '../packages/network-clients/src/config';
import assert from 'assert';
import { GET_INDEXER } from '../packages/network-clients/src/graphql/indexers';

describe('query client', () => {
  let client: GraphqlQueryClient;

  beforeAll(async () => {
    const config = NETWORK_CONFIGS.kepler;
    assert(config, 'network config not defined');
    client = new GraphqlQueryClient(config);
  }, 160000);

  it('can query indexer detail', async () => {
    const apolloClient = client.explorerClient;
    const result = await apolloClient.query({
      query: GET_INDEXER,
      variables: { address: '0xCef192586b70e3Fc2FAD76Dd1D77983a30d38D04' },
    });

    assert(result, 'cannot request query GET_INDEXER');
  }, 16000)
});
