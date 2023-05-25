// Copyright 2020-2022 SubQuery Pte Ltd authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { ApolloLink, FetchResult, HttpLink, HttpOptions, NextLink, Observable, Operation } from '@apollo/client/core';
import { agreementCache } from '../cache';

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

  override request(operation: Operation, forward?: NextLink): Observable<FetchResult> | null {
    if (!forward) return null;

    return new Observable<FetchResult>(observer => {
      const dynamicUrl = this.getUrl();
      const httpLink = this.createHttpLink(dynamicUrl);
      operation.setContext({ link: httpLink });

      const sub = forward(operation).subscribe(observer);
      return () => sub.unsubscribe();
    });
  }

  private createHttpLink(uri: string): HttpLink {
    return new HttpLink({
      ...this._options.httpOptions,
      uri,
    });
  }

  private getUrl(): string {
    return agreementCache.get('CURRENT_AGREEMENT')?.uri || this._options.backupDictionary;
  }
}
