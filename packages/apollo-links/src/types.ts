// Copyright 2020-2022 SubQuery Pte Ltd authors & contributors
// SPDX-License-Identifier: Apache-2.0

export enum OrderType {
  dictionary = 'dictionary',
  deployment = 'deployment',
}

export type Agreement = {
  id: string;
  indexer: string;
  url: string;
  token: string;
};
