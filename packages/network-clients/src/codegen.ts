// Copyright 2020-2022 SubQuery Pte Ltd authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { CodegenConfig } from '@graphql-codegen/cli';
import { NETWORK_CONFIGS } from './config';

const config: CodegenConfig = {
  schema: NETWORK_CONFIGS.kepler?.gql.explorer,
  documents: ['./src/graphql/*.ts'],
  config: {
    preResolveTypes: true,
    namingConvention: 'keep',
    avoidOptionals: true,
    nonOptionalTypename: true,
    skipTypeNameForRoot: true,
    immutableTypes: true,
    // scalars: [
    //     { scalar: "GraphQL_Datetime", type: "Date" },
    //     { scalar: "GraphQL_BigFloat", type: "bigint" || "string" },
    //     { scalar: "GraphQL_JSON", type: "any" },
    //     { scalar: "GraphQL_Cursor", type: "string" }
    // ]
  },
  // hooks: {
  //   afterAllFileWrite: ['prettier --write'],
  // },
  generates: {
    'src/__generated__/base-types.ts': {
      plugins: ['typescript'],
    },
    'src/': {
      preset: 'near-operation-file',
      presetConfig: {
        folder: '../__generated__',
        extensions: '.generated.ts',
        baseTypesPath: '__generated__/base-types.ts',
      },
      plugins: ['typescript-operations', 'typescript-react-apollo'],
    },
  },
};

export default config;
