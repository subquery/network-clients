import * as Types from './base-types';

export type GetDeploymentQueryVariables = Types.Exact<{
  deploymentId: Types.Scalars['String'];
}>;

export type GetDeploymentQuery = {
  readonly deployment: {
    readonly __typename: 'Deployment';
    readonly id: string;
    readonly version: string;
    readonly project: {
      readonly __typename: 'Project';
      readonly id: string;
      readonly metadata: string;
    } | null;
  } | null;
};

export type DeploymentIndexerFieldsFragment = {
  readonly __typename: 'DeploymentIndexer';
  readonly id: string;
  readonly indexerId: string;
  readonly deploymentId: string;
  readonly blockHeight: bigint | string;
  readonly timestamp: Date | null;
  readonly status: Types.Status;
  readonly indexer: { readonly __typename: 'Indexer'; readonly metadata: string | null } | null;
};

export type GetDeploymentIndexersQueryVariables = Types.Exact<{
  offset: Types.InputMaybe<Types.Scalars['Int']>;
  deploymentId: Types.Scalars['String'];
}>;

export type GetDeploymentIndexersQuery = {
  readonly deploymentIndexers: {
    readonly __typename: 'DeploymentIndexersConnection';
    readonly totalCount: number;
    readonly nodes: ReadonlyArray<{
      readonly __typename: 'DeploymentIndexer';
      readonly id: string;
      readonly indexerId: string;
      readonly deploymentId: string;
      readonly blockHeight: bigint | string;
      readonly timestamp: Date | null;
      readonly status: Types.Status;
      readonly indexer: { readonly __typename: 'Indexer'; readonly metadata: string | null } | null;
    } | null>;
  } | null;
};

export type GetDeploymentIndexerQueryVariables = Types.Exact<{
  indexerAddress: Types.Scalars['String'];
  deploymentId: Types.Scalars['String'];
}>;

export type GetDeploymentIndexerQuery = {
  readonly deploymentIndexers: {
    readonly __typename: 'DeploymentIndexersConnection';
    readonly nodes: ReadonlyArray<{
      readonly __typename: 'DeploymentIndexer';
      readonly id: string;
      readonly indexerId: string;
      readonly deploymentId: string;
      readonly blockHeight: bigint | string;
      readonly timestamp: Date | null;
      readonly status: Types.Status;
      readonly indexer: { readonly __typename: 'Indexer'; readonly metadata: string | null } | null;
    } | null>;
  } | null;
};

export type GetDeploymentIndexersByIndexerQueryVariables = Types.Exact<{
  indexerAddress: Types.Scalars['String'];
}>;

export type GetDeploymentIndexersByIndexerQuery = {
  readonly deploymentIndexers: {
    readonly __typename: 'DeploymentIndexersConnection';
    readonly nodes: ReadonlyArray<{
      readonly __typename: 'DeploymentIndexer';
      readonly id: string;
      readonly indexerId: string;
      readonly deploymentId: string;
      readonly blockHeight: bigint | string;
      readonly timestamp: Date | null;
      readonly status: Types.Status;
      readonly deployment: {
        readonly __typename: 'Deployment';
        readonly id: string;
        readonly project: {
          readonly __typename: 'Project';
          readonly id: string;
          readonly metadata: string;
        } | null;
      } | null;
      readonly indexer: { readonly __typename: 'Indexer'; readonly metadata: string | null } | null;
    } | null>;
  } | null;
};

export type GetAcceptedOffersQueryVariables = Types.Exact<{
  address: Types.Scalars['String'];
  offerId: Types.Scalars['String'];
}>;

export type GetAcceptedOffersQuery = {
  readonly acceptedOffers: {
    readonly __typename: 'AcceptedOffersConnection';
    readonly nodes: ReadonlyArray<{
      readonly __typename: 'AcceptedOffer';
      readonly id: string;
    } | null>;
  } | null;
};
