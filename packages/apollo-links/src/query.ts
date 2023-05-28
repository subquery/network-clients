// Copyright 2020-2022 SubQuery Pte Ltd authors & contributors
// SPDX-License-Identifier: Apache-2.0

import axios from 'axios';

import { Agreement } from "./types";

export async function POST<T>(url: string, body: Record<string, string | number | undefined>) {
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
}

export async function fetchAgreements(authUrl: string, projectChainId: string): Promise<Agreement[]> {
  const url = authUrl?.trim().replace(/\/+$/, '');
  const agreementsURL = `${url}/agreements/${projectChainId}`;
  const result = await GET<AgreementsResponse>(agreementsURL);

  const { agreements } = result;
  return agreements;
}
