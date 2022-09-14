// Copyright 2020-2022 SubQuery Pte Ltd authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { ApolloLink, FetchResult, NextLink, Observable, Operation } from '@apollo/client';

export class AuthLink extends ApolloLink {
  constructor() {
    super();
  }

  override request(operation: Operation, forward?: NextLink): Observable<FetchResult> | null {

    return forward ? forward(operation) : null;
  }
}
