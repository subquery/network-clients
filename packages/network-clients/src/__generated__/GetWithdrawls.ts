/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetWithdrawls
// ====================================================

export interface GetWithdrawls_withdrawls_nodes {
  readonly __typename: "Withdrawl";
  readonly id: string;
  readonly index: GraphQL_BigFloat;
  readonly delegator: string;
  readonly indexer: string;
  readonly startTime: GraphQL_Datetime;
  readonly amount: GraphQL_BigFloat;
  readonly claimed: boolean;
}

export interface GetWithdrawls_withdrawls {
  readonly __typename: "WithdrawlsConnection";
  /**
   * A list of `Withdrawl` objects.
   */
  readonly nodes: ReadonlyArray<(GetWithdrawls_withdrawls_nodes | null)>;
}

export interface GetWithdrawls {
  /**
   * Reads and enables pagination through a set of `Withdrawl`.
   */
  readonly withdrawls: GetWithdrawls_withdrawls | null;
}

export interface GetWithdrawlsVariables {
  readonly delegator: string;
  readonly offset?: number | null;
}
