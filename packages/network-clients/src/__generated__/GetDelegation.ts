/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetDelegation
// ====================================================

export interface GetDelegation_delegation {
  readonly __typename: "Delegation";
  readonly amount: GraphQL_JSON;
}

export interface GetDelegation {
  readonly delegation: GetDelegation_delegation | null;
}

export interface GetDelegationVariables {
  readonly id: string;
}
