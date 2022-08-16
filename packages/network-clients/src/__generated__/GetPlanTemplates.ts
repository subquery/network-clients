/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetPlanTemplates
// ====================================================

export interface GetPlanTemplates_planTemplates_nodes {
  readonly __typename: "PlanTemplate";
  readonly id: string;
  readonly period: GraphQL_BigFloat;
  readonly dailyReqCap: GraphQL_BigFloat;
  readonly rateLimit: GraphQL_BigFloat;
  readonly metadata: string | null;
  readonly active: boolean;
}

export interface GetPlanTemplates_planTemplates {
  readonly __typename: "PlanTemplatesConnection";
  /**
   * A list of `PlanTemplate` objects.
   */
  readonly nodes: ReadonlyArray<(GetPlanTemplates_planTemplates_nodes | null)>;
}

export interface GetPlanTemplates {
  /**
   * Reads and enables pagination through a set of `PlanTemplate`.
   */
  readonly planTemplates: GetPlanTemplates_planTemplates | null;
}

export interface GetPlanTemplatesVariables {
  readonly offset?: number | null;
}
