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
  let min = 0;
  let max = 0;
  const medians = [];
  for (const { latency } of indexerLantency) {
    const m = getMedian(latency) || -1;
    medians.push(m);
    if (m > max) {
      max = m;
    } else if (m < min) {
      min = m;
    }
  }

  for (let i = 0; i < indexerLantency.length; i++) {
    let weight = scoreMap(medians[i], [min, max], [1, 5]);
    weight = Math.floor(weight * 10) / 10;
    await scoreStore.set(`${key}:${indexerLantency[i].indexer}_${deploymentId}`, weight);
    logger.debug(
      `updateLatencyScoreWeight: ${indexerLantency[i].indexer} ${deploymentId}(min:${min}, max:${max}) ${medians[i]}ms/b => ${weight}`
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
