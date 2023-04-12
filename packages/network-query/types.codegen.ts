// Copyright 2020-2022 SubQuery Pte Ltd authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { CodegenConfig } from '@graphql-codegen/cli';
import { NETWORK_CONFIGS } from '@subql/network-client';

const config: CodegenConfig = {
  schema: [`${NETWORK_CONFIGS.kepler.gql.network}`],
  documents: ['./queries/exchange/*.gql', './queries/network/*.gql'],
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
    'src/__graphql__/base-types.ts': {
      plugins: ['typescript', 'typescript-operations'],
    },
  },
};

export default config;
