// Copyright 2020-2022 SubQuery Pte Ltd authors & contributors
// SPDX-License-Identifier: Apache-2.0

import axios from 'axios';

import { Agreement } from "./types";
import { AGREEMENT_LIST, agreementCache, agreementListCache, getNextAgreement } from './cache';

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
  deploymentId: string;
  networkChainId: number;
}

export async function fetchAgreements(authUrl: string, projectChainId: string): Promise<AgreementsResponse> {
  const url = authUrl?.trim().replace(/\/+$/, '');
  const agreementsURL = `${url}/agreements/${projectChainId}`;
  const result = await GET<AgreementsResponse>(agreementsURL);

  // update agreeements cache
  const { agreements } = result;

  const sortedAgreements = agreements.sort((a, b) => Number(a.id) - Number(b.id));
  agreementListCache.set(AGREEMENT_LIST, sortedAgreements);

  return result;
}

export async function getInitialIndexer(authUrl: string, projectChainId: string): Promise<string> {
  try {
    await fetchAgreements(authUrl, projectChainId);
    const agreement = getNextAgreement();
    
    return agreement?.indexer ?? '';
  } catch {
    return '';
  }
}