// Copyright 2020-2022 SubQuery Pte Ltd authors & contributors
// SPDX-License-Identifier: Apache-2.0

import axios from 'axios';

type GasLevel = 'high' | 'low';

type EthGas = {
  gasLimit: string;
  gasPrice: string;
};

const gasOptions = {
  low: { gasLimit: '1000010', storageLimit: '7100' },
  high: { gasLimit: '1200000', storageLimit: '14000' },
};

export async function getEthGas(level: GasLevel = 'low'): Promise<EthGas> {
  try {
    const { gasLimit, storageLimit } = gasOptions[level];
    const body = {
      "jsonrpc": "2.0",
      "method": "eth_getEthGas",
      "params": [{ gasLimit, storageLimit }],
      "id": new Date()
    };

    const res = await axios.post('https://tc7-eth.aca-dev.network', body);
    return res.data.result as EthGas;
  } catch (e) {
    throw Error(`Failed to get gas config ${e}`);
  }
}
