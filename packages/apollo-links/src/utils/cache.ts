// Copyright 2020-2023 SubQuery Pte Ltd authors & contributors
// SPDX-License-Identifier: Apache-2.0

export interface CacheTool {
  get<T>(key: string): T | undefined;
  set<T>(key: string, value: T): void;
  remove(key: string): void;
  clear(): void;
}

export class MemoryCache implements CacheTool {
  private store: { [key: string]: any } = {};

  get<T>(key: string): T | undefined {
    if (key in this.store) {
      return this.store[key] as T;
    }
    return undefined;
  }

  set<T>(key: string, value: T): void {
    this.store[key] = value;
  }

  remove(key: string): void {
    delete this.store[key];
  }

  clear(): void {
    this.store = {};
  }
}
