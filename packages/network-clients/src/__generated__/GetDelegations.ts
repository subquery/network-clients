/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetDelegations
// ====================================================

export interface GetDelegations_delegations_nodes_indexer {
  readonly __typename: "Indexer";
  readonly metadata: string | null;
}

export interface GetDelegations_delegations_nodes {
  readonly __typename: "Delegation";
  readonly id: string;
  readonly delegatorId: string;
  readonly indexerId: string;
  readonly amount: GraphQL_JSON;
  /**
   * Reads a single `Indexer` that is related to this `Delegation`.
   */
  readonly indexer: GetDelegations_delegations_nodes_indexer | null;
}

export interface GetDelegations_delegations {
  readonly __typename: "DelegationsConnection";
  /**
   * The count of *all* `Delegation` you could get from the connection.
   */
  readonly totalCount: number;
  /**
   * A list of `Delegation` objects.
   */
  readonly nodes: ReadonlyArray<(GetDelegations_delegations_nodes | null)>;
}

export interface GetDelegations {
  /**
   * Reads and enables pagination through a set of `Delegation`.
   */
  readonly delegations: GetDelegations_delegations | null;
}

export interface GetDelegationsVariables {
  readonly delegator: string;
  readonly offset?: number | null;
}
