// Copyright 2020-2022 SubQuery Pte Ltd authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { gql } from '@apollo/client';

export const PLAN_TEMPLATE_FIELDS = gql`
  fragment PlanTemplateFields on PlanTemplate {
    id
    period
    dailyReqCap
    rateLimit
    metadata
    active
  }
`;

export const PLAN_FIELDS = gql`
  fragment PlanFields on Plan {
    id
    active
    creator
    deploymentId
    price
  }
`;

export const GET_DEPLOYMENT_PLANS = gql`
  ${PLAN_TEMPLATE_FIELDS}
  ${PLAN_FIELDS}
  query GetDeploymentPlans($address: String!, $deploymentId: String!) {
    plans(
      filter: {
        creator: { equalTo: $address }
        and: [
          { active: { equalTo: true } }
          { or: [{ deploymentId: { isNull: true } }, { deploymentId: { equalTo: $deploymentId } }] }
        ]
      }
    ) {
      nodes {
        ...PlanFields
        planTemplate {
          ...PlanTemplateFields
        }
      }
    }
  }
`;

export const GET_PLAN_TEMPLATES = gql`
  ${PLAN_TEMPLATE_FIELDS}
  query GetPlanTemplates($offset: Int) {
    planTemplates(first: 10, offset: $offset, filter: { active: { equalTo: true } }) {
      nodes {
        ...PlanTemplateFields
      }
    }
  }
`;

export const GET_PLANS = gql`
  ${PLAN_TEMPLATE_FIELDS}
  ${PLAN_FIELDS}
  query GetPlans($address: String!) {
    plans(
      filter: {
        creator: { equalTo: $address }
        and: { deploymentId: { isNull: true } }
        active: { equalTo: true }
      }
    ) {
      nodes {
        ...PlanFields
        planTemplate {
          ...PlanTemplateFields
        }
      }
    }
  }
`;

export const GET_SPECIFIC_PLANS = gql`
  ${PLAN_TEMPLATE_FIELDS}
  ${PLAN_FIELDS}
  query GetSpecificPlans($address: String) {
    deploymentIndexers(filter: { indexerId: { equalTo: $address } }) {
      nodes {
        deployment {
          id
          project {
            id
            metadata
          }
          plans(filter: { creator: { equalTo: $address }, and: { active: { equalTo: true } } }) {
            nodes {
              ...PlanFields
              planTemplate {
                ...PlanTemplateFields
              }
            }
          }
        }
      }
    }
  }
`;
