// Copyright 2020-2022 SubQuery Pte Ltd authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { gql } from '@apollo/client/core';

export const GET_DEPLOYMENT = gql`
  query GetDeployment($deploymentId: String!) {
    deployment(id: $deploymentId) {
      id
      version
      project {
        id
        metadata
      }
    }
  }
`;

export const DEPLOYMENT_INDEXER_FIELDS = gql`
  fragment DeploymentIndexerFields on DeploymentIndexer {
    id
    indexerId
    deploymentId
    blockHeight
    timestamp
    status
    indexer {
      metadata
    }
  }
`;

export const GET_DEPLOYMENT_INDEXERS = gql`
  ${DEPLOYMENT_INDEXER_FIELDS}
  query GetDeploymentIndexers($offset: Int, $deploymentId: String!) {
    deploymentIndexers(
      first: 20
      offset: $offset
      filter: { deploymentId: { equalTo: $deploymentId }, status: { notEqualTo: TERMINATED } }
    ) {
      totalCount
      nodes {
        ...DeploymentIndexerFields
      }
    }
  }
`;

export const GET_DEPLOYMENT_INDEXER = gql`
  ${DEPLOYMENT_INDEXER_FIELDS}
  query GetDeploymentIndexer($indexerAddress: String!, $deploymentId: String!) {
    deploymentIndexers(
      filter: { indexerId: { equalTo: $indexerAddress }, deploymentId: { equalTo: $deploymentId } }
    ) {
      nodes {
        ...DeploymentIndexerFields
      }
    }
  }
`;

export const GET_DEPLOYMENT_INDEXERS_WITH_INDEXER = gql`
  ${DEPLOYMENT_INDEXER_FIELDS}
  query GetDeploymentIndexersByIndexer($indexerAddress: String!) {
    deploymentIndexers(filter: { indexerId: { equalTo: $indexerAddress } }) {
      nodes {
        ...DeploymentIndexerFields
        deployment {
          id
          project {
            id
            metadata
          }
        }
      }
    }
  }
`;

export const GET_ACCEPTED_OFFERS = gql`
  query GetAcceptedOffers($address: String!, $offerId: String!) {
    acceptedOffers(filter: { indexerId: { equalTo: $address }, offerId: { equalTo: $offerId } }) {
      nodes {
        id
      }
    }
  }
`;
