// Copyright 2020-2022 SubQuery Pte Ltd authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { NetworkClient, SQNetworks } from '../packages/network-clients/src';

// TODO: reset
// const TEST_INDEXER = '0xCef192586b70e3Fc2FAD76Dd1D77983a30d38D04';
const TEST_INDEXER = '0x33b8D680e49145Bac668991f9A8e0f7681f72858';

describe.only('network client', () => {
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
