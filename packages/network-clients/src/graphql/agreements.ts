// Copyright 2020-2022 SubQuery Pte Ltd authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { gql } from '@apollo/client';

export const SERVICE_AGREEMENT_FIELDS = gql`
  fragment ServiceAgreementFields on ServiceAgreement {
    id
    deploymentId
    indexerAddress
    consumerAddress
    period
    # lockedAmount
    startTime
    endTime
    deployment {
      id
      version
      project {
        id
        metadata
      }
    }
  }
`;
export const GET_SERVICE_AGREEMENTS = gql`
  ${SERVICE_AGREEMENT_FIELDS}
  query GetOngoingServiceAgreements($address: String!, $now: Datetime!) {
    serviceAgreements(
      filter: {
        or: [{ indexerAddress: { equalTo: $address } }, { consumerAddress: { equalTo: $address } }]
        endTime: { greaterThanOrEqualTo: $now }
      }
      orderBy: END_TIME_ASC
    ) {
      nodes {
        ...ServiceAgreementFields
      }
    }
  }
`;

export const GET_EXPIRED_SERVICE_AGREEMENTS = gql`
  ${SERVICE_AGREEMENT_FIELDS}
  query GetExpiredServiceAgreements($address: String!, $now: Datetime!) {
    serviceAgreements(
      filter: {
        or: [{ indexerAddress: { equalTo: $address } }, { consumerAddress: { equalTo: $address } }]
        endTime: { lessThan: $now }
      }
      orderBy: END_TIME_ASC
    ) {
      nodes {
        ...ServiceAgreementFields
      }
    }
  }
`;

export const GET_SPECIFIC_SERVICE_AGREEMENTS = gql`
  ${SERVICE_AGREEMENT_FIELDS}
  query GetSpecificServiceAgreements($deploymentId: String!, $now: Datetime!) {
    serviceAgreements(
      filter: { deploymentId: { equalTo: $deploymentId }, endTime: { lessThan: $now } }
      orderBy: END_TIME_ASC
    ) {
      nodes {
        ...ServiceAgreementFields
      }
    }
  }
`;
