import * as Types from './base-types';

export type ProjectFieldsFragment = {
  readonly __typename: 'Project';
  readonly id: string;
  readonly owner: string;
  readonly metadata: string;
  readonly currentVersion: string;
  readonly currentDeployment: string;
  readonly updatedTimestamp: Date;
  readonly createdTimestamp: Date;
};

export type GetProjectQueryVariables = Types.Exact<{
  id: Types.Scalars['String'];
}>;

export type GetProjectQuery = {
  readonly project: {
    readonly __typename: 'Project';
    readonly id: string;
    readonly owner: string;
    readonly metadata: string;
    readonly currentVersion: string;
    readonly currentDeployment: string;
    readonly updatedTimestamp: Date;
    readonly createdTimestamp: Date;
  } | null;
};

export type GetProjectsQueryVariables = Types.Exact<{
  offset: Types.InputMaybe<Types.Scalars['Int']>;
}>;

export type GetProjectsQuery = {
  readonly projects: {
    readonly __typename: 'ProjectsConnection';
    readonly nodes: ReadonlyArray<{
      readonly __typename: 'Project';
      readonly id: string;
      readonly owner: string;
      readonly metadata: string;
      readonly currentVersion: string;
      readonly currentDeployment: string;
      readonly updatedTimestamp: Date;
      readonly createdTimestamp: Date;
    } | null>;
  } | null;
};

export type GetProjectDeploymentsQueryVariables = Types.Exact<{
  projectId: Types.Scalars['String'];
}>;

export type GetProjectDeploymentsQuery = {
  readonly project: {
    readonly __typename: 'Project';
    readonly deployments: {
      readonly __typename: 'DeploymentsConnection';
      readonly nodes: ReadonlyArray<{
        readonly __typename: 'Deployment';
        readonly id: string;
        readonly version: string;
        readonly createdTimestamp: Date;
      } | null>;
    };
  } | null;
};
