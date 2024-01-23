// Copyright 2020-2022 SubQuery Pte Ltd authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { ContractSDK } from '@subql/contract-sdk/sdk';
import { BigNumber, utils } from 'ethers';

export class ContractClient {
  private readonly _sdk: ContractSDK;

  constructor(sdk: ContractSDK) {
    this._sdk = sdk;
  }

  public static create(sdk: ContractSDK) {
    return new ContractClient(sdk);
  }

  get perMill(): BigNumber {
    return BigNumber.from(1e6);
  }

  get perBill(): BigNumber {
    return BigNumber.from(1e9);
  }

  get perTrill(): BigNumber {
    return BigNumber.from(1e12);
  }

  public async latestRewardCollected(indexer: string): Promise<boolean> {
    if (!utils.isAddress(indexer)) throw new Error(`Invalid address: ${indexer}`);

    const [currentEra, { lastClaimEra }, lastSettledEra] = await Promise.all([
      this._sdk.eraManager.eraNumber(),
      this._sdk.rewardsDistributor.getRewardInfo(indexer),
      this._sdk.rewardsStaking.getLastSettledEra(indexer),
    ]);

    return currentEra.eq(lastClaimEra.add(1)) && lastSettledEra.lte(lastClaimEra);
  }

  public async cancelOfferUnspentBalance(offerId: number): Promise<BigNumber> {
    const offer = await this._sdk.purchaseOfferMarket.offers(offerId);
    if (offer.deposit.eq(0)) throw new Error(`Invalid offerId: ${offerId}`);

    const unspentValue = offer.deposit.mul(offer.limit - offer.numAcceptedContracts);
    return unspentValue;
  }

  public async cancelOfferPenaltyFee(offerId: number): Promise<BigNumber> {
    const offer = await this._sdk.purchaseOfferMarket.offers(offerId);
    if (offer.deposit.eq(0)) throw new Error(`Invalid offerId: ${offerId}`);

    const penaltyRate = await this._sdk.purchaseOfferMarket.penaltyRate();
    const unspentValue = await this.cancelOfferUnspentBalance(offerId);
    const penaltyFee = penaltyRate.mul(unspentValue).div(this.perMill);

    return penaltyFee;
  }

  public async canStartNewUnbonding(account: string): Promise<boolean> {
    const staking = this._sdk.staking;
    const [maxUnbondingRequest, unbondingLength, withdrawLength] = await Promise.all([
      staking.maxUnbondingRequest(),
      staking.unbondingLength(account),
      staking.withdrawnLength(account),
    ]);

    return unbondingLength.sub(withdrawLength).lt(maxUnbondingRequest.sub(1));
  }
}
