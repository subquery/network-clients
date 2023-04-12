// Copyright 2020-2022 SubQuery Pte Ltd authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { CodegenConfig } from '@graphql-codegen/cli';
import { NETWORK_CONFIGS } from '@subql/network-config';
import dotenv from 'dotenv';

dotenv.config();

const config: CodegenConfig = {
  schema: NETWORK_CONFIGS.kepler.gql.network,
  documents: '../network-query/queries/network/*.gql',
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
        folder: '../../../react-hooks/src/__hooks__/network', // defines a folder, (Relative to the source files) where the generated files will be created
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
