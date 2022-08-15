/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: PlanTemplateFields
// ====================================================

export interface PlanTemplateFields {
  readonly __typename: "PlanTemplate";
  readonly id: string;
  readonly period: GraphQL_BigFloat;
  readonly dailyReqCap: GraphQL_BigFloat;
  readonly rateLimit: GraphQL_BigFloat;
  readonly metadata: string | null;
  readonly active: boolean;
}
