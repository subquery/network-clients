/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetPlans
// ====================================================

export interface GetPlans_plans_nodes_planTemplate {
  readonly __typename: "PlanTemplate";
  readonly id: string;
  readonly period: GraphQL_BigFloat;
  readonly dailyReqCap: GraphQL_BigFloat;
  readonly rateLimit: GraphQL_BigFloat;
  readonly metadata: string | null;
  readonly active: boolean;
}

export interface GetPlans_plans_nodes {
  readonly __typename: "Plan";
  readonly id: string;
  readonly active: boolean;
  readonly creator: string;
  readonly deploymentId: string | null;
  readonly price: GraphQL_BigFloat;
  /**
   * Reads a single `PlanTemplate` that is related to this `Plan`.
   */
  readonly planTemplate: GetPlans_plans_nodes_planTemplate | null;
}

export interface GetPlans_plans {
  readonly __typename: "PlansConnection";
  /**
   * A list of `Plan` objects.
   */
  readonly nodes: ReadonlyArray<(GetPlans_plans_nodes | null)>;
}

export interface GetPlans {
  /**
   * Reads and enables pagination through a set of `Plan`.
   */
  readonly plans: GetPlans_plans | null;
}

export interface GetPlansVariables {
  readonly address: string;
}
