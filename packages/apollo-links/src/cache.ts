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

export const agreementCache = new Cache<Agreement>();