// Copyright 2020-2022 SubQuery Pte Ltd authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { NetworkClient } from '../packages/network-clients';
import { SQNetworks } from '../packages/network-clients';

const TEST_INDEXER = '0xCef192586b70e3Fc2FAD76Dd1D77983a30d38D04';

describe('network client', () => {
  let client: NetworkClient;
  beforeAll(async () => {
    client = await NetworkClient.create(SQNetworks.KEPLER);
  });

  it('can get indexer detail', async () => {
    const indexer = await client.getIndexer(TEST_INDEXER);
    expect(indexer.metadata).toBeTruthy();
  });

  it('can get maxUnstakeAmount value', async () => {
    const amount = await client.maxUnstakeAmount(TEST_INDEXER);
    expect(amount).toBeTruthy();
  });
});
