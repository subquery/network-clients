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

export const PREVIOUS_AGREEMENT = 'PREVIOUS_AGREEMENT';
export const agreementCache = new Cache<number>();

export function getNextAgreement(): Agreement | undefined {
  const prevAgreementIndex = agreementCache.get(PREVIOUS_AGREEMENT);
  const agreements = agreementListCache.get(AGREEMENT_LIST);
  if (!agreements) return undefined;

  let agreement = agreements[0];
  if (prevAgreementIndex === undefined) {
    agreementCache.set(PREVIOUS_AGREEMENT, 0);
  }

  if (prevAgreementIndex <= agreements.length - 2) {
    agreementCache.set(PREVIOUS_AGREEMENT, prevAgreementIndex + 1);
    agreement = agreements[prevAgreementIndex + 1];
  } else {
    agreementCache.set(PREVIOUS_AGREEMENT, 0);
  }

  return agreement;
}