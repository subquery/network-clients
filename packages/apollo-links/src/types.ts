// Copyright 2020-2022 SubQuery Pte Ltd authors & contributors
// SPDX-License-Identifier: Apache-2.0

export enum ProjectType {
  dictionary = 'dictionary',
  deployment = 'deployment',
}

export enum OrderType {
  agreement = 'agreement',
  flexPlan = 'flexPlan',
}

export type Order = {
  id: string;
  indexer: string;
  url: string;
};

export type Agreement = Order & {
  token: string;
};

export type Plan = Order;

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
