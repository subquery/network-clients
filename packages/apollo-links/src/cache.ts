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

// TODO: refactor with one class
export const tokenCache = new Cache<string>();

export const AGREEMENT_LIST = 'AGREEMENT_LIST';
export const agreementListCache = new Cache<Agreement[]>();

export const CURRENT_AGREEMENT = 'CURRENT_AGREEMENT';
export const agreementCache = new Cache<number>();

export function getNextAgreement(): Agreement | undefined {
  const currAgreementIndex = agreementCache.get(CURRENT_AGREEMENT);
  const agreements = agreementListCache.get(AGREEMENT_LIST);
  if (!agreements) return undefined;

  let agreement = agreements[0];
  if (currAgreementIndex === undefined) {
    agreementCache.set(CURRENT_AGREEMENT, 0);
  }

  if (currAgreementIndex <= agreements.length - 2) {
    agreementCache.set(CURRENT_AGREEMENT, currAgreementIndex + 1);
    agreement = agreements[currAgreementIndex + 1];
  } else {
    agreementCache.set(CURRENT_AGREEMENT, 0);
  }

  return agreement;
}

export function getNextToken(): string | undefined {
  const nextId = getNextAgreement()?.id;
  return tokenCache.get(nextId ?? '');
}

export function updateCurrentToken(token: string) {
  const agreements = agreementListCache.get(AGREEMENT_LIST);
  const index = agreementCache.get(CURRENT_AGREEMENT);
  const id = agreements[index].id;

  tokenCache.set(id, token);
}