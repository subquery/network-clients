// Copyright 2020-2022 SubQuery Pte Ltd authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { CodegenConfig } from '@graphql-codegen/cli';
import dotenv from 'dotenv';

dotenv.config();

const config: CodegenConfig = {
  schema: process.env.KEPLER_EXCHANGE,
  documents: './queries/exchange/*.gql',
  config: {
    preResolveTypes: true,
    namingConvention: 'keep',
    avoidOptionals: true,
    nonOptionalTypename: true,
    skipTypeNameForRoot: true,
    immutableTypes: true,
    scalars: {
      Date: 'Date',
      Datetime: 'Date',
      BigFloat: 'bigint' || 'string',
      BigInt: 'bigint',
      Cursor: 'string',
    },
  },
  generates: {
    'src/__graphql__/exchange/base-types.ts': {
      plugins: ['typescript', 'typescript-operations'],
    },
    'src/': {
      preset: 'near-operation-file',
      presetConfig: {
        folder: '../../src/__graphql__/exchange',
        extensions: '.generated.ts',
        baseTypesPath: '__graphql__/exchange/base-types.ts',
      },
      config: {
        importOperationTypesFrom: 'Types',
      },
      plugins: ['typescript-document-nodes'],
    },
  },
};

export default config;