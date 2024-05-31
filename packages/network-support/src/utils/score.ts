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
  const key = getBlockScoreKey();
  const span = Math.abs(maxHeightRequestAt - minRequestAt);
  for (const { indexer, height, requestAt } of iheights) {
    let compensation = 1;
    const timeDiff = maxHeightRequestAt - requestAt;
    if (height && span) {
      compensation = scoreMap(Math.abs(timeDiff) / span, [0, 1], [1, maxHeight / height]);
    }
    const adjustedHeight = Math.floor(height * compensation);
    let weight = scoreMap(
      adjustedHeight,
      [minHeight, maxHeight],
      BLOCK_WEIGHT_OUTPUT_RANGE,
      CurveType.QUADRATIC
    );
    weight = Math.floor(weight * 10) / 10;
    logger?.debug(
      `${deploymentId}(maxH: ${maxHeight} minH: ${minHeight} maxHR: ${maxHeightRequestAt} minR: ${minRequestAt} span:${span} ) ${indexer} r: ${requestAt} timeDiff:${timeDiff} height: ${height} compensation: ${compensation} adjustedHeight:${adjustedHeight} weight:${weight}`
    );
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
