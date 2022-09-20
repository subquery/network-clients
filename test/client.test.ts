// Copyright 2020-2022 SubQuery Pte Ltd authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { NetworkClient } from '../packages/network-clients/src';
import { SQNetworks } from "../packages/network-clients/src/config";
import { utils, BigNumber } from 'ethers';

const TEST_INDEXER = '0xCef192586b70e3Fc2FAD76Dd1D77983a30d38D04';

describe('network client', () => {
    let client: NetworkClient;
    beforeAll(async () => {
        client = await NetworkClient.create(SQNetworks.KEPLER);
    }, 160000);

    it('can get indexer detail', async () => {
        const indexer = await client.getIndexer(TEST_INDEXER);
        expect(indexer.metadata?.name).toBeTruthy();
    }, 50000)

    it('can get maxUnstakeAmount value',  async() => {
        const amount = await client.maxUnstakeAmount(TEST_INDEXER);
        const maxUnstakeAmount = utils.formatEther(BigNumber.from(amount ?? 0).toString())
        expect(maxUnstakeAmount).toBeTruthy();
    });
});

