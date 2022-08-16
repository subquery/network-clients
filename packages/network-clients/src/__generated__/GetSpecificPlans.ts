/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetSpecificPlans
// ====================================================

export interface GetSpecificPlans_deploymentIndexers_nodes_deployment_project {
  readonly __typename: "Project";
  readonly id: string;
  readonly metadata: string;
}

export interface GetSpecificPlans_deploymentIndexers_nodes_deployment_plans_nodes_planTemplate {
  readonly __typename: "PlanTemplate";
  readonly id: string;
  readonly period: GraphQL_BigFloat;
  readonly dailyReqCap: GraphQL_BigFloat;
  readonly rateLimit: GraphQL_BigFloat;
  readonly metadata: string | null;
  readonly active: boolean;
}

export interface GetSpecificPlans_deploymentIndexers_nodes_deployment_plans_nodes {
  readonly __typename: "Plan";
  readonly id: string;
  readonly active: boolean;
  readonly creator: string;
  readonly deploymentId: string | null;
  readonly price: GraphQL_BigFloat;
  /**
   * Reads a single `PlanTemplate` that is related to this `Plan`.
   */
  readonly planTemplate: GetSpecificPlans_deploymentIndexers_nodes_deployment_plans_nodes_planTemplate | null;
}

export interface GetSpecificPlans_deploymentIndexers_nodes_deployment_plans {
  readonly __typename: "PlansConnection";
  /**
   * A list of `Plan` objects.
   */
  readonly nodes: ReadonlyArray<(GetSpecificPlans_deploymentIndexers_nodes_deployment_plans_nodes | null)>;
}

export interface GetSpecificPlans_deploymentIndexers_nodes_deployment {
  readonly __typename: "Deployment";
  readonly id: string;
  /**
   * Reads a single `Project` that is related to this `Deployment`.
   */
  readonly project: GetSpecificPlans_deploymentIndexers_nodes_deployment_project | null;
  /**
   * Reads and enables pagination through a set of `Plan`.
   */
  readonly plans: GetSpecificPlans_deploymentIndexers_nodes_deployment_plans;
}

export interface GetSpecificPlans_deploymentIndexers_nodes {
  readonly __typename: "DeploymentIndexer";
  /**
   * Reads a single `Deployment` that is related to this `DeploymentIndexer`.
   */
  readonly deployment: GetSpecificPlans_deploymentIndexers_nodes_deployment | null;
}

export interface GetSpecificPlans_deploymentIndexers {
  readonly __typename: "DeploymentIndexersConnection";
  /**
   * A list of `DeploymentIndexer` objects.
   */
  readonly nodes: ReadonlyArray<(GetSpecificPlans_deploymentIndexers_nodes | null)>;
}

export interface GetSpecificPlans {
  /**
   * Reads and enables pagination through a set of `DeploymentIndexer`.
   */
  readonly deploymentIndexers: GetSpecificPlans_deploymentIndexers | null;
}

export interface GetSpecificPlansVariables {
  readonly address?: string | null;
}
