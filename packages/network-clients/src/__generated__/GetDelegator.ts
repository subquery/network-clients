/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetDelegator
// ====================================================

export interface GetDelegator_delegator {
  readonly __typename: "Delegator";
  readonly id: string;
  readonly totalDelegations: GraphQL_JSON;
}

export interface GetDelegator {
  readonly delegator: GetDelegator_delegator | null;
}

export interface GetDelegatorVariables {
  readonly address: string;
}
