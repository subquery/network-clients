// Copyright 2020-2022 SubQuery Pte Ltd authors & contributors
// SPDX-License-Identifier: Apache-2.0

export enum SQNetworks {
  TESTNET = 'testnet',
  MAINNET = 'mainnet',
  LOCAL = 'local',
}

export enum GQLEndpoint {
  Network = 'network',
  Leaderboard = 'leaderboard',
}

export const IPFS_URLS = {
  project: 'https://ipfs.subquery.network/ipfs/api/v0',
  metadata: 'https://unauthipfs.subquery.network/ipfs/api/v0',
};

export const RPC_ENDPOINTS = {
  [SQNetworks.MAINNET]: 'https://mainnet.base.org/',
  [SQNetworks.TESTNET]: 'https://sepolia.base.org',
  [SQNetworks.LOCAL]: 'https://sepolia.base.org',
};

export const NETWORK_SUBQL_ENDPOINTS = {
  [SQNetworks.MAINNET]: 'https://api.subquery.network/sq/subquery/subquery-mainnet',
  [SQNetworks.LOCAL]: 'https://api.subquery.network/sq/subquery/subquery-mainnet',
  [SQNetworks.TESTNET]: 'https://api.subquery.network/sq/subquery/base-testnet',
};

export const LEADERBOARD_SUBQL_ENDPOINTS = {
  [SQNetworks.MAINNET]: 'https://lb-api.subquery.network/graphql',
  [SQNetworks.LOCAL]: 'https://lb-api.subquery.network/graphql',
  [SQNetworks.TESTNET]: 'https://leaderboard-api.thechaindata.com/graphql',
};

export const STABLE_COIN_ADDRESSES = {
  [SQNetworks.MAINNET]: '0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913',
  [SQNetworks.TESTNET]: '0x2d9dcE396FcD6543Da1Ba7c9029c4B77E7716C74', // it's base sepolia eth
  [SQNetworks.LOCAL]: '0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913',
} as const;

export const STABLE_COIN_SYMBOLS = {
  [SQNetworks.MAINNET]: 'USDC',
  [SQNetworks.TESTNET]: 'USDC',
  [SQNetworks.LOCAL]: 'USDC',
} as const;

export const TOKEN_SYMBOLS = {
  [SQNetworks.MAINNET]: 'SQT',
  [SQNetworks.TESTNET]: 'SQT',
  [SQNetworks.LOCAL]: 'SQT',
} as const;

export const STABLE_COIN_DECIMAL = {
  [SQNetworks.MAINNET]: 6,
  [SQNetworks.TESTNET]: 18,
  [SQNetworks.LOCAL]: 6,
} as const;
export const SQT_DECIMAL = 18;

export function gqlEndpoints(network: SQNetworks) {
  return {
    [GQLEndpoint.Network]: NETWORK_SUBQL_ENDPOINTS[network],
    [GQLEndpoint.Leaderboard]: LEADERBOARD_SUBQL_ENDPOINTS[network],
  };
}

export const NETWORKS_CONFIG_INFO = {
  [SQNetworks.TESTNET]: {
    chainId: '0x14a34',
    chainName: 'Base Sepolia Testnet',
    rpcUrls: ['https://sepolia.base.org'],
    iconUrls: ['https://base.org/document/apple-touch-icon.png'],
    blockExplorerUrls: ['https://sepolia.basescan.org/'],
    nativeCurrency: {
      name: 'Ether',
      symbol: 'ETH',
      decimals: 18,
    },
  },
  [SQNetworks.MAINNET]: {
    chainId: '0x2105',
    chainName: 'Base',
    rpcUrls: ['https://mainnet.base.org'],
    iconUrls: ['https://base.org/document/apple-touch-icon.png'],
    blockExplorerUrls: ['https://basescan.org/'],
    nativeCurrency: {
      name: 'Ether',
      symbol: 'ETH',
      decimals: 18,
    },
  },
  [SQNetworks.LOCAL]: {
    chainId: '0x14a34',
    chainName: 'Base Sepolia Testnet',
    rpcUrls: ['https://sepolia.base.org'],
    iconUrls: ['https://base.org/document/apple-touch-icon.png'],
    blockExplorerUrls: ['https://sepolia.basescan.org/'],
    nativeCurrency: {
      name: 'Ether',
      symbol: 'ETH',
      decimals: 18,
    },
  },
};
