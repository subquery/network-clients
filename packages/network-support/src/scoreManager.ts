// Copyright 2020-2023 SubQuery Pte Ltd authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { Logger, IStore, createStore } from './utils';
import { Version } from './utils/version';
import { IndexerHeight } from './types';

type Options = {
  logger: Logger;
  projectId: string;
  fallbackServiceUrl?: string;
  scoreStore?: IStore;
};

export enum ScoreType {
  GRAPHQL = 'Graphql',
  NETWORK = 'network',
  RPC = 'RPC',
  SUCCESS = 'success',
  FATAL = 'fatal',
}

const scoresDelta = {
  [ScoreType.GRAPHQL]: -50,
  [ScoreType.NETWORK]: -30,
  [ScoreType.RPC]: -10,
  [ScoreType.SUCCESS]: 50,
  [ScoreType.FATAL]: -100,
};

type ScoreStoreType = {
  score: number;
  httpVersion?: number;
  lastUpdate: number;
  lastFailed: number;
};

const WEIGHT = {
  http2: 1.5,
  multiple: 2,
};
const BLOCK_WEIGHT_OUTPUT_RANGE: [number, number] = [0.2, 1];

const DEFAULT_SCORE = {
  score: 100,
  httpVersion: 2,
  lastUpdate: 0,
  lastFailed: 0,
};

enum CurveType {
  LINEAR = 1,
  QUADRATIC = 2,
  CUBIC = 3,
}

export class ScoreManager {
  private logger: Logger;
  private scoreStore: IStore;
  private minScore: number;
  private projectId: string;

  constructor(options: Options) {
    this.logger = options.logger;
    this.scoreStore = options.scoreStore ?? createStore({ ttl: 86_400_000 });
    this.minScore = options.fallbackServiceUrl ? 0 : 1;
    this.projectId = options.projectId;
  }

  private async getScore(runner: string): Promise<ScoreStoreType> {
    const key = this.getCacheKey(runner);
    const score = await this.scoreStore.get<ScoreStoreType>(key);
    return score ?? DEFAULT_SCORE;
  }

  getAvailabilityScore(score: ScoreStoreType): number {
    return Math.min(score.score + Math.floor((Date.now() - score.lastUpdate) / 600_000), 100);
  }

  async getAdjustedScore(runner: string, proxyVersion?: string, deploymentId?: string) {
    proxyVersion = proxyVersion || '';
    deploymentId = deploymentId || '';
    const score = await this.getScore(runner);
    const base = this.getAvailabilityScore(score);
    const http2 = this.getHttpVersionWeight(score);
    const manual = await this.getManualScoreWeight(runner);
    const multiple = this.getMultipleAuthScoreWeight(proxyVersion);
    const block = await this.getBlockScoreWeight(runner, deploymentId);
    return base * http2 * manual * multiple * block;
  }

  async getManualScoreWeight(runner: string) {
    const key = this.getManualScoreKey();
    const manualScore = (await this.scoreStore.get<Record<string, number>>(key)) || {};
    return manualScore[runner] || 1;
  }

  getMultipleAuthScoreWeight(proxyVersion: string) {
    const higherVersion = proxyVersion ? Version.gte(proxyVersion, 'v2.1.0') : false;
    return higherVersion ? WEIGHT.multiple : 1;
  }

  async getBlockScoreWeight(runner: string, deploymentId: string) {
    const key = `${this.getBlockScoreKey()}:${runner}_${deploymentId}`;
    const blockWeight = await this.scoreStore.get<number>(key);
    return blockWeight || 1;
  }

  async updateScore(runner: string, errorType: ScoreType, httpVersion?: number) {
    if (!runner) {
      this.logger?.debug('updateScore: runner is empty');
      return;
    }

    const key = this.getCacheKey(runner);
    const score = await this.getScore(runner);

    if (errorType !== ScoreType.SUCCESS) {
      this.logger?.debug(`updateScore type: ${runner} ${errorType}`);
    }
    this.logger?.debug(`updateScore before: ${runner} ${JSON.stringify(score)}`);

    const delta = scoresDelta[errorType];

    score.score = Math.min(Math.max(score.score + delta, this.minScore), 100);
    score.httpVersion = httpVersion || score.httpVersion;
    score.lastUpdate = Date.now();
    score.lastFailed = errorType === ScoreType.SUCCESS ? 0 : Date.now();

    this.logger?.debug(`updateScore after: ${runner} ${JSON.stringify(score)}`);

    this.scoreStore.set(key, score);
  }

  async updateBlockScoreWeight(deploymentId: string, iheights: IndexerHeight[]) {
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
    const key = this.getBlockScoreKey();
    for (const { indexer, height } of iheights) {
      let weight = this.scoreMap(height, [min, max], BLOCK_WEIGHT_OUTPUT_RANGE, CurveType.LINEAR);
      weight = Math.floor(weight * 10) / 10;
      await this.scoreStore.set(`${key}:${indexer}_${deploymentId}`, weight);
    }
  }

  private getHttpVersionWeight(score: ScoreStoreType) {
    return score.httpVersion == 2 ? WEIGHT.http2 : 1;
  }

  private getCacheKey(runner: string): string {
    return `$query-score-${runner}-${this.projectId}`;
  }

  private getManualScoreKey(): string {
    return 'score:manual';
  }

  private getBlockScoreKey(): string {
    return 'score:block';
  }

  private scoreMap(
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
    }
    return outputNormalized * (outputMax - outputMin) + outputMin;
  }
}
