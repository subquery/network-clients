// Copyright 2020-2022 SubQuery Pte Ltd authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { gql } from '@apollo/client';

export const PROJECT_FIELDS = gql`
  fragment ProjectFields on Project {
    id
    owner
    metadata
    currentVersion
    currentDeployment
    updatedTimestamp
    createdTimestamp
  }
`;

export const GET_PROJECT = gql`
  ${PROJECT_FIELDS}
  query GetProject($id: String!) {
    project(id: $id) {
      ...ProjectFields
    }
  }
`;

export const GET_PROJECTS = gql`
  ${PROJECT_FIELDS}
  query GetProjects($offset: Int) {
    projects(first: 10, offset: $offset) {
      nodes {
        ...ProjectFields
      }
    }
  }
`;

export const GET_PROJECT_DEPLOYMENTS = gql`
  query GetProjectDeployments($projectId: String!) {
    project(id: $projectId) {
      deployments {
        nodes {
          id
          version
          createdTimestamp
        }
      }
    }
  }
`;
