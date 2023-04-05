import * as Types from './base-types';

export type ServiceAgreementFieldsFragment = {
  readonly __typename: 'ServiceAgreement';
  readonly id: string;
  readonly deploymentId: string;
  readonly indexerAddress: string;
  readonly consumerAddress: string;
  readonly period: bigint | string;
  readonly lockedAmount: bigint | string;
  readonly startTime: Date;
  readonly endTime: Date;
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

export type GetOngoingServiceAgreementsQueryVariables = Types.Exact<{
  address: Types.Scalars['String'];
  now: Types.Scalars['Datetime'];
}>;

export type GetOngoingServiceAgreementsQuery = {
  readonly serviceAgreements: {
    readonly __typename: 'ServiceAgreementsConnection';
    readonly nodes: ReadonlyArray<{
      readonly __typename: 'ServiceAgreement';
      readonly id: string;
      readonly deploymentId: string;
      readonly indexerAddress: string;
      readonly consumerAddress: string;
      readonly period: bigint | string;
      readonly lockedAmount: bigint | string;
      readonly startTime: Date;
      readonly endTime: Date;
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
    } | null>;
  } | null;
};

export type GetExpiredServiceAgreementsQueryVariables = Types.Exact<{
  address: Types.Scalars['String'];
  now: Types.Scalars['Datetime'];
}>;

export type GetExpiredServiceAgreementsQuery = {
  readonly serviceAgreements: {
    readonly __typename: 'ServiceAgreementsConnection';
    readonly nodes: ReadonlyArray<{
      readonly __typename: 'ServiceAgreement';
      readonly id: string;
      readonly deploymentId: string;
      readonly indexerAddress: string;
      readonly consumerAddress: string;
      readonly period: bigint | string;
      readonly lockedAmount: bigint | string;
      readonly startTime: Date;
      readonly endTime: Date;
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
    } | null>;
  } | null;
};

export type GetSpecificServiceAgreementsQueryVariables = Types.Exact<{
  deploymentId: Types.Scalars['String'];
  now: Types.Scalars['Datetime'];
}>;

export type GetSpecificServiceAgreementsQuery = {
  readonly serviceAgreements: {
    readonly __typename: 'ServiceAgreementsConnection';
    readonly nodes: ReadonlyArray<{
      readonly __typename: 'ServiceAgreement';
      readonly id: string;
      readonly deploymentId: string;
      readonly indexerAddress: string;
      readonly consumerAddress: string;
      readonly period: bigint | string;
      readonly lockedAmount: bigint | string;
      readonly startTime: Date;
      readonly endTime: Date;
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
    } | null>;
  } | null;
};
