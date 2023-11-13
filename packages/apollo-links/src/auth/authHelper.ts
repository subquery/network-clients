// Copyright 2020-2022 SubQuery Pte Ltd authors & contributors
// SPDX-License-Identifier: Apache-2.0

import buffer from 'buffer';
import { signTypedData, SignTypedDataVersion } from '@metamask/eth-sig-util';
import { POST } from '@subql/network-support';

import { AuthMessage, buildTypedMessage, createAuthRequestBody } from './eip712';

const Buffer = buffer.Buffer;

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
  const signature = signMessage(msg, sk, chainId);
  if (!signature) return '';

  const body = createAuthRequestBody(msg, signature, chainId);
  const res = await POST<{ token: string }>(authUrl, body);
  return res.token;
}
