// Copyright 2020-2022 SubQuery Pte Ltd authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { ApolloLink, FetchResult, HttpLink, HttpOptions, NextLink, Observable, Operation } from '@apollo/client/core';

export interface Options {
  httpOptions: HttpOptions;  // http options for init `HttpLink`
  fallbackServiceUrl?: string; // fall back service url for `HttpLink`
}

export class DynamicHttpLink extends ApolloLink {
  private _options: Options;

  constructor(options: Options) {
    super();
    this._options = options;
  }

  get fallbackServiceUrl(): string {
    return this._options.fallbackServiceUrl ?? '';
  }

  override request(operation: Operation, forward?: NextLink): Observable<FetchResult> | null {
    const { url } = operation.getContext();
    const httpLink = this.createHttpLink(url);

    console.log('httpLink Url:', httpLink.options.uri);

    return httpLink.request(operation, forward);
  }

  private createHttpLink(url = this.fallbackServiceUrl): HttpLink {
    return new HttpLink({
      ...this._options.httpOptions,
      uri: url,
    });
  }
}
