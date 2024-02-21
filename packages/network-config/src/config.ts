// Copyright 2020-2022 SubQuery Pte Ltd authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { GQLEndpoint, IPFS_URLS, RPC_ENDPOINTS, SQNetworks, gqlEndpoints } from './constants';

import { SdkOptions } from '@subql/contract-sdk/types';

import mainnetDeploymentDetails from '@subql/contract-sdk/publish/mainnet.json';
import testnetDeploymentDetails from '@subql/contract-sdk/publish/testnet.json';

export interface NetworkConfig {
  gql: Record<GQLEndpoint, string | undefined>;
  defaultEndpoint: string | undefined;
  sdkOptions: SdkOptions;
}

export const NETWORK_CONFIGS: Record<SQNetworks, NetworkConfig> = {
  [SQNetworks.MAINNET]: {
    defaultEndpoint: RPC_ENDPOINTS.mainnet,
    sdkOptions: { network: 'mainnet', deploymentDetails: mainnetDeploymentDetails.child },
    gql: gqlEndpoints(SQNetworks.MAINNET),
  },
  [SQNetworks.TESTNET]: {
    defaultEndpoint: RPC_ENDPOINTS.testnet,
    sdkOptions: { network: 'testnet', deploymentDetails: testnetDeploymentDetails.child },
    gql: gqlEndpoints(SQNetworks.TESTNET),
  },
  [SQNetworks.LOCAL]: {
    defaultEndpoint: RPC_ENDPOINTS.testnet,
    sdkOptions: { network: 'testnet', deploymentDetails: testnetDeploymentDetails.child },
    gql: gqlEndpoints(SQNetworks.TESTNET),
  },
};

export const DEFAULT_IPFS_URL = IPFS_URLS.metadata;
