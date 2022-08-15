// Copyright 2020-2022 SubQuery Pte Ltd authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { ApolloQueryResult } from "@apollo/client/core";

export async function wrapApolloResult<T>(_result: Promise<ApolloQueryResult<T>>): Promise<T> {
    const result = await _result;
    if (result.error) {
        throw result.error;
    }
    if (result.data) {
        return result.data;
    }
    console.error(result);
    throw new Error('unknown gql query error');
}
