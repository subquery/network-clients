// Copyright 2020-2022 SubQuery Pte Ltd authors & contributors
// SPDX-License-Identifier: Apache-2.0

import fetch from 'cross-fetch';
import { ServiceAgreementOrder, FlexPlanOrder, ProjectType } from '../types';

export async function POST<T>(
  url: string,
  body: Record<string, string | number | boolean | undefined>
) {
  const headers = { 'Content-Type': 'application/json' };
  const res = await fetch(url, {
    body: JSON.stringify(body),
    method: 'post',
    headers,
  });
  if (res.status >= 400) {
    throw new Error('Bad response from server');
  }
  return res.json();
}

export async function GET<T>(url: string) {
  const headers = { 'Content-Type': 'application/json' };
  const res = await fetch(url, {
    method: 'get',
    headers,
  });
  if (res.status >= 400) {
    throw new Error('Bad response from server');
  }
  return res.json();
}

interface AgreementsResponse {
  agreements: ServiceAgreementOrder[];
  plans: FlexPlanOrder[];
}

export async function fetchOrders(
  authUrl: string,
  projectId: string,
  projectType: ProjectType
): Promise<AgreementsResponse> {
  try {
    const agreementsURL = new URL(`/orders/${projectType}/${projectId}`, authUrl);
    return await GET<AgreementsResponse>(agreementsURL.toString());
  } catch {
    return { agreements: [], plans: [] };
  }
}
