// Copyright 2020-2022 SubQuery Pte Ltd authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { gql } from '@apollo/client/core';

export const INDEXER_FIELDS = gql`
  fragment IndexerFields on Indexer {
    id
    metadata
    controller
    commission
    totalStake
  }
`;

export const GET_INDEXER = gql`
  ${INDEXER_FIELDS}
  query GetIndexer($address: String!) {
    indexer(id: $address) {
      ...IndexerFields
    }
  }
`;

export const GET_INDEXERS = gql`
  ${INDEXER_FIELDS}
  query GetIndexers($offset: Int, $order: IndexersOrderBy = ID_ASC) {
    indexers(first: 10, offset: $offset, orderBy: [$order], filter: { active: { equalTo: true } }) {
      totalCount
      nodes {
        ...IndexerFields
      }
    }
  }
`;
