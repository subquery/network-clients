// Copyright 2020-2022 SubQuery Pte Ltd authors & contributors
// SPDX-License-Identifier: Apache-2.0

import assert from 'assert';
import { isBigNumberish } from '@ethersproject/bignumber/lib/bignumber';
import { BigNumber, BigNumberish } from 'ethers';
import { CurrentEraValue, EraValue, JSONBigInt, RawEraValue } from '../models/eraValue';

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

export function isEraValue(eraValue: RawEraValue) {
  const { era, value, valueAfter } = eraValue ?? {};

  return !!(era && value && valueAfter);
}

export function parseRawEraValue(value: RawEraValue, curEra: number): CurrentEraValue {
  assert(isEraValue(value), `Value is not of type EraValue: ${JSON.stringify(value)}`);
  const eraValue = convertRawEraValue(value);

  if (curEra && curEra > eraValue.era) {
    return { current: eraValue.valueAfter, after: eraValue.valueAfter };
  }

  const sortedValueAfter = eraValue.value.eq(eraValue.valueAfter)
    ? eraValue.value
    : eraValue.valueAfter;

  return { current: eraValue.value, after: sortedValueAfter };
}
