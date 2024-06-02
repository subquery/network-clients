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
  requestAt: number;
  responseAt: number;
};

export async function updateBlockScoreWeight(
  scoreStore: IStore,
  deploymentId: string,
  iheights: IndexerHeight[],
  logger?: any
) {
  iheights = iheights || [];
  let minHeight = iheights[0]?.height || 0;
  let maxHeight = iheights[0]?.height || 0;

  let maxHeightRequestAt = iheights[0]?.requestAt || 0;
  let minRequestAt = iheights[0]?.requestAt || 0;
  for (let i = 0; i < iheights.length; i++) {
    if (!iheights[i].height) continue;
    if (iheights[i].height > maxHeight) {
      maxHeight = iheights[i].height;
      maxHeightRequestAt = iheights[i].requestAt;
    } else if (iheights[i].height < minHeight) {
      minHeight = iheights[i].height;
    }
    if (iheights[i].requestAt < minRequestAt) {
      minRequestAt = iheights[i].requestAt;
    }
  }

  let flag = true;
  let minRate = 0;
  let maxRate = 0;
  for (const { height, requestAt } of iheights) {
    if (height && requestAt < maxHeightRequestAt) {
      const rate = -(maxHeight - height) / (maxHeightRequestAt - requestAt);
      if (flag) {
        minRate = rate;
        maxRate = rate;
        flag = false;
        continue;
      }
      if (rate < minRate) {
        minRate = rate;
      } else if (rate > maxRate) {
        maxRate = rate;
      }
    }
  }

  const rateSpan = maxRate - minRate;
  for (const { indexer, height, requestAt } of iheights) {
    let weight = 1;
    let rate = -1;
    let len = 1;
    let compensation = 1;
    const timeSpan = maxHeightRequestAt - requestAt || 1;
    if (timeSpan < 0) {
      weight = height < maxHeight ? BLOCK_WEIGHT_OUTPUT_RANGE[0] : BLOCK_WEIGHT_OUTPUT_RANGE[1];
    } else {
      weight = scoreMap(
        height,
        [minHeight, maxHeight],
        BLOCK_WEIGHT_OUTPUT_RANGE,
        CurveType.QUADRATIC
      );
      rate = -(maxHeight - height) / timeSpan;
      len = rate - minRate || 1;
      compensation = (len / rateSpan) * 0.9;
      weight = Math.min(weight + compensation, 0.9);
    }
    weight = Math.floor(weight * 10) / 10;
    logger?.debug(
      `${deploymentId}(maxH: ${maxHeight} minH: ${minHeight} maxHR: ${maxHeightRequestAt}) ${indexer} r: ${requestAt} timeSpan:${timeSpan} height: ${height} rate:${rate} len:${len} rateSpan:${rateSpan} compensation: ${compensation} weight:${weight}`
    );
    const key = getBlockScoreKey();
    await scoreStore.set(`${key}:${indexer}_${deploymentId}`, weight);
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
