// Copyright 2020-2022 SubQuery Pte Ltd authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { ethers } from 'ethers';

export class EraBasedValue {
  public era: number;
  public value: ethers.BigNumber;
  public valueAfter: ethers.BigNumber;
  private _delay: number;

  constructor(era: number, value: any, valueAfter: any, delay = 1) {
    this.era = era;
    this.value = ethers.BigNumber.from(value);
    this.valueAfter = ethers.BigNumber.from(valueAfter);
    this._delay = delay;
  }

  getValue(currentEra: number): ethers.BigNumber {
    return currentEra >= this.era + this._delay ? this.valueAfter : this.value;
  }
}
