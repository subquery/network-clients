// Copyright 2020-2022 SubQuery Pte Ltd authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { ContractSDK } from '@subql/contract-sdk';
import type { Provider as AbstractProvider } from '@ethersproject/abstract-provider';
import { utils, constants, Signer, providers, ethers } from 'ethers';

import { ContractClient } from "./clients/contractClient";
import { IPFSClient } from "./clients/ipfsClient";
import { GraphqlQueryClient } from "./clients/queryClient";

import { bytes32ToCid, isCID } from './utils';
import { DEFAULT_IPFS_URL, NETWORK_CONFIGS, SQNetworks } from "./config";
import assert from "assert";
import { Indexer, IndexerMetadata } from "./models/indexer";
import { EraBasedValue } from "./models/common";

type Provider = AbstractProvider | Signer;

export class NetworkClient {
  private _contractClient: ContractClient;
  private _ipfs: IPFSClient;

  constructor(private _sdk: ContractSDK, private _gqlClient: GraphqlQueryClient, ipfsUrl?: string) {
    this._ipfs = new IPFSClient(ipfsUrl ?? DEFAULT_IPFS_URL);
    this._contractClient = new ContractClient(_sdk);
  }

  public static async create(network: SQNetworks, provider?: Provider, ipfsUrl?: string) {
    const config = NETWORK_CONFIGS[network];
    assert(config, `config for ${network} is missing`);
    console.time()
    const sdk = await ContractSDK.create(provider ?? new providers.StaticJsonRpcProvider(config.defaultEndpoint),
        config.sdkOptions);
    console.timeEnd()
    const gqlClient = new GraphqlQueryClient(config);
    return new NetworkClient(sdk, gqlClient, ipfsUrl);
  }

  public async getIndexer(address: string): Promise<Indexer> {
    const {controller, commission, totalStake, metadata: cid} = await this._gqlClient.getIndexer(address);
    const metadata = cid ? await this._ipfs.getJSON<IndexerMetadata>(cid) : undefined;

    return {
      metadata,
      address,
      controller,
      commission: new EraBasedValue(commission.era, commission.value.value, commission.valueAfter.value, 2),
      totalStake: new EraBasedValue(totalStake.era, totalStake.value.value, totalStake.valueAfter.value),
    }
  }

  // public async indexerMetadata(indexer: string): Promise<IndexerMetadata> {
  //   if (!utils.isAddress(indexer)) throw new Error(`Invalid address: ${indexer}`);
  //
  //   const metadataBytes32 = await this._sdk.indexerRegistry.metadataByIndexer(indexer);
  //   if (!metadataBytes32 || metadataBytes32 === constants.HashZero) {
  //     throw new Error('Empty indexer metadata');
  //   }
  //
  //   const cid = bytes32ToCid(metadataBytes32);
  //   const metadataStr = await this._ipfs.cat(cid);
  //   return JSON.parse(metadataStr);
  // }

  public async projectMetadata(cid: string) {
    if (!isCID(cid)) throw new Error(`Invalid cid: ${cid}`);
    // get project metadata
    // cat project metadata
  }
}
