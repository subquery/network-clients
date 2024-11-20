// Copyright 2020-2023 SubQuery Pte Ltd authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { LRUCache as LRU } from 'lru-cache';

/* eslint-disable @typescript-eslint/no-unused-vars */
export interface IStore {
  get<T>(key: string): Promise<T | undefined>;
  set<T>(key: string, value: T, ttl?: number): Promise<void>; // ttl in milliseconds
  remove(key: string): Promise<void>;

  lpush(key: string, value: any): Promise<number>;
  ltrim(key: string, start: number, stop: number): Promise<void>;
  expire(key: string, ttl: number): Promise<void>;
}

export class BaseStorage implements IStore {
  get<T>(key: string): Promise<T | undefined> {
    return Promise.resolve(undefined);
  }
  set<T>(key: string, value: T, ttl?: number): Promise<void> {
    return Promise.resolve();
  }
  remove(key: string): Promise<void> {
    return Promise.resolve();
  }

  lpush(key: string, value: any): Promise<number> {
    return Promise.resolve(0);
  }
  ltrim(key: string, start: number, stop: number): Promise<void> {
    return Promise.resolve();
  }
  expire(key: string, ttl: number): Promise<void> {
    return Promise.resolve();
  }
}

interface Options {
  ttl: number;
}

export class LocalStorageCache extends BaseStorage {
  private ttl: number;

  constructor(options: Options) {
    super();
    this.ttl = options.ttl;
  }

  override async get<T>(key: string): Promise<T | undefined> {
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

  override async set<T>(key: string, value: T, ttl?: number): Promise<void> {
    const expiry = this.ttl ? Date.now() + this.ttl : undefined;
    const data = { value, expiry };

    try {
      localStorage.setItem(key, JSON.stringify(data));
    } catch {
      await this.cleanExpiredLocalStorage();
    }
  }

  override async remove(key: string): Promise<void> {
    localStorage.removeItem(key);
  }

  async cleanExpiredLocalStorage(): Promise<void> {
    await Promise.all(Object.entries(localStorage).map(async ([key]) => this.get(key)));
  }
}

export class LRUCache extends BaseStorage {
  private cache: LRU<string, any>;

  constructor(options: Options) {
    super();
    this.cache = new LRU({ max: 1000, ttl: options.ttl });
  }

  override async get<T>(key: string): Promise<T | undefined> {
    return this.cache.get(key);
  }

  override async set<T>(key: string, value: T, ttl?: number): Promise<void> {
    // If ttl is defined, it is passed in milliseconds.
    // lru-cache expects ttl in milliseconds as well, so it aligns perfectly.
    this.cache.set(key, value, { ttl });
  }

  override async remove(key: string): Promise<void> {
    this.cache.delete(key);
  }
}

export function createStore(options: Options): IStore {
  if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
    return new LocalStorageCache(options);
  }

  return new LRUCache(options);
}

export function createMemoryStore(options: Options): IStore {
  return new LRUCache(options);
}

export function createLocalStorageStore(options: Options): IStore {
  if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
    return new LocalStorageCache(options);
  }

  throw new Error('localstorage is not available.');
}
