// Copyright 2020-2023 SubQuery Pte Ltd authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { LRUCache as LRU } from 'lru-cache';

export interface ICache {
  get<T>(key: string): T | undefined;
  set<T>(key: string, value: T): void; // ttl in milliseconds
  remove(key: string): void;
}

interface Options {
  ttl: number;
}

export class LocalStorageCache implements ICache {
  private ttl: number;

  constructor(options: Options) {
    this.ttl = options.ttl;
  }

  get<T>(key: string): T | undefined {
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

  set<T>(key: string, value: T): void {
    const data = {
      value,
      expiry: this.ttl ? Date.now() + this.ttl : undefined,
    };
    localStorage.setItem(key, JSON.stringify(data));
  }

  remove(key: string): void {
    localStorage.removeItem(key);
  }
}

export class LRUCache implements ICache {
  private cache: LRU<string, any>;

  constructor(options: Options) {
    this.cache = new LRU({ max: 1000, ttl: options.ttl });
  }

  get<T>(key: string): T | undefined {
    return this.cache.get(key);
  }

  set<T>(key: string, value: T, ttl?: number): void {
    // If ttl is defined, it is passed in milliseconds.
    // lru-cache expects ttl in milliseconds as well, so it aligns perfectly.
    this.cache.set(key, value, { ttl });
  }

  remove(key: string): void {
    this.cache.delete(key);
  }
}

export function initCache(options: Options): ICache {
  if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
    return new LocalStorageCache(options);
  }

  return new LRUCache(options);
}
