// Copyright 2020-2022 SubQuery Pte Ltd authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { SdkOptions } from "@subql/contract-sdk/types";
import deploymentDetails from '@subql/contract-sdk/publish/moonbase.json';

export enum SQNetworks {
    TESTNET = 'testnet',
    KEPLER = 'kepler',
    MAINNET = 'mainnet',
}

export enum GqlEndpoint {
    Explorer = 'explorer'
}

export interface NetworkConfig {
    gql: Record<GqlEndpoint, string>;
    defaultEndpoint: string;
    sdkOptions: SdkOptions;
}

export const NETWORK_CONFIGS: Record<SQNetworks, NetworkConfig | undefined> = {
    [SQNetworks.KEPLER]: undefined, [SQNetworks.MAINNET]: undefined,
    [SQNetworks.TESTNET]: {
        gql: {
            [GqlEndpoint.Explorer]: 'https://api.subquery.network/sq/subquery/subquery-network-subql-project',
        },
        defaultEndpoint: "https://acala-mandala-adapter.api.onfinality.io/public",
        sdkOptions: {deploymentDetails},
    }
}

export const DEFAULT_IPFS_URL = 'https://interipfs.thechaindata.com/ipfs/api/v0';
