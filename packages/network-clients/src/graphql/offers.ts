// Copyright 2020-2022 SubQuery Pte Ltd authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { gql } from '@apollo/client/core';

export const OFFER_FIELDS = gql`
  fragment OfferFields on Offer {
    id
    consumer
    deployment {
      id
      project {
        id
        metadata
      }
    }
    planTemplate {
      id
      period
      dailyReqCap
      rateLimit
    }
    deposit
    minimumAcceptHeight
    expireDate
    limit # indexer cap
    accepted # accepted indexer amount
    reachLimit # whether reach limit
    withdrawn # withdraw by cancel event
  }
`;

export const GET_OWN_OPEN_OFFERS = gql`
  ${OFFER_FIELDS}
  query GetOwnOpenOffers($consumer: String!, $now: Datetime!, $offset: Int) {
    offers(
      filter: {
        consumer: { equalTo: $consumer }
        expireDate: { greaterThan: $now }
        reachLimit: { equalTo: false }
      }
      first: 10
      offset: $offset
    ) {
      totalCount
      nodes {
        ...OfferFields
      }
    }
  }
`;

export const GET_OWN_FINISHED_OFFERS = gql`
  ${OFFER_FIELDS}
  query GetOwnFinishedOffers($consumer: String!, $now: Datetime!, $offset: Int) {
    offers(
      filter: {
        consumer: { equalTo: $consumer }
        expireDate: { greaterThan: $now }
        reachLimit: { equalTo: true }
      }
      first: 10
      offset: $offset
    ) {
      totalCount
      nodes {
        ...OfferFields
      }
    }
  }
`;

export const GET_OWN_EXPIRED_OFFERS = gql`
  ${OFFER_FIELDS}
  query GetOwnExpiredOffers($consumer: String!, $now: Datetime!, $offset: Int) {
    offers(
      filter: {
        consumer: { equalTo: $consumer }
        expireDate: { lessThan: $now }
        reachLimit: { equalTo: false }
      }
      first: 10
      offset: $offset
    ) {
      totalCount
      nodes {
        ...OfferFields
      }
    }
  }
`;

export const GET_ALL_OPEN_OFFERS = gql`
  ${OFFER_FIELDS}
  query GetAllOpenOffers($now: Datetime!, $offset: Int) {
    offers(
      filter: { expireDate: { greaterThan: $now }, reachLimit: { equalTo: false } }
      first: 10
      offset: $offset
    ) {
      totalCount
      nodes {
        ...OfferFields
      }
    }
  }
`;

export const GET_SPECIFIC_OPEN_OFFERS = gql`
  ${OFFER_FIELDS}
  query GetSpecificOpenOffers($deploymentId: String!, $now: Datetime!, $offset: Int) {
    offers(
      filter: {
        expireDate: { greaterThan: $now }
        reachLimit: { equalTo: false }
        deploymentId: { equalTo: $deploymentId }
      }
      first: 10
      offset: $offset
    ) {
      totalCount
      nodes {
        ...OfferFields
      }
    }
  }
`;
