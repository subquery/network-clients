// Copyright 2020-2022 SubQuery Pte Ltd authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { AsyncData } from './types';
import BigNumberJs from 'bignumber.js';
import { SQT_DECIMAL } from '@subql/network-config';
import { BigNumberish, BigNumber, utils } from 'ethers';
import { ReactElement } from 'react';

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

export type RenderResult = ReactElement | React.ReactNode | null;

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

export const formatSQT = (val: string | bigint) => {
  const transVal = typeof val === 'bigint' ? val.toString() : val;
  return BigNumberJs(transVal)
    .div(10 ** SQT_DECIMAL)
    .toString();
};

export function truncFormatEtherStr(value: string, decimalPlaces = 4): string {
  const [wholeNumberStr, decimalPlacesStr] = value.split('.');
  if (!decimalPlacesStr) return wholeNumberStr;

  const subStrLength =
    decimalPlacesStr.length > decimalPlaces ? decimalPlaces : decimalPlacesStr.length;
  const sortedDecimalPlaceStr = decimalPlacesStr.substring(0, subStrLength);
  return wholeNumberStr.concat('.', sortedDecimalPlaceStr);
}

export function formatEther(value: BigNumberish | bigint | undefined, toFixed?: number): string {
  const formattedEther = utils.formatEther(BigNumber.from(value ?? 0).toString());
  return toFixed ? truncFormatEtherStr(formattedEther, toFixed) : formattedEther;
}
