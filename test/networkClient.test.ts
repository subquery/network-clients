// Copyright 2020-2022 SubQuery Pte Ltd authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { SQNetworks } from '../packages/network-config/src';
import { NetworkClient } from '../packages/network-clients/src';

const TEST_INDEXER = '0xCef192586b70e3Fc2FAD76Dd1D77983a30d38D04';

describe('network client', () => {
  let client: NetworkClient;
  beforeAll(() => {
    client = NetworkClient.create(SQNetworks.TESTNET);
  });

  it('can get indexer detail', async () => {
    const indexer = await client.getIndexer(TEST_INDEXER);
    expect(indexer?.metadata).toBeTruthy();
  });

  it('can get indexer metadata', async () => {
    const metadata = await client.getIndexerMetadata(TEST_INDEXER);
    expect(metadata?.name).toBeTruthy();
    expect(metadata?.url).toBeTruthy();
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
