// Copyright 2020-2022 SubQuery Pte Ltd authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { BigNumber } from 'ethers';
import axios from 'axios';

const evmHost = 'http://ec2-54-253-236-26.ap-southeast-2.compute.amazonaws.com:7001';

type GasLevel = 'high' | 'low';

type Overrides = {
  gasLimit: BigNumber;
  gasPrice: BigNumber;
};

export async function getEthGas(level: GasLevel = 'low'): Promise<Overrides> {
  try {
    const url = `${evmHost}/eth-gas?level=${level}`;
    const res = await axios.get(url);
    const result = await res.data;

    return result as Overrides;
  } catch (e) {
    throw Error('Failed to get gas config');
  }
}
