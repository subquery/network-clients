// Copyright 2020-2022 SubQuery Pte Ltd authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { BigNumber } from 'ethers';
import fetch from 'node-fetch';

const evmHost = 'http://ec2-54-253-236-26.ap-southeast-2.compute.amazonaws.com:3001';

type Overrides = {
  gasLimit: BigNumber;
  gasPrice: BigNumber;
};

export async function getOverrides(): Promise<Overrides> {
  try {
    const res = await fetch(`${evmHost}/overrides`);
    const result = await res.json();

    return result as Overrides;
  } catch (e) {
    throw Error('Failed to get gas config');
  }
}
