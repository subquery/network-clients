// Copyright 2020-2022 SubQuery Pte Ltd authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { ReactElement } from 'react';

export type AsyncData<T> = Readonly<{ data?: T; loading: boolean; error?: Error }>;

export function mergeAsync<T1, T2, T3, T4>(
  v1: AsyncData<T1>,
  v2: AsyncData<T2>,
  v3?: AsyncData<T3>,
  v4?: AsyncData<T4>
): AsyncData<[T1 | undefined, T2 | undefined, T3 | undefined, T4 | undefined]> {
  return {
    loading: v1.loading || v2.loading || !!v3?.loading || !!v4?.loading,
    error: v1.error || v2.error || v3?.error || v4?.error,
    data: [v1.data, v2.data, v3?.data, v4?.data],
  };
}

export function mergeAsyncLast<T>(v1: AsyncData<unknown>, v2: AsyncData<T>): AsyncData<T> {
  return {
    loading: v1.loading || v2.loading,
    error: v1.error || v2.error,
    data: v2.data,
  };
}

export function mapAsync<O, T>(scope: (t: T) => O, data: AsyncData<T>): AsyncData<O> {
  return { ...data, data: data.data ? scope(data.data) : undefined };
}

export type RenderResult = ReactElement | null;

export type Handlers<T> = {
  loading: () => RenderResult;
  error: (error: Error) => RenderResult;
  data: (data: T, asyncData: AsyncData<T>) => RenderResult;
};

export type HandlersArray<T extends any[]> = {
  loading: () => RenderResult;
  error: (error: Error) => RenderResult;
  data: (data: T, asyncData: AsyncData<T>) => RenderResult;
  empty: () => RenderResult;
};
