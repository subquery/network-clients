// Copyright 2020-2022 SubQuery Pte Ltd authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { CodegenConfig } from '@graphql-codegen/cli';
import { NETWORK_CONFIGS } from '@subql/network-config';

const config: CodegenConfig = {
  schema: [`${NETWORK_CONFIGS.testnet.gql.network}`, `${NETWORK_CONFIGS.kepler.gql.leaderboard}`],
  documents: ['./queries/network/*.gql', './queries/leaderboard/*.gql'],
  config: {
    preResolveTypes: true,
    namingConvention: 'keep',
    avoidOptionals: {
      field: true,
      object: false,
      inputValue: false,
      defaultValue: false,
    },
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
