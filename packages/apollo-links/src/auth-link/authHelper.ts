// Copyright 2020-2022 SubQuery Pte Ltd authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { signTypedData, SignTypedDataVersion } from '@metamask/eth-sig-util';
import jwt_decode from 'jwt-decode';
import buffer from 'buffer';
import axios from 'axios';

import { AuthMessage, buildTypedMessage, createAuthRequestBody } from './eip712';

const Buffer = buffer.Buffer;

export function isTokenExpired(token: string): boolean {
  if (!token) return true;

  const { exp } = jwt_decode(token) as { exp: number };
  const currentDate = new Date().getTime();

  return exp < currentDate;
}

export function signMessage(msg: AuthMessage, pk: string, chainId: number): string {
  if (!pk) return '';

  return signTypedData({
    privateKey: Buffer.from(pk, 'hex'),
    data: buildTypedMessage(msg, chainId),
    version: SignTypedDataVersion.V4,
  });
}

export async function requestAuthToken(
  authUrl: string, 
  msg: AuthMessage, 
  pk: string, 
  chainId: number
): Promise<string> {
  if (!pk) return '';

  const signature = signTypedData({
    privateKey: Buffer.from(pk, 'hex'),
    data: buildTypedMessage(msg, chainId),
    version: SignTypedDataVersion.V4,
  });

  const body = createAuthRequestBody(msg, signature, chainId);

  const headers = { 'Content-Type': 'application/json' };
  const res = await axios.post(authUrl, body, { headers });
  return res.data.token;
}
