// Copyright 2020-2022 SubQuery Pte Ltd authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { useMemo, useState } from 'react';
import { useInterval } from 'ahooks';
import BigNumber from 'bignumber.js';
import dayjs from 'dayjs';
import { formatUnits } from 'ethers/lib/utils';
import { ContractSDK } from '@subql/contract-sdk';
import {
  SQNetworks,
  STABLE_COIN_ADDRESSES,
  STABLE_COIN_DECIMAL,
  STABLE_COIN_SYMBOLS,
  TOKEN_SYMBOLS,
} from '@subql/network-config';
import { toChecksumAddress } from 'ethereum-checksum-address';

import { formatEther, formatSQT } from './utils';

export const useStableCoin = (contracts: ContractSDK | undefined, network: SQNetworks) => {
  const [rates, setRates] = useState({
    usdcToSqt: 0,
    sqtToUsdc: 0,
  });
  const { STABLE_COIN_ADDRESS, STABLE_TOKEN, TOKEN } = useMemo(
    () => ({
      STABLE_COIN_ADDRESS: STABLE_COIN_ADDRESSES[network],
      STABLE_TOKEN: STABLE_COIN_SYMBOLS[network],
      TOKEN: TOKEN_SYMBOLS[network],
    }),
    [network]
  );
  const [now, setNow] = useState<dayjs.Dayjs>();
  const coinsAddressDict = useMemo<{ [key: string]: 'USDC' | 'kSQT' | 'SQT' }>(() => {
    if (!contracts?.sqToken)
      return {
        [toChecksumAddress(STABLE_COIN_ADDRESS)]: STABLE_TOKEN,
      };
    return {
      [toChecksumAddress(STABLE_COIN_ADDRESS)]: STABLE_TOKEN,
      [toChecksumAddress(contracts.sqToken.address)]: TOKEN,
    };
  }, [contracts]);

  const getPriceOracle = async () => {
    if (!contracts) return;
    const assetPrice = await contracts.priceOracle.convertPrice(
      toChecksumAddress(STABLE_COIN_ADDRESS),
      toChecksumAddress(contracts.sqToken.address),
      10 ** STABLE_COIN_DECIMAL
    );

    const oneUsdcToOneSqt = +formatEther(assetPrice.toString());

    setRates({
      usdcToSqt: BigNumber(oneUsdcToOneSqt).decimalPlaces(2).toNumber(),
      sqtToUsdc: BigNumber(1 / oneUsdcToOneSqt)
        .decimalPlaces(2)
        .toNumber(),
    });
  };

  const transPrice = (fromAddress: string | undefined, price: string | number | bigint) => {
    const isSQT =
      toChecksumAddress(fromAddress || '') === toChecksumAddress(contracts?.sqToken.address || '');
    const sortedPrice = isSQT
      ? formatSQT(price.toString())
      : formatUnits(price, STABLE_COIN_DECIMAL);

    const resultCalc = BigNumber(sortedPrice).multipliedBy(
      isSQT ? rates.sqtToUsdc : rates.usdcToSqt
    );
    return {
      usdcPrice: (isSQT ? resultCalc.toFixed() : sortedPrice).toString(),
      sqtPrice: (isSQT ? sortedPrice : resultCalc.toFixed()).toString(),
    };
  };

  const pricePreview = (fromAddress: string | undefined, price: string | number | bigint) => {
    const sqtTokenAddress = toChecksumAddress(contracts?.sqToken.address || '');
    const prices = transPrice(toChecksumAddress(fromAddress || ''), price);

    if (sqtTokenAddress === toChecksumAddress(fromAddress || '')) {
      return (
        <span
          style={{
            color: 'var(--gray-900, #1A202C)',
            fontSize: '14px',
            fontFamily: 'var(--sq-font-family)',
          }}
        >
          {prices.sqtPrice} {TOKEN}
        </span>
      );
    }

    return (
      <span
        style={{
          color: 'var(--gray-900, #1A202C)',
          fontSize: '14px',
          fontFamily: 'var(--sq-font-family)',
        }}
      >
        {prices.usdcPrice} {STABLE_TOKEN} <br></br>
        <span
          style={{
            color: 'var(--gray-600, #637381)',
            fontSize: '12px',
            fontFamily: 'var(--sq-font-family)',
          }}
        >
          = {prices.sqtPrice} {TOKEN} | {now?.format('HH:mm:ss A')}
        </span>
      </span>
    );
  };

  useInterval(
    async () => {
      await getPriceOracle();
      setNow(dayjs());
    },
    30000,
    {
      immediate: true,
    }
  );

  return {
    coinsAddressDict,
    rates,
    fetchedTime: now,
    pricePreview,
    transPrice,
  };
};
