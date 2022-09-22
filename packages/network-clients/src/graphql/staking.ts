// Copyright 2020-2022 SubQuery Pte Ltd authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { gql } from '@apollo/client/core';

export const GET_DELEGATION = gql`
  query GetDelegation($id: String!) {
    delegation(id: $id) {
      amount
    }
  }
`;

export const GET_ALL_DELEGATIONS = gql`
  query GetAllDelegations($offset: Int) {
    delegations(offset: $offset) {
      nodes {
        id
        delegatorId
        indexerId
        amount
        indexer {
          metadata
        }
      }
    }
  }
`;

export const GET_DELEGATOR = gql`
  query GetDelegator($address: String!) {
    delegator(id: $address) {
      id
      totalDelegations
    }
  }
`;

export const GET_DELEGATIONS = gql`
  query GetDelegations($delegator: String!, $offset: Int) {
    delegations(filter: { delegatorId: { equalTo: $delegator } }, first: 10, offset: $offset) {
      totalCount
      nodes {
        id
        delegatorId
        indexerId
        amount
        indexer {
          metadata
        }
      }
    }
  }
`;

export const GET_WITHDRAWLS = gql`
  query GetWithdrawls($delegator: String!, $offset: Int) {
    withdrawls(
      filter: { delegator: { equalTo: $delegator }, and: { claimed: { equalTo: false } } }
      first: 10
      offset: $offset
    ) {
      nodes {
        id
        index
        delegator
        indexer
        startTime
        amount
        claimed
      }
    }
  }
`;

export const GET_REWARDS = gql`
  query GetRewards($address: String!) {
    rewards(filter: { delegatorAddress: { equalTo: $address } }) {
      nodes {
        id
        delegatorAddress
        indexerAddress
        amount
        claimedTime
      }
    }
    unclaimedRewards(filter: { delegatorAddress: { equalTo: $address } }) {
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
