// Copyright 2020-2022 SubQuery Pte Ltd authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { SQNetworks } from '@subql/network-config';
import { NetworkClient } from '../packages/network-clients/src';

const TEST_INDEXER = '0xFCA0037391B3cfe28f17453D6DBc4A7618F771e1';

// testnet have change, skip for now
// FIXME
describe.skip('network client', () => {
  let client: NetworkClient;
  beforeAll(() => {
    client = NetworkClient.create(SQNetworks.TESTNET);
  });

  it('can get indexer detail', async () => {
    const indexer = await client.getIndexer(TEST_INDEXER);
    expect(indexer?.metadata).toBeTruthy();
  });

  it('can get delegating value', async () => {
    const delegating = await client.getDelegating(TEST_INDEXER);
    expect(delegating).toBeTruthy();
  });

  it('can get maxUnstakeAmount value', async () => {
    const amount = await client.maxUnstakeAmount(TEST_INDEXER);
    expect(amount).toBeTruthy();
  });
});
