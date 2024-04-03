// Copyright 2020-2023 SubQuery Pte Ltd authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { LRUCache as LRU } from 'lru-cache';

export interface IStore {
  get<T>(key: string): Promise<T | undefined>;
  set<T>(key: string, value: T): Promise<void>; // ttl in milliseconds
  remove(key: string): Promise<void>;
}

interface Options {
  ttl: number;
}

export class LocalStorageCache implements IStore {
  private ttl: number;

  constructor(options: Options) {
    this.ttl = options.ttl;
  }

  async get<T>(key: string): Promise<T | undefined> {
    const data = localStorage.getItem(key);
    if (!data) return undefined;

    try {
      const parsed = JSON.parse(data);
      if (parsed.expiry && parsed.expiry < Date.now()) {
        localStorage.removeItem(key);
        return undefined;
      }

      return parsed.value;
    } catch {
      return undefined;
    }
  }

  async set<T>(key: string, value: T): Promise<void> {
    const data = {
      value,
      expiry: this.ttl ? Date.now() + this.ttl : undefined,
    };
    localStorage.setItem(key, JSON.stringify(data));
  }

  async remove(key: string): Promise<void> {
    localStorage.removeItem(key);
  }
}

export class LRUCache implements IStore {
  private cache: LRU<string, any>;

  constructor(options: Options) {
    this.cache = new LRU({ max: 1000, ttl: options.ttl });
  }

  async get<T>(key: string): Promise<T | undefined> {
    return this.cache.get(key);
  }

  async set<T>(key: string, value: T, ttl?: number): Promise<void> {
    // If ttl is defined, it is passed in milliseconds.
    // lru-cache expects ttl in milliseconds as well, so it aligns perfectly.
    this.cache.set(key, value, { ttl });
  }

  async remove(key: string): Promise<void> {
    this.cache.delete(key);
  }
}

export function createStore(options: Options): IStore {
  if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
    return new LocalStorageCache(options);
  }

  return new LRUCache(options);
}

export function createLocalStorageStore(options: Options): IStore {
  if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
    return new LocalStorageCache(options);
  }

  throw new Error('localstorage is not available.');
}
