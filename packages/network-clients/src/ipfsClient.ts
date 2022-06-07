// Copyright 2020-2022 SubQuery Pte Ltd authors & contributors
// SPDX-License-Identifier: Apache-2.0

import buffer from 'buffer';
import { IPFSHTTPClient } from 'ipfs-http-client';
import { concatU8A, isCID } from './utils';

const Buffer = buffer.Buffer;

export class IPFSClient {

  private _client: IPFSHTTPClient;

  constructor(client: IPFSHTTPClient) {
    this._client = client
  }

  static create(client: IPFSHTTPClient): IPFSClient {
    return new IPFSClient(client);
  }

  async cat(cid: string, encoding: BufferEncoding = 'utf8'): Promise<string> {
    const results = this._client.cat(cid);
    
    let raw: Uint8Array | undefined;
    for await (const result of results) {
      raw = raw ? concatU8A(raw, result) : result;
    }

    if (!raw) {
      throw new Error(`Unable to fetch data from ipfs: ${cid}`);
    }
  
    return Buffer.from(raw).toString(encoding);
  }

  async add(entry: string): Promise<string> {
    const result = await this._client.add(entry, { pin: true });
    return result.cid.toV0().toString();
  }

  async image(url: string): Promise<string> {
    const cid = url.replace('ipfs://', '');
    if (!isCID(cid)) throw new Error(`Invalid cid: ${cid}`);

    const data = await this.cat(cid, 'base64');
    return `data:image/png;base64,${data}`;
  }
}
