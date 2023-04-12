// Copyright 2020-2022 SubQuery Pte Ltd authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { utils } from 'ethers';
import buffer from 'buffer';

const Buffer = buffer.Buffer;

export const CIDv0 = new RegExp(/Qm[1-9A-HJ-NP-Za-km-z]{44}/i);
export const CIDv1 = new RegExp(
  /Qm[1-9A-HJ-NP-Za-km-z]{44,}|b[A-Za-z2-7]{58,}|B[A-Z2-7]{58,}|z[1-9A-HJ-NP-Za-km-z]{48,}|F[0-9A-F]{50,}/i
);

export function isCID(cid: string): boolean {
  return CIDv0.test(cid) || CIDv1.test(cid);
}

export function cidToBytes32(cid: string): string {
  return `0x${Buffer.from(utils.base58.decode(cid)).slice(2).toString('hex')}`;
}

export function bytes32ToCid(bytes: string): string {
  // Add our default ipfs values for first 2 bytes:
  // function:0x12=sha2, size:0x20=256 bits
  // and cut off leading "0x"
  const hashHex = `1220${bytes.slice(2)}`;
  const hashBytes = Buffer.from(hashHex, 'hex');
  return utils.base58.encode(hashBytes);
}

export function concatU8A(a: Uint8Array, b: Uint8Array): Uint8Array {
  const res = new Uint8Array(a.length + b.length);
  res.set(a, 0);
  res.set(b, a.length);
  return res;
}
