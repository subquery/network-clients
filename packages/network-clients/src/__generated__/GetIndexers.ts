/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { IndexersOrderBy } from "./globalTypes";

// ====================================================
// GraphQL query operation: GetIndexers
// ====================================================

export interface GetIndexers_indexers_nodes {
  readonly __typename: "Indexer";
  readonly id: string;
  readonly metadata: string | null;
  readonly controller: string | null;
  readonly commission: GraphQL_JSON;
  readonly totalStake: GraphQL_JSON;
}

export interface GetIndexers_indexers {
  readonly __typename: "IndexersConnection";
  /**
   * A list of `Indexer` objects.
   */
  readonly nodes: ReadonlyArray<(GetIndexers_indexers_nodes | null)>;
}

export interface GetIndexers {
  /**
   * Reads and enables pagination through a set of `Indexer`.
   */
  readonly indexers: GetIndexers_indexers | null;
}

export interface GetIndexersVariables {
  readonly offset?: number | null;
  readonly order?: IndexersOrderBy | null;
}
