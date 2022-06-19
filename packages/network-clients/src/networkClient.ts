import { ContractSDK } from '@subql/contract-sdk';
import { IPFSHTTPClient } from 'ipfs-http-client';
import { utils } from 'ethers';

import { ContractClient } from "./contractClient";
import { IPFSClient } from "./ipfsClient";
import { bytes32ToCid, isCID } from './utils';
import { IndexerMetadata } from './types';

export class NetworkClient {
  private readonly _contractClient: ContractClient;
  private readonly _ipfs: IPFSClient;
  private readonly _sdk: ContractSDK;

  constructor(sdk: ContractSDK, ipfs: IPFSHTTPClient) {
    this._contractClient = ContractClient.create(sdk);
    this._ipfs = IPFSClient.create(ipfs);
    this._sdk = sdk;
  }

  public static create(sdk: ContractSDK, ipfs: IPFSHTTPClient) {
    return new NetworkClient(sdk, ipfs);
  }

  public async indexerMetadata(indexer: string): Promise<IndexerMetadata> {
    if (!utils.isAddress(indexer)) throw new Error(`Invalid address: ${indexer}`);

    const metadataBytes32 = await this._sdk.indexerRegistry.metadataByIndexer(indexer);
    const cid = bytes32ToCid(metadataBytes32);

    const metadataStr = await this._ipfs.cat(cid);
    return JSON.parse(metadataStr);
  }

  public async projectMetadata(cid: string) {
    if (!isCID(cid)) throw new Error(`Invalid cid: ${cid}`);
    // get project metadata
    // cat project metadata
  }
}
