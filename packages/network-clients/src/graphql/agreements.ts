// Copyright 2020-2022 SubQuery Pte Ltd authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { gql } from '@apollo/client/core';

export const SERVICE_AGREEMENT_FIELDS = gql`
  fragment ServiceAgreementFields on ServiceAgreement {
    id
    deploymentId
    indexerAddress
    consumerAddress
    period
    value
    startTime
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
  query GetServiceAgreements($address: String!) {
    serviceAgreements(
      filter: {
        indexerAddress: { equalTo: $address }
        or: { consumerAddress: { equalTo: $address } }
      }
    ) {
      nodes {
        ...ServiceAgreementFields
      }
    }
  }
`;
