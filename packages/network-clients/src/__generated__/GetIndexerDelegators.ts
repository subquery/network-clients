/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetIndexerDelegators
// ====================================================

export interface GetIndexerDelegators_indexer_delegations_nodes {
  readonly __typename: "Delegation";
  readonly delegatorId: string;
  readonly amount: GraphQL_JSON;
}

export interface GetIndexerDelegators_indexer_delegations {
  readonly __typename: "DelegationsConnection";
  /**
   * A list of `Delegation` objects.
   */
  readonly nodes: ReadonlyArray<(GetIndexerDelegators_indexer_delegations_nodes | null)>;
}

export interface GetIndexerDelegators_indexer {
  readonly __typename: "Indexer";
  /**
   * Reads and enables pagination through a set of `Delegation`.
   */
  readonly delegations: GetIndexerDelegators_indexer_delegations;
}

export interface GetIndexerDelegators {
  readonly indexer: GetIndexerDelegators_indexer | null;
}

export interface GetIndexerDelegatorsVariables {
  readonly id: string;
  readonly offset?: number | null;
}
