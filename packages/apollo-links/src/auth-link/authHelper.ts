// Copyright 2020-2022 SubQuery Pte Ltd authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { signTypedData, SignTypedDataVersion } from '@metamask/eth-sig-util';
import jwt_decode from 'jwt-decode';
import buffer from 'buffer';

import { AuthMessage, buildTypedMessage, createAuthRequestBody } from './eip712';
import { POST } from '../query';

const Buffer = buffer.Buffer;

export function isTokenExpired(token: string): boolean {
  if (!token) return true;

  try {
    const { exp } = jwt_decode(token) as { exp: number };
    const currentDate = new Date().getTime();
    return exp < currentDate;
  } catch {
    console.log('Invalid token specified');
    return true;
  }
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
