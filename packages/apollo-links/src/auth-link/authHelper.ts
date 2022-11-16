// Copyright 2020-2022 SubQuery Pte Ltd authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { signTypedData, SignTypedDataVersion } from '@metamask/eth-sig-util';
import jwt_decode from 'jwt-decode';
import buffer from 'buffer';
import axios from 'axios';

import { AuthMessage, buildTypedMessage, createAuthRequestBody } from './eip712';

const Buffer = buffer.Buffer;

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

export function isTokenExpired(token: string): boolean {
  if (!token) return true;

  const { exp } = jwt_decode(token) as { exp: number };
  const currentDate = new Date().getTime();

  return exp < currentDate;
}

export function signMessage(msg: AuthMessage, sk: string, chainId: number): string {
  if (!sk) return '';

  return signTypedData({
    privateKey: Buffer.from(sk, 'hex'),
    data: buildTypedMessage(msg, chainId),
    version: SignTypedDataVersion.V4,
  });
}

export async function requestAuthToken(
  authUrl: string, 
  msg: AuthMessage, 
  sk: string, 
  chainId: number
): Promise<string> {
  if (!sk) return '';

  const signature = signTypedData({
    privateKey: Buffer.from(sk, 'hex'),
    data: buildTypedMessage(msg, chainId),
    version: SignTypedDataVersion.V4,
  });

  const body = createAuthRequestBody(msg, signature, chainId);
  const res = await POST<{ token: string }>(authUrl, body);
  return res.token;
}
