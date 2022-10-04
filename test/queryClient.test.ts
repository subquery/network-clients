// Copyright 2020-2022 SubQuery Pte Ltd authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { GraphqlQueryClient } from '../packages/network-clients';
import { NETWORK_CONFIGS } from '../packages/network-clients';
import assert from 'assert';
import { GET_INDEXER } from '../packages/network-clients';

function deepAssert(obj: any){
  Object.keys(obj).forEach(key => {
    assert(obj[key], `field ${key} is undefined`);
    if (typeof obj[key] === 'object') deepAssert(obj[key]);
  })
}

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
    deepAssert(result.data.indexer);
  }, 16000)
});
