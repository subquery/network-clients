import * as Types from './base-types';

export type PlanTemplateFieldsFragment = {
  readonly __typename: 'PlanTemplate';
  readonly id: string;
  readonly period: bigint | string;
  readonly dailyReqCap: bigint | string;
  readonly rateLimit: bigint | string;
  readonly metadata: string | null;
  readonly active: boolean;
};

export type PlanFieldsFragment = {
  readonly __typename: 'Plan';
  readonly id: string;
  readonly active: boolean;
  readonly creator: string;
  readonly deploymentId: string | null;
  readonly price: bigint | string;
};

export type GetDeploymentPlansQueryVariables = Types.Exact<{
  address: Types.Scalars['String'];
  deploymentId: Types.Scalars['String'];
}>;

export type GetDeploymentPlansQuery = {
  readonly plans: {
    readonly __typename: 'PlansConnection';
    readonly nodes: ReadonlyArray<{
      readonly __typename: 'Plan';
      readonly id: string;
      readonly active: boolean;
      readonly creator: string;
      readonly deploymentId: string | null;
      readonly price: bigint | string;
      readonly planTemplate: {
        readonly __typename: 'PlanTemplate';
        readonly id: string;
        readonly period: bigint | string;
        readonly dailyReqCap: bigint | string;
        readonly rateLimit: bigint | string;
        readonly metadata: string | null;
        readonly active: boolean;
      } | null;
    } | null>;
  } | null;
};

export type GetPlanTemplatesQueryVariables = Types.Exact<{
  offset: Types.InputMaybe<Types.Scalars['Int']>;
}>;

export type GetPlanTemplatesQuery = {
  readonly planTemplates: {
    readonly __typename: 'PlanTemplatesConnection';
    readonly nodes: ReadonlyArray<{
      readonly __typename: 'PlanTemplate';
      readonly id: string;
      readonly period: bigint | string;
      readonly dailyReqCap: bigint | string;
      readonly rateLimit: bigint | string;
      readonly metadata: string | null;
      readonly active: boolean;
    } | null>;
  } | null;
};

export type GetPlansQueryVariables = Types.Exact<{
  address: Types.Scalars['String'];
}>;

export type GetPlansQuery = {
  readonly plans: {
    readonly __typename: 'PlansConnection';
    readonly nodes: ReadonlyArray<{
      readonly __typename: 'Plan';
      readonly id: string;
      readonly active: boolean;
      readonly creator: string;
      readonly deploymentId: string | null;
      readonly price: bigint | string;
      readonly planTemplate: {
        readonly __typename: 'PlanTemplate';
        readonly id: string;
        readonly period: bigint | string;
        readonly dailyReqCap: bigint | string;
        readonly rateLimit: bigint | string;
        readonly metadata: string | null;
        readonly active: boolean;
      } | null;
    } | null>;
  } | null;
};

export type GetSpecificPlansQueryVariables = Types.Exact<{
  address: Types.InputMaybe<Types.Scalars['String']>;
}>;

export type GetSpecificPlansQuery = {
  readonly deploymentIndexers: {
    readonly __typename: 'DeploymentIndexersConnection';
    readonly nodes: ReadonlyArray<{
      readonly __typename: 'DeploymentIndexer';
      readonly deployment: {
        readonly __typename: 'Deployment';
        readonly id: string;
        readonly project: {
          readonly __typename: 'Project';
          readonly id: string;
          readonly metadata: string;
        } | null;
        readonly plans: {
          readonly __typename: 'PlansConnection';
          readonly nodes: ReadonlyArray<{
            readonly __typename: 'Plan';
            readonly id: string;
            readonly active: boolean;
            readonly creator: string;
            readonly deploymentId: string | null;
            readonly price: bigint | string;
            readonly planTemplate: {
              readonly __typename: 'PlanTemplate';
              readonly id: string;
              readonly period: bigint | string;
              readonly dailyReqCap: bigint | string;
              readonly rateLimit: bigint | string;
              readonly metadata: string | null;
              readonly active: boolean;
            } | null;
          } | null>;
        };
      } | null;
    } | null>;
  } | null;
};
