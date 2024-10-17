// Copyright 2020-2022 SubQuery Pte Ltd authors & contributors
// SPDX-License-Identifier: Apache-2.0

import fetch from 'cross-fetch';
import { ServiceAgreementOrder, FlexPlanOrder, ProjectType } from '../types';

let timeout = 10_000;

export const setFetchTimeout = (newVal: number) => {
  timeout = newVal;
};

export const timeoutController = () => {
  const abort = new AbortController();

  setTimeout(() => abort.abort(), timeout);

  return abort;
};

export const customFetch = (
  input: URL | RequestInfo,
  init?: RequestInit | undefined,
  overrideFetch?: typeof fetch
): Promise<Response> => {
  overrideFetch = overrideFetch ?? fetch;
  return overrideFetch(input, {
    signal: timeoutController().signal,
    ...init,
  });
};

export async function POST<T>(
  url: string,
  body: Record<string, string | number | boolean | undefined>,
  headers?: Record<string, string>
): Promise<T> {
  if (!headers) {
    headers = {};
  }
  headers['Content-Type'] = 'application/json';
  const res = await customFetch(url, {
    body: JSON.stringify(body),
    method: 'post',
    headers,
  });
  if (res.status >= 400) {
    throw new Error('Bad response from server');
  }
  return res.json();
}

export async function GET<T>(url: string): Promise<T> {
  const headers = { 'Content-Type': 'application/json' };
  const res = await customFetch(url, {
    method: 'get',
    headers,
  });
  if (res.status >= 400) {
    throw new Error('Bad response from server');
  }
  return res.json();
}

export async function RAW_GET<T>(url: string): Promise<Response> {
  const headers = { 'Content-Type': 'application/json' };
  const res = await customFetch(url, {
    method: 'get',
    headers,
  });
  return res;
}

interface OrdersResponse {
  agreements: ServiceAgreementOrder[];
  plans: FlexPlanOrder[];
}

export async function fetchOrders(
  authUrl: string,
  projectId: string,
  projectType: ProjectType,
  apikey?: string
) {
  let statusCode = 0;
  try {
    const ordersURL = new URL(`/orders/${projectType}/${projectId}`, authUrl);
    if (apikey) {
      ordersURL.searchParams.append('apikey', apikey);
    }
    const res = await RAW_GET<OrdersResponse>(ordersURL.toString());
    statusCode = res.status;

    if (statusCode >= 400) {
      const resData = await res.text();
      return {
        valid: false,
        statusCode,
        resData,
      };
    }

    const data = await res.json();
    return {
      valid: true,
      statusCode,
      orders: data,
    };
  } catch (e: any) {
    return {
      valid: false,
      statusCode,
      error: e.message,
      stack: e.stack,
    };
  }
}
