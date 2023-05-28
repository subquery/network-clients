// Copyright 2020-2022 SubQuery Pte Ltd authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { Agreement } from "./types";

class Cache<T> {
  private _data: Record<string, T> = {};

  public set(key: string, value: T) {
    this._data[key] = value;
  }

  public get(key: string) {
    return this._data[key];
  }

  public delete(key: string) {
    delete this._data[key];
  }
}

class LinkCache {
  private static _instance: LinkCache;

  private agreementCache: Cache<number>;
  private agreementListCache: Cache<Agreement[]>;

  private constructor() {
    this.agreementCache = new Cache<number>();
    this.agreementListCache = new Cache<Agreement[]>();
  }

  public static getInstance(): LinkCache {
    if (!LinkCache._instance) {
      LinkCache._instance = new LinkCache();
    }

    return LinkCache._instance;
  }

  public getNextAgreement(): Agreement | undefined {
    const currAgreementIndex = this.agreementCache.get('CURRENT_AGREEMENT');
    const agreements = this.agreementListCache.get('AGREEMENT_LIST');
    if (!agreements) return undefined;

    let agreement = agreements[0];
    if (currAgreementIndex === undefined) {
      this.agreementCache.set('CURRENT_AGREEMENT', 0);
    }

    if (currAgreementIndex <= agreements.length - 2) {
      this.agreementCache.set('CURRENT_AGREEMENT', currAgreementIndex + 1);
      agreement = agreements[currAgreementIndex + 1];
    } else {
      this.agreementCache.set('CURRENT_AGREEMENT', 0);
    }

    return agreement;
  }

  public updateToken(agreementId: string, token: string) {
    const agreements = this.agreementListCache.get('AGREEMENT_LIST');
    const index = this.agreementCache.get('CURRENT_AGREEMENT');
    const id = agreements[index].id;

    // this.tokenCache.set(id, token);
  }
}

// Usage
const cache = LinkCache.getInstance();

export default cache;