// Copyright 2020-2022 SubQuery Pte Ltd authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { useCallback, useMemo, useState } from 'react';
import { useInterval } from 'ahooks';
import BigNumber from 'bignumber.js';
import dayjs from 'dayjs';
import { formatUnits } from 'ethers/lib/utils';
import { ContractSDK } from '@subql/contract-sdk/sdk';
import { SQContracts } from '@subql/contract-sdk/types';
import {
  SQNetworks,
  STABLE_COIN_ADDRESSES,
  STABLE_COIN_DECIMAL,
  STABLE_COIN_SYMBOLS,
  TOKEN_SYMBOLS,
} from '@subql/network-config';
import { toChecksumAddress } from 'ethereum-checksum-address';

import { formatEther, formatSQT } from './utils';
import { PriceOracle__factory } from '@subql/contract-sdk';

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
  const coinsAddressDict = useMemo<{ [key: string]: 'USDC' | 'SQT' }>(() => {
    if (!contracts?.sqToken)
      return {
        [toChecksumAddress(STABLE_COIN_ADDRESS)]: STABLE_TOKEN,
      };
    return {
      [toChecksumAddress(STABLE_COIN_ADDRESS)]: STABLE_TOKEN,
      [toChecksumAddress(contracts.sqToken.address)]: TOKEN,
    };
  }, [contracts]);

  const getPriceOracle = useCallback(async () => {
    if (!contracts) return;
    const decimal = Number.isInteger(STABLE_COIN_DECIMAL)
      ? STABLE_COIN_DECIMAL
      : STABLE_COIN_DECIMAL[network];
    const priceOracleAddress = await contracts.settings.getContractAddress(SQContracts.PriceOracle);
    const priceOracleFactory = await PriceOracle__factory.connect(
      priceOracleAddress,
      contracts.priceOracle.signer || contracts.priceOracle.provider
    );

    const assetPrice = await priceOracleFactory.convertPrice(
      toChecksumAddress(STABLE_COIN_ADDRESS),
      toChecksumAddress(contracts.sqToken.address),
      `${10 ** (decimal as number)}`
    );

    const oneUsdcToOneSqt = +formatEther(assetPrice.toString());

    setRates({
      usdcToSqt: BigNumber(oneUsdcToOneSqt).decimalPlaces(2).toNumber(),
      sqtToUsdc: BigNumber(1 / oneUsdcToOneSqt)
        .decimalPlaces(2)
        .toNumber(),
    });
  }, [contracts, network, STABLE_COIN_ADDRESS]);

  const transPrice = useCallback(
    (fromAddress: string | undefined, price: string | number | bigint) => {
      if (!contracts?.sqToken.address || !fromAddress)
        return {
          usdcPrice: '0',
          sqtPrice: '0',
        };

      try {
        const isSQT =
          toChecksumAddress(fromAddress) === toChecksumAddress(contracts?.sqToken.address);
        const isUSDC = toChecksumAddress(fromAddress) === toChecksumAddress(STABLE_COIN_ADDRESS);

        if (!isSQT && !isUSDC) {
          return {
            usdcPrice: '0',
            sqtPrice: '0',
          };
        }
        const decimal = Number.isInteger(STABLE_COIN_DECIMAL)
          ? STABLE_COIN_DECIMAL
          : STABLE_COIN_DECIMAL[network];
        const sortedPrice = isSQT
          ? formatSQT(price.toString())
          : formatUnits(price, decimal as number);

        const resultCalc = BigNumber(sortedPrice).multipliedBy(
          isSQT ? rates.sqtToUsdc : rates.usdcToSqt
        );
        return {
          usdcPrice: (isSQT ? resultCalc.toFixed() : sortedPrice).toString(),
          sqtPrice: (isSQT ? sortedPrice : resultCalc.toFixed()).toString(),
        };
      } catch (e) {
        console.error(e);
        return {
          usdcPrice: '0',
          sqtPrice: '0',
        };
      }
    },
    [contracts?.sqToken.address, rates.sqtToUsdc, rates.usdcToSqt, network]
  );

  const pricePreview = useCallback(
    (fromAddress: string | undefined, price: string | number | bigint) => {
      if (!contracts?.sqToken.address || !fromAddress)
        return <span>Error: address is invalid</span>;

      try {
        const sqtTokenAddress = toChecksumAddress(contracts?.sqToken.address);
        const prices = transPrice(toChecksumAddress(fromAddress), price);

        if (sqtTokenAddress === toChecksumAddress(fromAddress)) {
          return (
            <span
              style={{
                color: 'var(--gray-900, #1A202C)',
                fontSize: '14px',
                fontFamily: 'var(--sq-font-family)',
              }}
              role="sqtPrice"
              aria-label="sqtPrice"
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
            role="usdcPrice"
            aria-label="usdcPrice"
          >
            {prices.usdcPrice} {STABLE_TOKEN} <br></br>
            <span
              style={{
                color: 'var(--gray-600, #637381)',
                fontSize: '12px',
                fontFamily: 'var(--sq-font-family)',
              }}
              role="usdcToSqtPrice"
              aria-label="usdcToSqtPrice"
            >
              ={' '}
              {rates.sqtToUsdc === 0 && rates.usdcToSqt === 0 ? (
                '...'
              ) : (
                <>
                  {prices.sqtPrice} {TOKEN} | {now?.format('HH:mm:ss A')}
                </>
              )}
            </span>
          </span>
        );
      } catch (e) {
        console.error(e);
        return <span>Error: address is invalid</span>;
      }
    },
    [contracts?.sqToken.address, transPrice, now, STABLE_TOKEN, TOKEN, rates]
  );

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
