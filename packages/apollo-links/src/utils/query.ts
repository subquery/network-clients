// Copyright 2020-2022 SubQuery Pte Ltd authors & contributors
// SPDX-License-Identifier: Apache-2.0

import axios from 'axios';

import { Agreement, ProjectType, Plan } from '../types';

export async function POST<T>(
  url: string,
  body: Record<string, string | number | boolean | undefined>
) {
  const headers = { 'Content-Type': 'application/json' };
  const res = await axios.post<T>(url, body, { headers });

  return res.data;
}

export async function GET<T>(url: string) {
  const headers = { 'Content-Type': 'application/json' };
  const res = await axios.get<T>(url, { headers });

  return res.data;
}

interface AgreementsResponse {
  agreements: Agreement[];
  plans: Plan[];
}

export async function fetchOrders(
  authUrl: string,
  projectId: string,
  projectType: ProjectType
): Promise<AgreementsResponse> {
  try {
    const agreementsURL = new URL(`/orders/${projectType}/${projectId}`, authUrl);
    const result = await GET<AgreementsResponse>(agreementsURL.toString());

    return result;
  } catch {
    return { agreements: [], plans: [] };
  }
}
