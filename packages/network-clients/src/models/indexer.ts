// Copyright 2020-2022 SubQuery Pte Ltd authors & contributors
// SPDX-License-Identifier: Apache-2.0

import * as yup from 'yup';
import { EraBasedValue } from './common';

export interface Indexer {
  metadata?: IndexerMetadata;
  address: string;
  controller: string | null;
  commission: EraBasedValue;
  totalStake: EraBasedValue;
}

export const indexerMetadataSchema = yup.object({
  name: yup.string(),
  image: yup.string().optional(),
  url: yup.string() /*.required()*/,
});

export type IndexerMetadata = yup.Asserts<typeof indexerMetadataSchema>;
