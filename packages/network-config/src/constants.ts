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
  [SQNetworks.MAINNET]: 'https://polygon-rpc.com/',
  [SQNetworks.TESTNET]: 'https://rpc.ankr.com/polygon_mumbai',
  [SQNetworks.LOCAL]: 'https://polygon-rpc.com/',
};

export const NETWORK_SUBQL_ENDPOINTS = {
  [SQNetworks.MAINNET]: 'https://api.subquery.network/sq/subquery/kepler-network',
  [SQNetworks.LOCAL]: 'https://api.subquery.network/sq/subquery/kepler-network',
  // TODO: change back to testnet-prod endpoint
  [SQNetworks.TESTNET]: 'https://api.subquery.network/sq/subquery/kepler-testnet',
};

export const LEADERBOARD_SUBQL_ENDPOINTS = {
  [SQNetworks.MAINNET]: 'https://leaderboard-api.subquery.network/graphql',
  [SQNetworks.LOCAL]: 'https://leaderboard-api.subquery.network/graphql',
  [SQNetworks.TESTNET]: 'https://leaderboard-api.thechaindata.com/graphql',
};

export const STABLE_COIN_ADDRESSES = {
  [SQNetworks.MAINNET]: '0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174',
  [SQNetworks.TESTNET]: '0x7E65A71046170A5b1AaB5C5cC64242EDF95CaBEA',
  [SQNetworks.LOCAL]: '0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174',
} as const;

export const STABLE_COIN_SYMBOLS = {
  [SQNetworks.MAINNET]: 'USDC',
  [SQNetworks.TESTNET]: 'USDC',
  [SQNetworks.LOCAL]: 'USDC',
} as const;

export const TOKEN_SYMBOLS = {
  [SQNetworks.MAINNET]: 'SQT',
  [SQNetworks.TESTNET]: 'SQT',
  [SQNetworks.LOCAL]: 'kSQT',
} as const;

export const STABLE_COIN_DECIMAL = 6;
export const SQT_DECIMAL = 18;

export function gqlEndpoints(network: SQNetworks) {
  return {
    [GQLEndpoint.Network]: NETWORK_SUBQL_ENDPOINTS[network],
    [GQLEndpoint.Leaderboard]: LEADERBOARD_SUBQL_ENDPOINTS[network],
  };
}

export const NETWORKS_CONFIG_INFO = {
  [SQNetworks.TESTNET]: {
    chainId: '0x13881',
    chainName: 'Mumbai',
    rpcUrls: ['https://rpc.ankr.com/polygon_mumbai'],
    iconUrls: ['https://icons.llamao.fi/icons/chains/rsz_polygon.jpg'],
    blockExplorerUrls: ['https://mumbai.polygonscan.com/'],
    nativeCurrency: {
      name: 'Matic Token',
      symbol: 'MATIC',
      decimals: 18,
    },
  },
  [SQNetworks.MAINNET]: {
    chainId: '0x89',
    chainName: 'Polygon',
    rpcUrls: ['https://polygon-rpc.com/'],
    iconUrls: ['https://icons.llamao.fi/icons/chains/rsz_polygon.jpg'],
    blockExplorerUrls: ['https://polygonscan.com/'],
    nativeCurrency: {
      name: 'Matic Token',
      symbol: 'MATIC',
      decimals: 18,
    },
  },
  [SQNetworks.LOCAL]: {
    chainId: '0x89',
    chainName: 'Polygon',
    rpcUrls: ['https://polygon-rpc.com'],
    iconUrls: ['https://icons.llamao.fi/icons/chains/rsz_polygon.jpg'],
    blockExplorerUrls: ['https://polygonscan.com/'],
    nativeCurrency: {
      name: 'Matic Token',
      symbol: 'MATIC',
      decimals: 18,
    },
  },
};
