// Copyright 2020-2022 SubQuery Pte Ltd authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { CodegenConfig } from '@graphql-codegen/cli'
import dotenv from 'dotenv';

dotenv.config();

const config: CodegenConfig = {
  schema: process.env.KEPLER_SUBQL,
  documents: './queries/registry/*.gql',
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
    }
  },
  generates: {
    'src/__graphql__/base-types.ts': {
      plugins: [
        'typescript', 
        'typescript-operations'
      ]
    },
    'src/': {
      preset: 'near-operation-file',
      presetConfig: {
        folder: '../../src/__graphql__',
        extensions: '.generated.ts',
        baseTypesPath: '__graphql__/base-types.ts'
      },
      config: {
        importOperationTypesFrom: 'Types',
      },
      plugins: [
        'typescript-document-nodes'
      ]
    }
  },
  hooks: {
    afterAllFileWrite: [
      'prettier --write',
      'yarn cti create ./src/__graphql__ --withoutbackup'
    ]
  }
}

export default config;
