import * as Types from './base-types';

export type OfferFieldsFragment = {
  readonly __typename: 'Offer';
  readonly id: string;
  readonly consumer: string;
  readonly deposit: bigint | string;
  readonly minimumAcceptHeight: bigint | string;
  readonly expireDate: Date;
  readonly limit: number;
  readonly accepted: number;
  readonly reachLimit: boolean;
  readonly withdrawn: boolean;
  readonly deployment: {
    readonly __typename: 'Deployment';
    readonly id: string;
    readonly project: {
      readonly __typename: 'Project';
      readonly id: string;
      readonly metadata: string;
    } | null;
  } | null;
  readonly planTemplate: {
    readonly __typename: 'PlanTemplate';
    readonly id: string;
    readonly period: bigint | string;
    readonly dailyReqCap: bigint | string;
    readonly rateLimit: bigint | string;
  } | null;
};

export type GetOwnOpenOffersQueryVariables = Types.Exact<{
  consumer: Types.Scalars['String'];
  now: Types.Scalars['Datetime'];
  offset: Types.InputMaybe<Types.Scalars['Int']>;
}>;

export type GetOwnOpenOffersQuery = {
  readonly offers: {
    readonly __typename: 'OffersConnection';
    readonly totalCount: number;
    readonly nodes: ReadonlyArray<{
      readonly __typename: 'Offer';
      readonly id: string;
      readonly consumer: string;
      readonly deposit: bigint | string;
      readonly minimumAcceptHeight: bigint | string;
      readonly expireDate: Date;
      readonly limit: number;
      readonly accepted: number;
      readonly reachLimit: boolean;
      readonly withdrawn: boolean;
      readonly deployment: {
        readonly __typename: 'Deployment';
        readonly id: string;
        readonly project: {
          readonly __typename: 'Project';
          readonly id: string;
          readonly metadata: string;
        } | null;
      } | null;
      readonly planTemplate: {
        readonly __typename: 'PlanTemplate';
        readonly id: string;
        readonly period: bigint | string;
        readonly dailyReqCap: bigint | string;
        readonly rateLimit: bigint | string;
      } | null;
    } | null>;
  } | null;
};

export type GetOwnFinishedOffersQueryVariables = Types.Exact<{
  consumer: Types.Scalars['String'];
  now: Types.Scalars['Datetime'];
  offset: Types.InputMaybe<Types.Scalars['Int']>;
}>;

export type GetOwnFinishedOffersQuery = {
  readonly offers: {
    readonly __typename: 'OffersConnection';
    readonly totalCount: number;
    readonly nodes: ReadonlyArray<{
      readonly __typename: 'Offer';
      readonly id: string;
      readonly consumer: string;
      readonly deposit: bigint | string;
      readonly minimumAcceptHeight: bigint | string;
      readonly expireDate: Date;
      readonly limit: number;
      readonly accepted: number;
      readonly reachLimit: boolean;
      readonly withdrawn: boolean;
      readonly deployment: {
        readonly __typename: 'Deployment';
        readonly id: string;
        readonly project: {
          readonly __typename: 'Project';
          readonly id: string;
          readonly metadata: string;
        } | null;
      } | null;
      readonly planTemplate: {
        readonly __typename: 'PlanTemplate';
        readonly id: string;
        readonly period: bigint | string;
        readonly dailyReqCap: bigint | string;
        readonly rateLimit: bigint | string;
      } | null;
    } | null>;
  } | null;
};

export type GetOwnExpiredOffersQueryVariables = Types.Exact<{
  consumer: Types.Scalars['String'];
  now: Types.Scalars['Datetime'];
  offset: Types.InputMaybe<Types.Scalars['Int']>;
}>;

export type GetOwnExpiredOffersQuery = {
  readonly offers: {
    readonly __typename: 'OffersConnection';
    readonly totalCount: number;
    readonly nodes: ReadonlyArray<{
      readonly __typename: 'Offer';
      readonly id: string;
      readonly consumer: string;
      readonly deposit: bigint | string;
      readonly minimumAcceptHeight: bigint | string;
      readonly expireDate: Date;
      readonly limit: number;
      readonly accepted: number;
      readonly reachLimit: boolean;
      readonly withdrawn: boolean;
      readonly deployment: {
        readonly __typename: 'Deployment';
        readonly id: string;
        readonly project: {
          readonly __typename: 'Project';
          readonly id: string;
          readonly metadata: string;
        } | null;
      } | null;
      readonly planTemplate: {
        readonly __typename: 'PlanTemplate';
        readonly id: string;
        readonly period: bigint | string;
        readonly dailyReqCap: bigint | string;
        readonly rateLimit: bigint | string;
      } | null;
    } | null>;
  } | null;
};

export type GetAllOpenOffersQueryVariables = Types.Exact<{
  now: Types.Scalars['Datetime'];
  offset: Types.InputMaybe<Types.Scalars['Int']>;
}>;

export type GetAllOpenOffersQuery = {
  readonly offers: {
    readonly __typename: 'OffersConnection';
    readonly totalCount: number;
    readonly nodes: ReadonlyArray<{
      readonly __typename: 'Offer';
      readonly id: string;
      readonly consumer: string;
      readonly deposit: bigint | string;
      readonly minimumAcceptHeight: bigint | string;
      readonly expireDate: Date;
      readonly limit: number;
      readonly accepted: number;
      readonly reachLimit: boolean;
      readonly withdrawn: boolean;
      readonly deployment: {
        readonly __typename: 'Deployment';
        readonly id: string;
        readonly project: {
          readonly __typename: 'Project';
          readonly id: string;
          readonly metadata: string;
        } | null;
      } | null;
      readonly planTemplate: {
        readonly __typename: 'PlanTemplate';
        readonly id: string;
        readonly period: bigint | string;
        readonly dailyReqCap: bigint | string;
        readonly rateLimit: bigint | string;
      } | null;
    } | null>;
  } | null;
};

export type GetSpecificOpenOffersQueryVariables = Types.Exact<{
  deploymentId: Types.Scalars['String'];
  now: Types.Scalars['Datetime'];
  offset: Types.InputMaybe<Types.Scalars['Int']>;
}>;

export type GetSpecificOpenOffersQuery = {
  readonly offers: {
    readonly __typename: 'OffersConnection';
    readonly totalCount: number;
    readonly nodes: ReadonlyArray<{
      readonly __typename: 'Offer';
      readonly id: string;
      readonly consumer: string;
      readonly deposit: bigint | string;
      readonly minimumAcceptHeight: bigint | string;
      readonly expireDate: Date;
      readonly limit: number;
      readonly accepted: number;
      readonly reachLimit: boolean;
      readonly withdrawn: boolean;
      readonly deployment: {
        readonly __typename: 'Deployment';
        readonly id: string;
        readonly project: {
          readonly __typename: 'Project';
          readonly id: string;
          readonly metadata: string;
        } | null;
      } | null;
      readonly planTemplate: {
        readonly __typename: 'PlanTemplate';
        readonly id: string;
        readonly period: bigint | string;
        readonly dailyReqCap: bigint | string;
        readonly rateLimit: bigint | string;
      } | null;
    } | null>;
  } | null;
};
