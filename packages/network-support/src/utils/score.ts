// Copyright 2020-2024 SubQuery Pte Ltd authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { IStore } from './store';

const BLOCK_WEIGHT_OUTPUT_RANGE: [number, number] = [0.2, 1];
const LATENCY_WEIGHT_THRESHOLD: [threshold: number, weight: number][] = [
  [2_000, 0.2], // >= 2000ms: 0.2
  [1_000, 0.5], //  [1000ms, 2000ms): 0.5
  [500, 1], //  [500ms, 1000ms): 1
  [300, 3], //  [300ms, 500ms): 3
  [0, 6], //  [0ms, 300ms): 6
];

export enum CurveType {
  LINEAR = 1,
  QUADRATIC = 2,
  CUBIC = 3,
}

export type IndexerHeight = {
  indexer: string;
  height: number;
  latency: number[];
};

export async function updateBlockScoreWeight(
  scoreStore: IStore,
  deploymentId: string,
  iheights: IndexerHeight[]
) {
  iheights = iheights || [];
  let min = iheights[0]?.height || 0;
  let max = iheights[0]?.height || 0;
  for (let i = 0; i < iheights.length; i++) {
    if (iheights[i].height > max) {
      max = iheights[i].height;
    } else if (iheights[i].height < min) {
      min = iheights[i].height;
    }
  }
  const key = getBlockScoreKey();
  for (const { indexer, height } of iheights) {
    let weight = scoreMap(height, [min, max], BLOCK_WEIGHT_OUTPUT_RANGE, CurveType.LINEAR);
    weight = Math.floor(weight * 10) / 10;
    await scoreStore.set(`${key}:${indexer}_${deploymentId}`, weight);
  }
}

export async function updateLatencyScoreWeight(
  scoreStore: IStore,
  deploymentId: string,
  indexerLantency: IndexerHeight[],
  logger?: any
) {
  const key = getLatencyScoreKey();
  let min = Number.MAX_SAFE_INTEGER;
  let max = 0;
  const medians = [];
  for (const { latency } of indexerLantency) {
    const m = getMedian(latency) || 0;
    medians.push(m);
    if (m > max) {
      max = m;
    } else if (m && m < min) {
      min = m;
    }
  }

  for (let i = 0; i < indexerLantency.length; i++) {
    let weight = 1;
    for (const [threshold, wt] of LATENCY_WEIGHT_THRESHOLD) {
      if (medians[i] && medians[i] >= threshold) {
        weight = wt;
        break;
      }
    }
    await scoreStore.set(`${key}:${indexerLantency[i].indexer}_${deploymentId}`, weight);
    logger?.debug(
      `updateLatencyScoreWeight: ${indexerLantency[i].indexer} ${deploymentId}(min:${min}, max:${max}) ${medians[i]} => ${weight}`
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

export async function getLatencyScoreWeight(
  scoreStore: IStore,
  runner: string,
  deploymentId: string
) {
  const key = `${getLatencyScoreKey()}:${runner}_${deploymentId}`;
  const latencyWeight = await scoreStore.get<number>(key);
  return latencyWeight || 1;
}

function getMedian(arr: number[]) {
  arr = arr || [];
  const mid = Math.floor(arr.length / 2);
  const nums = [...arr].sort((a, b) => a - b);
  return arr.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;
}

function getBlockScoreKey(): string {
  return 'score:block';
}

function getLatencyScoreKey(): string {
  return 'score:latency';
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
