// Copyright 2020-2022 SubQuery Pte Ltd authors & contributors
// SPDX-License-Identifier: Apache-2.0

export enum SQNetworks {
  TESTNET = 'testnet',
  KEPLER = 'kepler',
  MAINNET = 'mainnet',
}

export enum GQLEndpoint {
  Network = 'network',
  Exchange = 'exchange',
  Airdrop = 'airdrop',
  Leaderboard = 'leaderboard',
}

export const IPFS_URLS = {
  project: 'https://ipfs.subquery.network/ipfs/api/v0',
  metadata: 'https://unauthipfs.subquery.network/ipfs/api/v0',
};

export const RPC_ENDPOINTS = {
  mainnet: 'https://polygon-rpc.com/',
  kepler: 'https://polygon-rpc.com/',
  testnet: 'https://polygon-mumbai.infura.io/v3/4458cf4d1689497b9a38b1d6bbf05e78',
};

export const NETWORK_SUBQL_ENDPOINTS = {
  mainnet: 'https://api.subquery.network/sq/subquery/kepler-network',
  kepler: 'https://api.subquery.network/sq/subquery/kepler-network',
  testnet: 'https://api.subquery.network/sq/subquery/kepler-testnet',
};

export const AIRDROP_SUBQL_ENDPOINTS = {
  mainnet: 'https://api.subquery.network/sq/subquery/kepler-network-airdrop',
  kepler: 'https://api.subquery.network/sq/subquery/kepler-network-airdrop',
  testnet: 'https://api.subquery.network/sq/subquery/kepler-testnet-airdrop',
};

export const EXCHANGE_SUBQL_ENDPOINTS = {
  mainnet: 'https://api.subquery.network/sq/subquery/kepler-network-exchange',
  kepler: 'https://api.subquery.network/sq/subquery/kepler-network-exchange',
  testnet: 'https://api.subquery.network/sq/subquery/kepler-testnet-exchange',
};

export const LEADERBOARD_SUBQL_ENDPOINTS = {
  mainnet: 'https://leaderboard-api.subquery.network/graphql',
  kepler: 'https://leaderboard-api.subquery.network/graphql',
  testnet: 'https://leaderboard-api.thechaindata.com/graphql',
};

export function gqlEndpoints(network: SQNetworks) {
  return {
    [GQLEndpoint.Network]: NETWORK_SUBQL_ENDPOINTS[network],
    [GQLEndpoint.Airdrop]: AIRDROP_SUBQL_ENDPOINTS[network],
    [GQLEndpoint.Exchange]: EXCHANGE_SUBQL_ENDPOINTS[network],
    [GQLEndpoint.Leaderboard]: LEADERBOARD_SUBQL_ENDPOINTS[network],
  };
}
