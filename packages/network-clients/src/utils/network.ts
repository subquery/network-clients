// Copyright 2020-2022 SubQuery Pte Ltd authors & contributors
// SPDX-License-Identifier: Apache-2.0

import axios from 'axios';

const evmHost = 'https://sq-airdrop-backend.thechaindata.com';

type GasLevel = 'high' | 'low';

type EthGas = {
  gasLimit: string;
  gasPrice: string;
};

export async function getEthGas(level: GasLevel = 'low'): Promise<EthGas> {
  try {
    const url = `${evmHost}/evm/gas?level=${level}`;
    const res = await axios.get(url);
    const result = await res.data;

    return result as EthGas;
  } catch (e) {
    throw Error('Failed to get gas config');
  }
}
