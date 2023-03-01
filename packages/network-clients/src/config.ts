// Copyright 2020-2022 SubQuery Pte Ltd authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { IPFS_URL, KEPLER_RPC, KEPLER_SUBQL, MAINNET_RPC, MAINNET_SUBQL, TESTNET_RPC, TESTNET_SUBQL } from './constants';

import { SdkOptions } from '@subql/contract-sdk/types';

import mainnetDeploymentDetails from '@subql/contract-sdk/publish/mainnet.json';
import keplerDeploymentDetails from '@subql/contract-sdk/publish/kepler.json';
import testnetDeploymentDetails from '@subql/contract-sdk/publish/testnet.json';

export enum SQNetworks {
  TESTNET = 'testnet',
  KEPLER = 'kepler',
  MAINNET = 'mainnet',
}

export enum GqlEndpoint {
  Explorer = 'explorer',
}

export interface NetworkConfig {
  gql: Record<GqlEndpoint, string | undefined>;
  defaultEndpoint: string | undefined;
  sdkOptions: SdkOptions;
}

export const NETWORK_CONFIGS: Record<SQNetworks, NetworkConfig> = {
  [SQNetworks.MAINNET]: {
    defaultEndpoint: MAINNET_RPC,
    sdkOptions: { deploymentDetails: mainnetDeploymentDetails },
    gql: {
      [GqlEndpoint.Explorer]: MAINNET_SUBQL,
    },
  },
  [SQNetworks.KEPLER]: {
    defaultEndpoint: KEPLER_RPC,
    sdkOptions: { deploymentDetails: keplerDeploymentDetails },
    gql: {
      [GqlEndpoint.Explorer]: KEPLER_SUBQL,
    },
  },
  [SQNetworks.TESTNET]: {
    defaultEndpoint: TESTNET_RPC,
    sdkOptions: { deploymentDetails: testnetDeploymentDetails },
    gql: {
      [GqlEndpoint.Explorer]: TESTNET_SUBQL
    },
  },
};

export const DEFAULT_IPFS_URL = IPFS_URL;
