#!/bin/bash

# exchange
graphql-codegen --require dotenv/config --config exchange.codegen.ts

# registry
graphql-codegen --require dotenv/config --config registry.codegen.ts

yarn prettier --write . 

# creating export files
yarn cti create src/__graphql__/registry --withoutbackup
yarn cti create src/__graphql__/exchange --withoutbackup

# creating custom export file because type conflicts with filters
echo "// Copyright 2020-2022 SubQuery Pte Ltd authors & contributors
// SPDX-License-Identifier: Apache-2.0

import * as Exchange from './exchange';
import * as Registry from './registry';

export default { ...Exchange, ...Registry };" >| src/__graphql__/index.ts

