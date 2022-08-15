/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetServiceAgreements
// ====================================================

export interface GetServiceAgreements_serviceAgreements_nodes_deployment_project {
  readonly __typename: "Project";
  readonly id: string;
  readonly metadata: string;
}

export interface GetServiceAgreements_serviceAgreements_nodes_deployment {
  readonly __typename: "Deployment";
  readonly id: string;
  readonly version: string;
  /**
   * Reads a single `Project` that is related to this `Deployment`.
   */
  readonly project: GetServiceAgreements_serviceAgreements_nodes_deployment_project | null;
}

export interface GetServiceAgreements_serviceAgreements_nodes {
  readonly __typename: "ServiceAgreement";
  readonly id: string;
  readonly deploymentId: string;
  readonly indexerAddress: string;
  readonly consumerAddress: string;
  readonly period: GraphQL_BigFloat;
  readonly value: GraphQL_BigFloat;
  readonly startTime: GraphQL_Datetime;
  /**
   * Reads a single `Deployment` that is related to this `ServiceAgreement`.
   */
  readonly deployment: GetServiceAgreements_serviceAgreements_nodes_deployment | null;
}

export interface GetServiceAgreements_serviceAgreements {
  readonly __typename: "ServiceAgreementsConnection";
  /**
   * A list of `ServiceAgreement` objects.
   */
  readonly nodes: ReadonlyArray<(GetServiceAgreements_serviceAgreements_nodes | null)>;
}

export interface GetServiceAgreements {
  /**
   * Reads and enables pagination through a set of `ServiceAgreement`.
   */
  readonly serviceAgreements: GetServiceAgreements_serviceAgreements | null;
}

export interface GetServiceAgreementsVariables {
  readonly address: string;
}
