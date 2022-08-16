// Copyright 2020-2022 SubQuery Pte Ltd authors & contributors
// SPDX-License-Identifier: Apache-2.0

// Remaps types not resolved by graphql codegen
type GraphQL_Datetime = Date;
type GraphQL_BigFloat = bigint | string;
type GraphQL_JSON = any;
type GraphQL_Cursor = string;
