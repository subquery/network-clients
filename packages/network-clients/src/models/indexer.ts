// Copyright 2020-2022 SubQuery Pte Ltd authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { CurrentEraValue } from './eraValue';

export interface IndexerDetail {
  metadata?: IndexerMetadata;
  address: string;
  controller: string | null;
  commission: CurrentEraValue<number>;
  totalStake: CurrentEraValue;
  ownStake: CurrentEraValue;
  delegated: CurrentEraValue;
  capacity: CurrentEraValue;
}

export interface Indexer {
  address: string;
  metadataCid: string;
}
export interface IndexerWithMetadata extends Indexer {
  metadata: IndexerMetadata;
}
export interface IndexerWithController extends Indexer {
  controller: string;
}

export type IndexerMetadata = {
  name: string;
  image?: string;
  url: string;
};
