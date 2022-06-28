// Copyright 2020-2022 SubQuery Pte Ltd authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { ContractSDK, ClosedServiceAgreement__factory } from '@subql/contract-sdk';
import { BigNumber, Contract, utils } from 'ethers';

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

    const [currentEra, lastClaimedEra, lastSettledEra] = await Promise.all([
      this._sdk.eraManager.eraNumber(),
      this._sdk.rewardsDistributor.getLastClaimEra(indexer),
      this._sdk.rewardsDistributor.getLastSettledEra(indexer),
    ]);

    return currentEra.eq(lastClaimedEra.add(1)) && lastSettledEra.lte(lastClaimedEra);
  }

  public async dailyRewardCap(indexer: string): Promise<BigNumber> {
    if (!utils.isAddress(indexer)) throw new Error(`Invalid address: ${indexer}`);

    const threshold = await this._sdk.serviceAgreementRegistry.threshold();
    const totalStakingAmount = await this._sdk.staking.getTotalStakingAmount(indexer);

    if (!threshold || threshold.eq(0)) return BigNumber.from(0);

    return totalStakingAmount.mul(this.perMill).div(threshold);
  }

  public async dailyRewardCapcity(indexer: string): Promise<BigNumber> {
    if (!utils.isAddress(indexer)) throw new Error(`Invalid address: ${indexer}`);

    const dailyRewardCap = await this.dailyRewardCap(indexer);
    const sumDailyReward = await this._sdk.serviceAgreementRegistry.sumDailyReward(indexer);

    return dailyRewardCap.gt(sumDailyReward) ? dailyRewardCap.sub(sumDailyReward) : BigNumber.from(0);
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

  public async closedSAContract(address: string): Promise<Contract | undefined> {
    if (!utils.isAddress(address)) throw new Error(`Invalid address: ${address}`);

    const agreementContract = await this._sdk.initContract(
      ClosedServiceAgreement__factory,
      address
    );
    return agreementContract;
  }
}
