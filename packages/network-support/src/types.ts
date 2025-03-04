// Copyright 2020-2022 SubQuery Pte Ltd authors & contributors
// SPDX-License-Identifier: Apache-2.0

export enum ProjectType {
  dictionary = 'dictionary',
  deployment = 'deployment',
}

export enum OrderType {
  agreement = 'agreement',
  flexPlan = 'flexPlan',
  fallback = 'fallback',
}

export type OrderWithType = (Order | ServiceAgreementOrder) & { type: OrderType };

export interface IndexingMetadata {
  subqueryHealthy: boolean;
  coordinatorVersion: string;
  proxyVersion: string;
  lastHeight: number;
  targetHeight: number;
}

export interface Order {
  id: string;
  indexer: string;
  price: string;
  url: string;
  metadata: IndexingMetadata;
}

export interface ServiceAgreementOrder extends Order {
  token: string;

  // agreement has expired or not
  expired?: boolean;
}

export type FlexPlanOrder = Order;

export type ChannelState = {
  channelId: string;
  indexer: string;
  consumer: string;
  spent: string;
  remote: string;
  isFinal: boolean;
  indexerSign: string;
  consumerSign: string;
};

export type ChannelAuth = {
  authorization: string;
};

export type RequestParam = {
  url: string;
  headers: { [key: string]: string };
  type: OrderType;
  runner: string;
  channelId?: string;
};

export class RequestParamError extends Error {
  constructor(message: string, public runner: string) {
    super(message);
  }
}

export interface WrappedResponse {
  result: string; // base64 encoded
  signature: string; // indexer signature
  state: string; // base64 encoded channel state
}

export interface RunnerSelector {
  runnerAddresses?: string[];
  agreements?: string[];
  channelIds?: string[];
}

type SCORE_DETAIL_TYPE =
  | 'base'
  | 'http2'
  | 'manual'
  | 'multiple'
  | 'block'
  | 'latency'
  | 'price'
  | 'ratelimit'
  | 'ratelimit_quota'
  | 'ratelimit_remain';

export type ScoreWithDetail = {
  score: number;
  scoreDetail: Record<SCORE_DETAIL_TYPE, number>;
};

export type NotifyFunc = (id: string, data: any, headers?: Record<string, string>) => Promise<void>;
