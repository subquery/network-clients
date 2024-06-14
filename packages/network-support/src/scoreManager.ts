// Copyright 2020-2023 SubQuery Pte Ltd authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { ScoreWithDetail } from './types';
import { Logger, IStore, createStore } from './utils';
import { getBlockScoreWeight, getLatencyScoreWeight } from './utils/score';
import { Version } from './utils/version';

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

const DEFAULT_SCORE = {
  score: 100,
  httpVersion: 2,
  lastUpdate: 0,
  lastFailed: 0,
};

const SCORE_PENALTY_PERIOD = 5_000; // 5s

const SAMPLE_SIZE = 20;
const SAMPLE_LIMIT = 1000;
const sampleCount: { [key: string]: number } = {};

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

  async getAdjustedScore(runner: string, proxyVersion?: string): Promise<ScoreWithDetail> {
    proxyVersion = proxyVersion || '';
    const score = await this.getScore(runner);
    const base = this.getAvailabilityScore(score);
    const http2 = this.getHttpVersionWeight(score);
    const manual = await this.getManualScoreWeight(runner);
    const multiple = this.getMultipleAuthScoreWeight(proxyVersion);
    const block = await getBlockScoreWeight(this.scoreStore, runner, this.projectId);
    const latency = await getLatencyScoreWeight(this.scoreStore, runner, this.projectId);
    this.logger?.debug(
      `getAdjustedScore: ${runner} ${this.projectId} base:${base} http2:${http2} manua:${manual} multiple:${multiple} block:${block} latency:${latency}`
    );
    return {
      score: Math.floor(base * http2 * manual * multiple * block * 10) / 10,
      scoreDetail: {
        base,
        http2,
        manual,
        multiple,
        block,
        latency,
      },
    };
    // return base * http2 * manual * multiple * block;
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

  async updateScore(runner: string, errorType: ScoreType, httpVersion?: number) {
    if (!runner) {
      this.logger?.debug('updateScore: runner is empty');
      return;
    }

    const key = this.getCacheKey(runner);
    const score = await this.getScore(runner);

    const now = Date.now();
    if (errorType !== ScoreType.SUCCESS) {
      if (this.minScore !== 1 && now - score.lastFailed < SCORE_PENALTY_PERIOD) {
        this.logger?.debug(
          `updateScore skip: ${runner} ${errorType} lastFailed:${score.lastFailed}`
        );
        return;
      }
      this.logger?.debug(`updateScore type: ${runner} ${errorType}`);
    }
    this.logger?.debug(`updateScore before: ${runner} ${JSON.stringify(score)}`);

    const delta = scoresDelta[errorType];

    score.score = Math.min(Math.max(score.score + delta, this.minScore), 100);
    score.httpVersion = httpVersion || score.httpVersion;
    score.lastUpdate = now;
    score.lastFailed = errorType === ScoreType.SUCCESS ? 0 : now;

    this.logger?.debug(`updateScore after: ${runner} ${JSON.stringify(score)}`);

    this.scoreStore.set(key, score);
  }

  async collectLatency(indexer: string, latency: number, size: number): Promise<void> {
    const isLocal = process.env.NODE_ENV === 'local';
    sampleCount[indexer] = sampleCount[indexer] || 0;
    sampleCount[indexer]++;
    if (isLocal || sampleCount[indexer] >= SAMPLE_LIMIT) {
      sampleCount[indexer] = 0;
      const key = `sample:latency:${indexer}_${this.projectId}`;
      const len = await this.scoreStore.lpush(key, `${size}_${latency}`);
      await this.scoreStore.expire(key, 60 * 60 * 24);
      if (len > SAMPLE_SIZE) {
        await this.scoreStore.ltrim(key, 0, SAMPLE_SIZE - 1);
      }
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
}
