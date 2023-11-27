/**
 * @jest-environment jsdom
 */
/* eslint-disable @typescript-eslint/require-await */
/* eslint-disable header/header */
// Copyright 2020-2023 SubQuery Pte Ltd authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { ContractSDK } from '@subql/contract-sdk';
import { SQNetworks, STABLE_COIN_ADDRESSES, STABLE_COIN_DECIMAL } from '@subql/network-config/src';
import { act, render, screen } from '@testing-library/react';
import { BigNumber } from 'ethers';
import { useEffect } from 'react';
import { useStableCoin } from '../packages/react-hooks/src';

test('useStableCoin should work', async () => {
  let calledTimes = 0;
  const contracts = {
    sqToken: {
      address: '0xed3bb617dbC128095f8b0A00B9498C2Ef5c3D04a',
    },
    priceOracle: {
      convertPrice: async (fromAddress, toAddress, decimal) => {
        calledTimes = 1;
        expect(fromAddress).toEqual(STABLE_COIN_ADDRESSES[SQNetworks.TESTNET]);
        expect(toAddress).toEqual('0xed3bb617dbC128095f8b0A00B9498C2Ef5c3D04a');
        expect(decimal).toEqual(10 ** STABLE_COIN_DECIMAL);

        return BigNumber.from('50000000000000000000');
      },
    },
  } as ContractSDK;

  function Setup() {
    const { rates, pricePreview, transPrice } = useStableCoin(contracts, SQNetworks.TESTNET);

    const testRates = () => {
      expect(rates.sqtToUsdc).toEqual(0.02);
      expect(rates.usdcToSqt).toEqual(50);

      expect(
        transPrice('0xed3bb617dbC128095f8b0A00B9498C2Ef5c3D04a', '50000000000000000000').sqtPrice
      ).toEqual('50');
      expect(
        transPrice('0xed3bb617dbC128095f8b0A00B9498C2Ef5c3D04a', '50000000000000000000').usdcPrice
      ).toEqual('1');

      expect(transPrice(STABLE_COIN_ADDRESSES[SQNetworks.TESTNET], '1000000').sqtPrice).toEqual(
        '50'
      );

      expect(transPrice(STABLE_COIN_ADDRESSES[SQNetworks.TESTNET], '1000000').usdcPrice).toEqual(
        '1.0'
      );

      expect(transPrice('', '50000000000000000000').sqtPrice).toEqual('0');
      expect(transPrice('0x000', '50000000000000000000').sqtPrice).toEqual('0');
      expect(
        transPrice('0x0000000000000000000000000000000000000000', '50000000000000000000').sqtPrice
      ).toEqual('0');
    };

    useEffect(() => {
      if (rates.sqtToUsdc !== 0) {
        testRates();
      }
    }, [rates]);

    return (
      <div>
        <span>
          {pricePreview('0xed3bb617dbC128095f8b0A00B9498C2Ef5c3D04a', '50000000000000000000')}
        </span>

        <span>{pricePreview(STABLE_COIN_ADDRESSES[SQNetworks.TESTNET], '1000000')}</span>
      </div>
    );
  }

  await act(async () => render(<Setup />));

  expect(screen.getByRole('sqtPrice').textContent?.includes('50'));
  expect(screen.getByRole('usdcPrice').textContent?.includes('1'));
  expect(calledTimes).toEqual(1);
});
