// Copyright 2020-2022 SubQuery Pte Ltd authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { ApolloLink, FetchResult, HttpLink, HttpOptions, NextLink, Observable, Operation } from '@apollo/client/core';

export interface Options {
  httpOptions: HttpOptions; // http options for init `HttpLink`
  backupDictionary?: string; // backup dictionary for `HttpLink`
}

export class DynamicHttpLink extends ApolloLink {
  private _options: Options;

  constructor(options: Options) {
    super();
    this._options = options;
  }

  get backupDictionary(): string {
    return this._options.backupDictionary ?? '';
  }

  override request(operation: Operation, forward?: NextLink): Observable<FetchResult> | null {
    return new Observable<FetchResult>(observer => {
      const { url } = operation.getContext();
      const httpLink = this.createHttpLink(url);
      operation.setContext({ link: httpLink });

      const sub = forward && forward(operation).subscribe(observer);
      return () => sub?.unsubscribe();
    });
  }

  private createHttpLink(url = this.backupDictionary): HttpLink {
    return new HttpLink({
      ...this._options.httpOptions,
      uri: url,
    });
  }
}
