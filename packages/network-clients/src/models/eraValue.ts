// Copyright 2020-2022 SubQuery Pte Ltd authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { BigNumber } from 'ethers';

export type JSONBigInt = {
  type: 'bigint';
  value: string; // Hex encoded string
};
// Subql project type
export type RawEraValue = EraValue<JSONBigInt>;

export interface EraValue<T = BigNumber> {
  era: number;
  value: T;
  valueAfter: T;
}

export type CurrentEraValue<T = BigNumber> = { current: T; after: T };
