// Copyright 2020-2022 SubQuery Pte Ltd authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { ApolloQueryResult } from '@apollo/client/core';

export async function wrapApolloResult<T>(_result: Promise<ApolloQueryResult<T>>): Promise<T> {
  const { error, data } = await _result;
  if (error) {
    throw error;
  }
  if (data) {
    return data;
  }

  throw new Error('unknown gql query error');
}
