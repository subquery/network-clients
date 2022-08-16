/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: ServiceAgreementFields
// ====================================================

export interface ServiceAgreementFields_deployment_project {
  readonly __typename: "Project";
  readonly id: string;
  readonly metadata: string;
}

export interface ServiceAgreementFields_deployment {
  readonly __typename: "Deployment";
  readonly id: string;
  readonly version: string;
  /**
   * Reads a single `Project` that is related to this `Deployment`.
   */
  readonly project: ServiceAgreementFields_deployment_project | null;
}

export interface ServiceAgreementFields {
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
  readonly deployment: ServiceAgreementFields_deployment | null;
}
