// Copyright 2020-2022 SubQuery Pte Ltd authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { BigNumber } from 'ethers';
import axios from 'axios';

const evmHost = 'http://ec2-54-253-236-26.ap-southeast-2.compute.amazonaws.com:3001';

type Overrides = {
  gasLimit: BigNumber;
  gasPrice: BigNumber;
};

export async function getOverrides(): Promise<Overrides> {
  try {
    const url = `${evmHost}/overrides`;
    const res = await axios.get(url);
    const result = await res.data;

    return result as Overrides;
  } catch (e) {
    throw Error('Failed to get gas config');
  }
}
