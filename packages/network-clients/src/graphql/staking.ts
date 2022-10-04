// Copyright 2020-2022 SubQuery Pte Ltd authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { gql } from '@apollo/client';

export const GET_WITHDRAWLS = gql`
  query GetWithdrawls($delegator: String!, $offset: Int) {
    withdrawls(filter: { delegator: { equalTo: $delegator }, status: { equalTo: ONGOING } }, offset: $offset) {
      nodes {
        id
        index
        delegator
        indexer
        startTime
        amount
        status
      }
    }
  }
`;

export const GET_REWARDS = gql`
  query GetRewards($address: String!) {
    rewards(orderBy: CLAIMED_TIME_DESC, filter: { delegatorAddress: { equalTo: $address } }) {
      nodes {
        id
        delegatorAddress
        indexerAddress
        amount
        claimedTime
      }
    }
    unclaimedRewards(
      filter: { delegatorAddress: { equalTo: $address }, amount: { greaterThan: "0" } }
    ) {
      totalCount
      nodes {
        id
        delegatorAddress
        indexerAddress
        amount
      }
    }
  }
`;

export const GET_INDEXER_REWARDS = gql`
  query GetIndexerRewards($address: String!, $era1: String!, $era2: String!) {
    indexerRewards(
      filter: {
        indexerId: { equalTo: $address }
        and: { eraIdx: { equalTo: $era1 } }
        or: { eraIdx: { equalTo: $era2 } }
      }
    ) {
      nodes {
        id
        indexerId
        eraIdx
        amount
      }
    }
  }
`;
