// Copyright 2020-2022 SubQuery Pte Ltd authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { ContractSDK } from '@subql/contract-sdk';
import type { Provider as AbstractProvider } from '@ethersproject/abstract-provider';
import { Signer, providers } from 'ethers';
import { BigNumber } from '@ethersproject/bignumber';

import { ContractClient } from './contractClient';
import { IPFSClient } from './ipfsClient';
import { GraphqlQueryClient } from './queryClient';

import { isCID, min } from '../utils';
import { DEFAULT_IPFS_URL, NETWORK_CONFIGS, SQNetworks } from '../config';
import assert from 'assert';
import { Indexer, IndexerMetadata } from '../models/indexer';
import { EraBasedValue } from '../models/common';

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
    const sdk = await ContractSDK.create(
      provider ?? new providers.StaticJsonRpcProvider(config.defaultEndpoint),
      config.sdkOptions
    );
    const gqlClient = new GraphqlQueryClient(config);
    return new NetworkClient(sdk, gqlClient, ipfsUrl);
  }

  public async getIndexer(address: string): Promise<Indexer> {
    const {
      controller,
      commission,
      totalStake,
      metadata: cid,
    } = await this._gqlClient.getIndexer(address);
    const metadata = cid ? await this._ipfs.getJSON<IndexerMetadata>(cid) : undefined;

    return {
      metadata,
      address,
      controller,
      commission: new EraBasedValue(
        commission.era,
        commission.value.value,
        commission.valueAfter.value,
        2
      ),
      totalStake: new EraBasedValue(
        totalStake.era,
        totalStake.value.value,
        totalStake.valueAfter.value
      ),
    };
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

  public async maxUnstakeAmount(address: string): Promise<BigNumber> {
    const leverageLimit = await this._sdk.staking.indexerLeverageLimit();
    const minStakingAmount = await this._sdk.indexerRegistry.minimumStakingAmount();

    const { totalStake } = await this._gqlClient.getIndexer(address);
    const { amount } = await this._gqlClient.getDelegation(address, address);

    const totalStakingAmountAfter = BigNumber.from(totalStake?.after ?? 0);
    const ownStakeAfter = BigNumber.from(amount?.valueAfter?.value ?? 0);

    if (leverageLimit.eq(1)) return ownStakeAfter.sub(minStakingAmount);

    const maxUnstakeAmount = min(
      ownStakeAfter.sub(minStakingAmount),
      ownStakeAfter.mul(leverageLimit).sub(totalStakingAmountAfter).div(leverageLimit.sub(1))
    );

    return maxUnstakeAmount.isNegative() ? BigNumber.from(0) : maxUnstakeAmount;
  }

  public async projectMetadata(cid: string) {
    if (!isCID(cid)) throw new Error(`Invalid cid: ${cid}`);
    // get project metadata
    // cat project metadata
  }
}
