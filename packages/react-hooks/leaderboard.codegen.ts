// Copyright 2020-2022 SubQuery Pte Ltd authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { CodegenConfig } from '@graphql-codegen/cli';
import { NETWORK_CONFIGS } from '@subql/network-config';

const config: CodegenConfig = {
  // FIXME: use `NETWORK_CONFIGS.kepler.gql.network`
  schema: NETWORK_CONFIGS.mainnet.gql.leaderboard,
  documents: '../network-query/queries/leaderboard/*.gql',
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
        folder: '../../../react-hooks/src/__hooks__/leaderboard', // defines a folder, (Relative to the source files) where the generated files will be created
        extensions: '.generated.ts',
        baseTypesPath: 'graphql',
        importTypesNamespace: 'Graphql',
      },
      config: {
        importOperationTypesFrom: 'Graphql',
      },
      plugins: ['typescript-react-apollo'],
    },
  },
};

export default config;
