/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetRewards
// ====================================================

export interface GetRewards_rewards_nodes {
  readonly __typename: "Reward";
  readonly id: string;
  readonly delegatorAddress: string;
  readonly indexerAddress: string;
  readonly amount: GraphQL_BigFloat;
  readonly claimedTime: GraphQL_Datetime;
}

export interface GetRewards_rewards {
  readonly __typename: "RewardsConnection";
  /**
   * A list of `Reward` objects.
   */
  readonly nodes: ReadonlyArray<(GetRewards_rewards_nodes | null)>;
}

export interface GetRewards_unclaimedRewards_nodes {
  readonly __typename: "UnclaimedReward";
  readonly id: string;
  readonly delegatorAddress: string;
  readonly indexerAddress: string;
  readonly amount: GraphQL_BigFloat;
}

export interface GetRewards_unclaimedRewards {
  readonly __typename: "UnclaimedRewardsConnection";
  /**
   * A list of `UnclaimedReward` objects.
   */
  readonly nodes: ReadonlyArray<(GetRewards_unclaimedRewards_nodes | null)>;
}

export interface GetRewards {
  /**
   * Reads and enables pagination through a set of `Reward`.
   */
  readonly rewards: GetRewards_rewards | null;
  /**
   * Reads and enables pagination through a set of `UnclaimedReward`.
   */
  readonly unclaimedRewards: GetRewards_unclaimedRewards | null;
}

export interface GetRewardsVariables {
  readonly address: string;
}
