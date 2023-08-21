// Copyright 2020-2022 SubQuery Pte Ltd authors & contributors
// SPDX-License-Identifier: Apache-2.0

import {
  ApolloLink,
  FetchResult,
  HttpLink,
  HttpOptions,
  NextLink,
  Observable,
  Operation,
} from '@apollo/client/core';
import { Logger } from '../utils/logger';
import fetch from 'cross-fetch';

export type Options = {
  httpOptions: {
    /**
     * @remarks
     * Please confirm your `fetch` attaches headers `Content-Type` and `Content-Length`.
     */
    fetch?: HttpOptions['fetch'];
  } & HttpOptions; // http options for init `HttpLink`
  logger?: Logger;
};

export class DynamicHttpLink extends ApolloLink {
  private options: Options;

  constructor(options: Options) {
    super();
    this.options = options;
  }

  get logger(): Logger | undefined {
    return this.options.logger;
  }

  override request(operation: Operation, forward?: NextLink): Observable<FetchResult> | null {
    const { url } = operation.getContext();
    if (!url) {
      return new Observable<FetchResult>((observer) => {
        observer.error(new Error(`empty url`));
      });
    }

    this.logger?.debug(`use url: ${url}`);
    const httpLink = this.createHttpLink(url);

    return httpLink.request(operation, forward);
  }

  private createHttpLink(url: string): HttpLink {
    return new HttpLink({
      ...this.options.httpOptions,
      fetch: this.options.httpOptions.fetch ? this.options.httpOptions.fetch : fetch,
      uri: url,
    });
  }
}
