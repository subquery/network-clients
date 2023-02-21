// Copyright 2020-2022 SubQuery Pte Ltd authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { SdkOptions } from '@subql/contract-sdk/types';
import deploymentDetails from '@subql/contract-sdk/publish/moonbase.json';

export enum SQNetworks {
  TESTNET = 'testnet',
  KEPLER = 'kepler',
  // MAINNET = 'mainnet',
}

export enum GqlEndpoint {
  Explorer = 'explorer',
}

export interface NetworkConfig {
  gql: Record<GqlEndpoint, string>;
  defaultEndpoint: string;
  sdkOptions: SdkOptions;
}

export const NETWORK_CONFIGS: Record<SQNetworks, NetworkConfig> = {
  [SQNetworks.KEPLER]: {
    gql: {
      [GqlEndpoint.Explorer]:
        process.env.KEPLER_SUBQL ?? 'https://api.subquery.network/sq/subquery/kepler-testnet-subql-project',
    },
    defaultEndpoint: process.env.KEPLER_RPC ?? 'https://moonbeam-alpha.api.onfinality.io/public',
    sdkOptions: { deploymentDetails },
  },
  [SQNetworks.TESTNET]: {
    gql: {
      [GqlEndpoint.Explorer]:
        process.env.DEFAULT_IPFS_URL ?? 'https://api.subquery.network/sq/subquery/subquery-network-subql-project',
    },
    defaultEndpoint: process.env.TESTNET_RPC ?? 'https://moonbeam-alpha.api.onfinality.io/public',
    sdkOptions: { deploymentDetails },
  },
};

export const DEFAULT_IPFS_URL = process.env.DEFAULT_IPFS_URL ?? 'https://interipfs.thechaindata.com/ipfs/api/v0';
