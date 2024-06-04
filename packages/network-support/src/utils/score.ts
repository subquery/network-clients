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
};

export async function updateBlockScoreWeight(
  scoreStore: IStore,
  deploymentId: string,
  heights: IndexerHeight[][],
  logger?: any
) {
  const len = heights.length;

  const avgs = [];
  let effectiveAvgIndx = -1;
  let minHeight = Number.MAX_SAFE_INTEGER;
  let maxHeight = 0;
  for (let i = 0; i < len; i++) {
    const h = heights[i];
    let sum = 0;
    for (const { height } of h) {
      sum += height;
      minHeight = Math.min(minHeight, height);
      maxHeight = Math.max(maxHeight, height);
    }
    const avg = Math.floor(sum / h.length);
    avgs.push(avg);
    effectiveAvgIndx = avg ? i : effectiveAvgIndx;
  }

  const key = getBlockScoreKey();
  for (let i = 0; i < len; i++) {
    for (const { indexer, height } of heights[i]) {
      const delta = i < effectiveAvgIndx ? Math.abs(avgs[i] - avgs[effectiveAvgIndx]) : 0;
      let weight = scoreMap(
        height + delta,
        [minHeight, maxHeight],
        BLOCK_WEIGHT_OUTPUT_RANGE,
        CurveType.QUADRATIC
      );
      weight = Math.floor(weight * 10) / 10;
      await scoreStore.set(`${key}:${indexer}_${deploymentId}`, weight);
      logger?.debug(
        `${deploymentId}(minH:${minHeight}, maxH:${maxHeight}, batch:${len}, curBatch:${
          i + 1
        } effectiveAvgIndx:${effectiveAvgIndx}, effectiveAvg:${
          avgs[effectiveAvgIndx]
        }) set ${indexer} height:${height} delta:${delta} to ${weight}`
      );
    }
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
