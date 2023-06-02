// Copyright 2020-2022 SubQuery Pte Ltd authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { ApolloLink, FetchResult, NextLink, Observable, Operation } from '@apollo/client/core';
import { Subscription } from 'zen-observable-ts';

import { isTokenExpired } from './authHelper';
import AgreementManager from '../agreementManager';
import { POST } from '../query';
import { Logger } from '../logger';

interface AuthOptions {
  authUrl: string;                      // the url for geting token
  projectId: string;                    // chainId or deploymentId for the project
  agreementManager: AgreementManager;   // agreement manager for managing agreements
  logger: Logger;                       // logger for logging
}

export class ClusterAuthLink extends ApolloLink {
  private _options: AuthOptions;

  constructor(options: AuthOptions) {
    super();
    this._options = options;
  }

  get agreementManager () {
    return this._options.agreementManager;
  }

  override request(operation: Operation, forward?: NextLink): Observable<FetchResult> | null {
    if (!forward) return null;

    return new Observable<FetchResult>(observer => {
      let sub: Subscription;
      this.getUrlAndToken().then((data) => {
        if (data) {
          const { token, url } = data;
          const headers = { authorization: `Bearer ${token}` };
          operation.setContext({ url, headers });
        }
      })
      .catch((error) => observer.error(error))
      .finally(() => {
        sub = forward(operation).subscribe(observer);
      });

      return () => sub?.unsubscribe();
    });
  }

  private async getUrlAndToken(): Promise<{ url: string; token: string } | undefined> {
    const nextAgreement = await this.agreementManager.getNextAgreement();
    if (!nextAgreement) return undefined;

    const { token, id, url, indexer } = nextAgreement;
    if (!isTokenExpired(token)) return { token, url };

    const { projectId, authUrl } = this._options;

    const tokenUrl = new URL('/token', authUrl);
    const res = await POST<{ token: string }>(tokenUrl.toString(), { projectId, indexer, agreementId: id });
    this.agreementManager.updateTokenById(id, res.token);
    return { token: res.token, url };
  }
}
