// Copyright 2020-2022 SubQuery Pte Ltd authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { gql } from '@apollo/client';

export const GET_INDEXER_DELEGATORS = gql`
  query GetIndexerDelegators($id: String!, $offset: Int) {
    indexer(id: $id) {
      delegations(offset: $offset, filter: { delegatorId: { notEqualTo: $id } }) {
        nodes {
          delegatorId
          amount
        }
      }
    }
  }
`;

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
    delegations(filter: { delegatorId: { equalTo: $delegator } }, offset: $offset) {
      totalCount
      nodes {
        id
        delegatorId
        indexerId
        amount
        indexer {
          metadata
          active
        }
      }
    }
  }
`;
