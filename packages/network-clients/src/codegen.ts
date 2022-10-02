// Copyright 2020-2022 SubQuery Pte Ltd authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: 'https://api.subquery.network/sq/subquery/subquery-network-subql-project',
  documents: ['./src/graphql/*.ts'],
  config: {
    preResolveTypes: true,
    namingConvention: 'keep',
    avoidOptionals: true,
    nonOptionalTypename: true,
    skipTypeNameForRoot: true,
    immutableTypes: true,
  },
  hooks: {
    afterAllFileWrite: ['prettier --write'],
  },
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
