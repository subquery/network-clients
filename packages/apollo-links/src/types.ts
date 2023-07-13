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

export type Agreement = {
  id: string; // agreement id
  indexer: string;
  url: string;
  token: string;
};

export type Plan = {
  id: string; // state channel id
  indexer: string;
  url: string;
};

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
