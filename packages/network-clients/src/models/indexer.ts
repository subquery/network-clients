// Copyright 2020-2022 SubQuery Pte Ltd authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { CurrentEraValue } from './eraValue';

export interface Indexer {
  metadata?: IndexerMetadata;
  address: string;
  controller: string | null;
  commission: CurrentEraValue<number>;
  totalStake: CurrentEraValue;
  ownStake: CurrentEraValue;
  delegated: CurrentEraValue;
  capacity: CurrentEraValue;
}

export type IndexerMetadata = {
  name: string;
  image?: string;
  url: string;
};
