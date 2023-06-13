// Copyright 2020-2022 SubQuery Pte Ltd authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { ApolloLink, Operation, NextLink, Observable, FetchResult } from '@apollo/client/core';

export class FallbackLink extends ApolloLink {
  constructor(private url?: string) {
    super();
  }

  override request(operation: Operation, forward?: NextLink): Observable<FetchResult> | null {
    if (!forward) return null;

    return new Observable<FetchResult>(observer => {
      const url = operation.getContext().url ?? this.url;
      operation.setContext({ url });
      const subscription = forward(operation).subscribe(observer);
      return () => subscription.unsubscribe();
    });
  }
}
