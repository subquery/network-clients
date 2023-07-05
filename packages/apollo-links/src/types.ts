// Copyright 2020-2022 SubQuery Pte Ltd authors & contributors
// SPDX-License-Identifier: Apache-2.0

export enum ProjectType {
  dictionary = 'dictionary',
  deployment = 'deployment',
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
