// Copyright 2020-2022 SubQuery Pte Ltd authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { ContractSDK } from '@subql/contract-sdk/sdk';
import type { Provider as AbstractProvider } from '@ethersproject/abstract-provider';
import { Signer, providers } from 'ethers';
import { BigNumber } from '@ethersproject/bignumber';

import { ContractClient } from './contractClient';
import { IPFSClient } from './ipfsClient';
import { GraphqlQueryClient } from './queryClient';

import { isCID, min } from '../utils';
import { DEFAULT_IPFS_URL, NETWORK_CONFIGS } from '@subql/network-config';
import assert from 'assert';
import { Indexer, IndexerMetadata } from '../models/indexer';
import { parseRawEraValue } from '../utils/parseEraValue';
import { SQNetworks } from '@subql/network-config';
import { ApolloClient, ApolloClientOptions, NormalizedCacheObject } from '@apollo/client/core';

type Provider = AbstractProvider | Signer;

export class NetworkClient {
  private _contractClient: ContractClient;
  private _ipfs: IPFSClient;

  constructor(private _sdk: ContractSDK, private _gqlClient: GraphqlQueryClient, ipfsUrl?: string) {
    this._ipfs = new IPFSClient(ipfsUrl ?? DEFAULT_IPFS_URL);
    this._contractClient = new ContractClient(_sdk);
  }

  public static create(
    network: SQNetworks,
    provider?: Provider,
    ipfsUrl?: string,
    options?: {
      queryClientOptions?:
        | ApolloClient<NormalizedCacheObject>
        | Partial<ApolloClientOptions<NormalizedCacheObject>>;
    }
  ) {
    const config = NETWORK_CONFIGS[network];
    assert(config, `config for ${network} is missing`);
    const sdk = ContractSDK.create(
      provider ?? new providers.StaticJsonRpcProvider(config.defaultEndpoint),
      config.sdkOptions
    );
    const gqlClient = new GraphqlQueryClient(config, options?.queryClientOptions);
    return new NetworkClient(sdk, gqlClient, ipfsUrl);
  }

  public async getIndexer(address: string): Promise<Indexer | undefined> {
    const currentEra = await this._sdk.eraManager.eraNumber();
    const leverageLimit = await this._sdk.staking.indexerLeverageLimit();

    const indexer = await this._gqlClient.getIndexer(address);
    const delegation = await this._gqlClient.getDelegation(address, address);

    if (!indexer || !delegation) return;
    const { controller, commission, totalStake, metadata: indexerMetadata } = indexer;
    const { amount: ownStake } = delegation;
    const metadata = await this._ipfs.getJSON<{
      name: string;
      url: string;
    }>(indexerMetadata);

    const sortedTotalStake = parseRawEraValue(totalStake, currentEra.toNumber());
    const sortedOwnStake = parseRawEraValue(ownStake, currentEra.toNumber());

    const delegated = {
      current: sortedTotalStake.current.sub(sortedOwnStake.current),
      after: sortedTotalStake.after.sub(sortedOwnStake.after),
    };

    const capacity = {
      current:
        sortedOwnStake.current.mul(leverageLimit).sub(sortedTotalStake.current) ||
        BigNumber.from(0),
      after:
        sortedOwnStake.after.mul(leverageLimit).sub(sortedTotalStake.after) || BigNumber.from(0),
    };

    // Jun 2022 commission-divUnit = perMil / 100 -> 10,000
    const COMMISSION_DIV_UNIT = 10000;
    const PERCENTAGE_UNIT = 100;
    const rawCommission = parseRawEraValue(commission, currentEra.toNumber() - 1);
    const sortedCommission = {
      current: rawCommission.current.toNumber() / (COMMISSION_DIV_UNIT * PERCENTAGE_UNIT),
      after: rawCommission.after.toNumber() / (COMMISSION_DIV_UNIT * PERCENTAGE_UNIT),
    };

    return {
      metadata,
      address,
      controller,
      commission: sortedCommission,
      totalStake: sortedTotalStake,
      ownStake: sortedOwnStake,
      delegated,
      capacity,
    };
  }

  public async getIndexerMetadata(address: string): Promise<IndexerMetadata | undefined> {
    const indexer = await this._gqlClient.getIndexer(address);
    if (!indexer) return;
    const { metadata: metadatCID } = indexer;
    const metadata = await this._ipfs.getJSON<{
      name: string;
      url: string;
    }>(metadatCID);

    return metadata;
  }

  public async maxUnstakeAmount(address: string, eraNumber?: number): Promise<BigNumber> {
    const leverageLimit = await this._sdk.staking.indexerLeverageLimit();
    const minStakingAmount = await this._sdk.indexerRegistry.minimumStakingAmount();

    const indexer = await this._gqlClient.getIndexer(address);
    const delegation = await this._gqlClient.getDelegation(address, address);

    if (!indexer || !delegation) return BigNumber.from(0);
    const { amount: ownStake } = delegation;
    const { totalStake } = indexer;

    let _eraNumber = eraNumber;
    if (!_eraNumber) {
      _eraNumber = await (await this._sdk.eraManager.eraNumber()).toNumber();
    }

    const sortedTotalStake = parseRawEraValue(totalStake, _eraNumber);
    const sortedOwnStake = parseRawEraValue(ownStake, _eraNumber);

    const totalStakingAmountAfter = BigNumber.from(sortedTotalStake?.after ?? 0);
    const ownStakeAfter = BigNumber.from(sortedOwnStake?.after ?? 0);

    if (leverageLimit.eq(1)) return ownStakeAfter.sub(minStakingAmount);

    const maxUnstakeAmount = min(
      ownStakeAfter.sub(minStakingAmount),
      ownStakeAfter.mul(leverageLimit).sub(totalStakingAmountAfter).div(leverageLimit.sub(1))
    );

    return maxUnstakeAmount.isNegative() ? BigNumber.from(0) : maxUnstakeAmount;
  }

  public async getDelegating(address: string): Promise<BigNumber> {
    const currentEra = await this._sdk.eraManager.eraNumber();
    const ownDelegation = await this._gqlClient.getDelegation(address, address);
    const delegator = await this._gqlClient.getDelegator(address);

    if (!delegator) return BigNumber.from(0);

    const eraNumber = currentEra.toNumber();
    const ownStake = ownDelegation?.amount;
    const { totalDelegations } = delegator;

    const sortedOwnStake = ownStake
      ? parseRawEraValue(ownStake, eraNumber).after
      : BigNumber.from(0);
    const sortedTotalDelegations = parseRawEraValue(totalDelegations, eraNumber).after;
    return sortedTotalDelegations.sub(sortedOwnStake);
  }

  public async projectMetadata(cid: string) {
    if (!isCID(cid)) throw new Error(`Invalid cid: ${cid}`);
    // get project metadata
    // cat project metadata
  }

  public setGqlClient(gqlClient: GraphqlQueryClient) {
    this._gqlClient = gqlClient;
  }
}
