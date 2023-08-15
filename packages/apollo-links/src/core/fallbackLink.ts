// Copyright 2020-2022 SubQuery Pte Ltd authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { ApolloLink, Operation, NextLink, Observable, FetchResult } from '@apollo/client/core';
import { Logger } from '../utils/logger';

export class FallbackLink extends ApolloLink {
  constructor(private url?: string, private logger?: Logger) {
    super();
  }

  override request(operation: Operation, forward?: NextLink): Observable<FetchResult> | null {
    if (!forward) return null;

    return new Observable<FetchResult>((observer) => {
      if (!operation.getContext().url) {
        if (this.url) {
          this.logger?.debug(`use fallback url: ${this.url}`);
        }
        operation.setContext({ url: this.url, fallback: true });
      }
      const subscription = forward(operation).subscribe(observer);
      return () => subscription.unsubscribe();
    });
  }
}
