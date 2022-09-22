// Copyright 2020-2022 SubQuery Pte Ltd authors & contributors
// SPDX-License-Identifier: Apache-2.0

import * as yup from 'yup';
import { CurrentEraValue } from './eraValue';

export interface Indexer {
  metadata?: IndexerMetadata;
  address: string;
  controller: string | null;
  commission: CurrentEraValue;
  totalStake: CurrentEraValue;
  ownStake: CurrentEraValue;
  delegated: CurrentEraValue;
  capacity: CurrentEraValue;
}

export const indexerMetadataSchema = yup.object({
  name: yup.string(),
  image: yup.string().optional(),
  url: yup.string() /*.required()*/,
});

export type IndexerMetadata = yup.Asserts<typeof indexerMetadataSchema>;
