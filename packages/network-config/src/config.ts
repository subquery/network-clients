// Copyright 2020-2022 SubQuery Pte Ltd authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { GQLEndpoint, IPFS_URLS, RPC_ENDPOINTS, SQNetworks, gqlEndpoints } from './constants';

import { SdkOptions } from '@subql/contract-sdk/types';

import mainnetDeploymentDetails from '@subql/contract-sdk/publish/mainnet.json';
import keplerDeploymentDetails from '@subql/contract-sdk/publish/kepler.json';
import testnetDeploymentDetails from '@subql/contract-sdk/publish/testnet.json';

export interface NetworkConfig {
  gql: Record<GQLEndpoint, string | undefined>;
  defaultEndpoint: string | undefined;
  sdkOptions: SdkOptions;
}

export const NETWORK_CONFIGS: Record<SQNetworks, NetworkConfig> = {
  [SQNetworks.MAINNET]: {
    defaultEndpoint: RPC_ENDPOINTS.mainnet,
    // TODO: FIXME
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    sdkOptions: { network: 'mainnet', deploymentDetails: mainnetDeploymentDetails },
    gql: gqlEndpoints(SQNetworks.MAINNET),
  },
  [SQNetworks.KEPLER]: {
    defaultEndpoint: RPC_ENDPOINTS.kepler,
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    sdkOptions: { network: 'kepler', deploymentDetails: keplerDeploymentDetails },
    gql: gqlEndpoints(SQNetworks.KEPLER),
  },
  [SQNetworks.TESTNET]: {
    defaultEndpoint: RPC_ENDPOINTS.testnet,
    sdkOptions: { network: 'testnet', deploymentDetails: testnetDeploymentDetails },
    gql: gqlEndpoints(SQNetworks.TESTNET),
  },
};

export const DEFAULT_IPFS_URL = IPFS_URLS.metadata;
