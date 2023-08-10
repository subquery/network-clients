// Copyright 2020-2022 SubQuery Pte Ltd authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { BigNumber } from 'ethers';

export * from './ipfs';

export function min(a: BigNumber, b: BigNumber): BigNumber {
  return a.lte(b) ? a : b;
}

export const indexingProgress = ({
  currentHeight,
  targetHeight,
  startHeight = 0,
}: {
  currentHeight: number;
  targetHeight: number;
  startHeight: number;
}) => {
  if (targetHeight === startHeight) return 0;
  const rawProgress = (currentHeight - startHeight) / (targetHeight - startHeight);
  return isNaN(rawProgress) ? 0 : Math.min(Math.max(rawProgress, 0), 1);
};
