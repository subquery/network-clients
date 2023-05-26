// Copyright 2020-2022 SubQuery Pte Ltd authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { ApolloLink, FetchResult, HttpLink, HttpOptions, NextLink, Observable, Operation } from '@apollo/client/core';

export interface Options {
  httpOptions: HttpOptions; // http options for init `HttpLink`
  backupDictionary: string; // backup dictionary for `HttpLink`
}

export class DynamicHttpLink extends ApolloLink {
  private _options: Options;

  constructor(options: Options) {
    super();
    this._options = options;
  }

  get backupDictionary(): string {
    return this._options.backupDictionary;
  }

  override request(operation: Operation, forward?: NextLink): Observable<FetchResult> | null {
    if (!forward) return null;

    return new Observable<FetchResult>(observer => {
      const { uri } = operation.getContext();
      const httpLink = this.createHttpLink(uri);
      operation.setContext({ link: httpLink });

      const sub = forward(operation).subscribe({
        next: observer.next.bind(observer),
        complete: observer.complete.bind(observer),
        error: error => {
          // TODO: Handle the error here, e.g. retry with another link
          console.log('Request failed:', error);
          observer.error(error);
        },
      });
      return () => sub.unsubscribe();
    });
  }

  private createHttpLink(uri = this.backupDictionary): HttpLink {
    return new HttpLink({
      ...this._options.httpOptions,
      uri,
    });
  }
}
