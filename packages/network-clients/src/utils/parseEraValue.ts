// Copyright 2020-2022 SubQuery Pte Ltd authors & contributors
// SPDX-License-Identifier: Apache-2.0

import assert from 'assert';
import { BigNumber, BigNumberish } from 'ethers';
import { isBigNumberish } from '@ethersproject/bignumber/lib/bignumber';

type JSONBigInt = {
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

export type CurrentEraValue<T = BigNumber> = { current: BigNumber; after: BigNumber };

function jsonBigIntToBigInt(value: JSONBigInt | BigNumberish): BigNumber {
  if (isBigNumberish(value)) {
    return BigNumber.from(value);
  }
  assert(value.type === 'bigint', 'Value is not a JSONBigInt');

  return BigNumber.from(value.value);
}

export function convertRawEraValue(raw: RawEraValue | EraValue): EraValue<BigNumber> {
  return {
    ...raw,
    value: jsonBigIntToBigInt(raw.value),
    valueAfter: jsonBigIntToBigInt(raw.valueAfter),
  };
}

export function isEraValue<T = BigNumber>(value: unknown): value is EraValue<T> {
  return (
    !!value &&
    (value as EraValue).era !== undefined &&
    (value as EraValue).era !== null &&
    !!(value as EraValue).value &&
    !!(value as EraValue).valueAfter
  );
}

export function parseRawEraValue(value: unknown, curEra: number): CurrentEraValue {
  assert(isEraValue(value), `Value is not of type EraValue: ${JSON.stringify(value)}`);
  const eraValue = convertRawEraValue(value);

  if (curEra && curEra > eraValue.era) {
    return { current: eraValue.valueAfter, after: eraValue.valueAfter };
  }

  const after = eraValue.value.eq(eraValue.valueAfter) ? eraValue.value : eraValue.valueAfter;

  return { current: eraValue.value, after };
}
