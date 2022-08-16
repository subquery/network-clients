/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetIndexerRewards
// ====================================================

export interface GetIndexerRewards_indexerRewards_nodes {
  readonly __typename: "IndexerReward";
  readonly id: string;
  readonly indexerId: string;
  readonly eraIdx: string;
  readonly amount: GraphQL_BigFloat;
}

export interface GetIndexerRewards_indexerRewards {
  readonly __typename: "IndexerRewardsConnection";
  /**
   * A list of `IndexerReward` objects.
   */
  readonly nodes: ReadonlyArray<(GetIndexerRewards_indexerRewards_nodes | null)>;
}

export interface GetIndexerRewards {
  /**
   * Reads and enables pagination through a set of `IndexerReward`.
   */
  readonly indexerRewards: GetIndexerRewards_indexerRewards | null;
}

export interface GetIndexerRewardsVariables {
  readonly address: string;
  readonly era1: string;
  readonly era2: string;
}
