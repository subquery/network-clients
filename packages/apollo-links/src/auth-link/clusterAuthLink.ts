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
  private options: AuthOptions;
  private loggger: Logger;
  private agreementManager: AgreementManager;

  constructor(options: AuthOptions) {
    super();
    this.options = options;
    this.loggger = options.logger;
    this.agreementManager = options.agreementManager;
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

        sub = forward(operation).subscribe(observer);
      })
      .catch((error) => {
        this.loggger.warn(`Failed to get token: ${error.message}`);
        observer.error(new Error('failed to get indexer url and token'));
      });

      return () => sub?.unsubscribe();
    });
  }

  private async getUrlAndToken(): Promise<{ url: string; token: string } | undefined> {
    const nextAgreement = await this.agreementManager.getNextAgreement();
    if (!nextAgreement) return undefined;

    const { token, id, url, indexer } = nextAgreement;
    if (!isTokenExpired(token)) return { token, url };
    this.loggger.debug(`request new token for indexer ${indexer}`);
    const { projectId, authUrl } = this.options;

    const tokenUrl = new URL('/token', authUrl);
    const res = await POST<{ token: string }>(tokenUrl.toString(), { projectId, indexer, agreementId: id });
    this.agreementManager.updateTokenById(id, res.token);
    this.loggger.debug(`request new token for indexer ${indexer} success`);
    return { token: res.token, url };
  }
}
