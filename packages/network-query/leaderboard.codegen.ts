// Copyright 2020-2022 SubQuery Pte Ltd authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { CodegenConfig } from '@graphql-codegen/cli';
import { NETWORK_CONFIGS } from '@subql/network-config';

const config: CodegenConfig = {
  schema: NETWORK_CONFIGS.kepler.gql.leaderboard,
  documents: './queries/leaderboard/*.gql',
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
    'src/': {
      preset: 'near-operation-file',
      presetConfig: {
        folder: '../../src/__graphql__/leaderboard',
        extensions: '.generated.ts',
        baseTypesPath: '__graphql__/base-types.ts',
      },
      config: {
        importOperationTypesFrom: 'Types',
      },
      plugins: ['typescript-document-nodes'],
    },
  },
};

export default config;
