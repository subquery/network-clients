// Copyright 2020-2022 SubQuery Pte Ltd authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { NetworkClient } from '../packages/network-clients/src';
import { SQNetworks } from "../packages/network-clients/src/config";

const TEST_INDEXER = '0x00000045E65842029beF40B5840B4CCED90F6777';

describe('network client', () => {
    let client: NetworkClient;
    beforeAll(async () => {
        client = await NetworkClient.create(SQNetworks.TESTNET);
    }, 160000);

    it('can get indexer detail', async () => {
        const indexer = await client.getIndexer(TEST_INDEXER);
        expect(indexer.metadata?.name).toBeTruthy();
    }, 50000)
});

