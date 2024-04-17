// Copyright 2020-2022 SubQuery Pte Ltd authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { BigNumber } from 'ethers';
import { sleep, waitForSomething } from './waitForSomething';

export * from './ipfs';

export function min(a: BigNumber, b: BigNumber): BigNumber {
  return a.lte(b) ? a : b;
}

export const indexingProgress = ({
  currentHeight,
  targetHeight,
  startHeight = 0,
}: {
  currentHeight: number;
  targetHeight: number;
  startHeight: number;
}) => {
  if (targetHeight === startHeight) return 0;
  const rawProgress = (currentHeight - startHeight) / (targetHeight - startHeight);
  return isNaN(rawProgress) ? 0 : Math.min(Math.max(rawProgress, 0), 1);
};

export const cachedResult: Map<string, any> = new Map();
export enum CacheEnum {
  CACHED_PENDING = 'cached-pending',
}
export const fetchByCacheFirst = async <T extends Promise<any>>(
  asyncFunc: () => T,
  cacheName?: string,
  cacheTime = 3000
): Promise<T> => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let error: any = null;
  if (cacheName) {
    if (cachedResult.has(cacheName)) {
      const curCachedResult = cachedResult.get(cacheName);
      if (curCachedResult === CacheEnum.CACHED_PENDING) {
        const getCache = await waitForSomething({
          func: () => cachedResult.get(cacheName) !== CacheEnum.CACHED_PENDING,
          timeout: 5 * 10000,
        });
        if (getCache) return cachedResult.get(cacheName);
      } else {
        return curCachedResult;
      }
    }

    cachedResult.set(cacheName, CacheEnum.CACHED_PENDING);
  }

  // try 3 times
  for (const _ of [0, 0, 0]) {
    try {
      const result = await asyncFunc();
      if (cacheName) {
        cachedResult.set(cacheName, result);
        if (cacheTime) {
          setTimeout(() => {
            cachedResult.delete(cacheName);
          }, cacheTime);
        }
      }
      return result;
    } catch (e) {
      error = e;
    }

    await sleep(10000);
  }

  if (cacheName && cacheTime) {
    cachedResult.delete(cacheName);
  }
  throw new Error(error);
};
