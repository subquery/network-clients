/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetIndexer
// ====================================================

export interface GetIndexer_indexer {
  readonly __typename: "Indexer";
  readonly id: string;
  readonly metadata: string | null;
  readonly controller: string | null;
  readonly commission: GraphQL_JSON;
  readonly totalStake: GraphQL_JSON;
}

export interface GetIndexer {
  readonly indexer: GetIndexer_indexer | null;
}

export interface GetIndexerVariables {
  readonly address: string;
}
