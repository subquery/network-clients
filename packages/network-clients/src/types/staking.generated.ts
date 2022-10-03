import * as Types from './base-types';

export type GetWithdrawlsQueryVariables = Types.Exact<{
  delegator: Types.Scalars['String'];
  offset: Types.InputMaybe<Types.Scalars['Int']>;
}>;

export type GetWithdrawlsQuery = {
  readonly withdrawls: {
    readonly __typename: 'WithdrawlsConnection';
    readonly nodes: ReadonlyArray<{
      readonly __typename: 'Withdrawl';
      readonly id: string;
      readonly index: bigint | string;
      readonly delegator: string;
      readonly indexer: string;
      readonly startTime: Date;
      readonly amount: bigint | string;
      readonly status: Types.WithdrawalStatus;
    } | null>;
  } | null;
};

export type GetRewardsQueryVariables = Types.Exact<{
  address: Types.Scalars['String'];
}>;

export type GetRewardsQuery = {
  readonly rewards: {
    readonly __typename: 'RewardsConnection';
    readonly nodes: ReadonlyArray<{
      readonly __typename: 'Reward';
      readonly id: string;
      readonly delegatorAddress: string;
      readonly indexerAddress: string;
      readonly amount: bigint | string;
      readonly claimedTime: Date;
    } | null>;
  } | null;
  readonly unclaimedRewards: {
    readonly __typename: 'UnclaimedRewardsConnection';
    readonly totalCount: number;
    readonly nodes: ReadonlyArray<{
      readonly __typename: 'UnclaimedReward';
      readonly id: string;
      readonly delegatorAddress: string;
      readonly indexerAddress: string;
      readonly amount: bigint | string;
    } | null>;
  } | null;
};

export type GetIndexerRewardsQueryVariables = Types.Exact<{
  address: Types.Scalars['String'];
  era1: Types.Scalars['String'];
  era2: Types.Scalars['String'];
}>;

export type GetIndexerRewardsQuery = {
  readonly indexerRewards: {
    readonly __typename: 'IndexerRewardsConnection';
    readonly nodes: ReadonlyArray<{
      readonly __typename: 'IndexerReward';
      readonly id: string;
      readonly indexerId: string;
      readonly eraIdx: string;
      readonly amount: bigint | string;
    } | null>;
  } | null;
};
