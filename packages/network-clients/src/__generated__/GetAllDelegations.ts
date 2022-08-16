/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetAllDelegations
// ====================================================

export interface GetAllDelegations_delegations_nodes_indexer {
  readonly __typename: "Indexer";
  readonly metadata: string | null;
}

export interface GetAllDelegations_delegations_nodes {
  readonly __typename: "Delegation";
  readonly id: string;
  readonly delegatorId: string;
  readonly indexerId: string;
  readonly amount: GraphQL_JSON;
  /**
   * Reads a single `Indexer` that is related to this `Delegation`.
   */
  readonly indexer: GetAllDelegations_delegations_nodes_indexer | null;
}

export interface GetAllDelegations_delegations {
  readonly __typename: "DelegationsConnection";
  /**
   * A list of `Delegation` objects.
   */
  readonly nodes: ReadonlyArray<(GetAllDelegations_delegations_nodes | null)>;
}

export interface GetAllDelegations {
  /**
   * Reads and enables pagination through a set of `Delegation`.
   */
  readonly delegations: GetAllDelegations_delegations | null;
}

export interface GetAllDelegationsVariables {
  readonly offset?: number | null;
}
