// Copyright 2020-2024 SubQuery Pte Ltd authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { IStore } from './store';

const BLOCK_WEIGHT_OUTPUT_RANGE: [number, number] = [0.2, 1];

export enum CurveType {
  LINEAR = 1,
  QUADRATIC = 2,
  CUBIC = 3,
}

export type IndexerHeight = {
  indexer: string;
  height: number;
  rawHeight: number;
};

export async function updateBlockScoreWeight(
  scoreStore: IStore,
  deploymentId: string,
  heights: IndexerHeight[],
  logger?: any
) {
  let minHeight = Number.MAX_SAFE_INTEGER;
  let maxHeight = 0;
  for (const { height } of heights) {
    minHeight = height ? Math.min(minHeight, height) : minHeight;
    maxHeight = Math.max(maxHeight, height);
  }

  const key = getBlockScoreKey();
  for (const { indexer, height, rawHeight } of heights) {
    let weight = scoreMap(
      height,
      [minHeight, maxHeight],
      BLOCK_WEIGHT_OUTPUT_RANGE,
      CurveType.QUADRATIC
    );
    weight = Math.floor(weight * 10) / 10;
    await scoreStore.set(`${key}:${indexer}_${deploymentId}`, weight);
    logger?.debug(
      `${deploymentId}(minH:${minHeight}, maxH:${maxHeight}) set ${indexer}(rawHeight:${rawHeight}) height:${height} to ${weight}`
    );
  }
}

export async function getBlockScoreWeight(
  scoreStore: IStore,
  runner: string,
  deploymentId: string
) {
  const key = `${getBlockScoreKey()}:${runner}_${deploymentId}`;
  const blockWeight = await scoreStore.get<number>(key);
  return blockWeight || 1;
}

function getBlockScoreKey(): string {
  return 'score:block';
}

export function avg(arr: number[]) {
  return arr.length ? arr.reduce((a, b) => a + b, 0) / arr.length : 0;
}

export function scoreMap(
  input: number,
  inputRange: [number, number],
  outputRange: [number, number],
  curve: CurveType = CurveType.LINEAR
) {
  const [inputMin, inputMax] = inputRange;
  const [outputMin, outputMax] = outputRange;
  if (input < inputMin) {
    return outputMin;
  }
  if (input > inputMax) {
    return outputMax;
  }

  const inputNormalized =
    inputMax - inputMin === 0 ? 1 : (input - inputMin) / (inputMax - inputMin);
  let outputNormalized = 0;
  switch (curve) {
    case CurveType.LINEAR:
      outputNormalized = inputNormalized;
      break;
    case CurveType.QUADRATIC:
      outputNormalized = Math.pow(inputNormalized, 2);
      break;
    case CurveType.CUBIC:
      outputNormalized = Math.pow(inputNormalized, 3);
      break;
    default:
  }
  return outputNormalized * (outputMax - outputMin) + outputMin;
}
