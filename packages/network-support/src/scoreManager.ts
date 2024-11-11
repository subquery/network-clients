// Copyright 2020-2023 SubQuery Pte Ltd authors & contributors
// SPDX-License-Identifier: Apache-2.0

import BigNumber from 'bignumber.js';
import { NotifyFunc, Order, OrderType, ScoreWithDetail } from './types';
import { Logger, IStore, createStore } from './utils';
import {
  calculateBigIntPercentile,
  getBlockScoreWeight,
  getLatencyScoreWeight,
} from './utils/score';
import { Version } from './utils/version';

type Options = {
  logger: Logger;
  projectId: string;
  fallbackServiceUrl?: string;
  scoreStore?: IStore;
  notifyFunc?: NotifyFunc;
};

export enum ScoreType {
  NONE = 'None',
  GRAPHQL = 'Graphql',
  NETWORK = 'network',
  RPC = 'RPC',
  SUCCESS = 'success',
  FATAL = 'fatal',
  FATAL_INACTIVE = 'fatal_inactive',
}

const scoresDelta = {
  [ScoreType.NONE]: 0,
  [ScoreType.GRAPHQL]: -50,
  [ScoreType.NETWORK]: -30,
  [ScoreType.RPC]: -10,
  [ScoreType.SUCCESS]: 50,
  [ScoreType.FATAL]: -100,
  [ScoreType.FATAL_INACTIVE]: -100,
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
  private notifyFunc?: NotifyFunc;

  constructor(options: Options) {
    this.logger = options.logger;
    this.scoreStore = options.scoreStore ?? createStore({ ttl: 86_400_000 });
    this.minScore = options.fallbackServiceUrl ? 0 : 1;
    this.projectId = options.projectId;
    this.notifyFunc = options.notifyFunc;
  }

  private async getScore(runner: string): Promise<ScoreStoreType> {
    const key = this.getCacheKey(runner);
    const score = await this.scoreStore.get<ScoreStoreType>(key);
    return score ?? DEFAULT_SCORE;
  }

  getAvailabilityScore(score: ScoreStoreType): number {
    return Math.min(score.score + Math.floor((Date.now() - score.lastUpdate) / 600_000), 100);
  }

  async getAdjustedScore(
    runner: string,
    proxyVersion?: string,
    type?: OrderType
  ): Promise<ScoreWithDetail> {
    proxyVersion = proxyVersion || '';
    type = type || OrderType.flexPlan;
    const score = await this.getScore(runner);
    const base = this.getAvailabilityScore(score);
    const http2 = this.getHttpVersionWeight(score);
    const manual = await this.getManualScoreWeight(runner);
    const multiple = this.getMultipleAuthScoreWeight(proxyVersion);
    const block = await getBlockScoreWeight(this.scoreStore, runner, this.projectId);
    const latency = await getLatencyScoreWeight(this.scoreStore, runner, this.projectId);
    const price = await this.getPriceScoreWeight(runner);
    const ratelimitInfo = await this.getRatelimitWeightInfo(runner, type);
    const ratelimitWeight = ratelimitInfo.weight;

    this.logger?.debug(
      `getAdjustedScore: ${runner} ${
        this.projectId
      } base:${base} http2:${http2} manua:${manual} multiple:${multiple} block:${block} latency:${latency} price:${price} ratelimit:${JSON.stringify(
        ratelimitInfo
      )}`
    );
    return {
      score:
        Math.floor(
          base * http2 * manual * multiple * block * latency * price * ratelimitWeight * 10
        ) / 10,
      scoreDetail: {
        base,
        http2,
        manual,
        multiple,
        block,
        latency,
        price,
        ratelimit: ratelimitWeight,
        ratelimit_quota: ratelimitInfo.limit,
        ratelimit_remain: ratelimitInfo.limitRemain,
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

  async getPriceScoreWeight(runner: string) {
    const key = this.getPriceScoreKey();
    return (await this.scoreStore.get<number>(`${key}:${runner}_${this.projectId}`)) || 1;
  }

  async getRatelimitWeightInfo(runner: string, type: OrderType) {
    const key = this.getRatelimitKey();
    const now = Math.floor(Date.now() / 1000);
    const limitRes = (await this.scoreStore.get<string>(`${key}:${type}:${runner}:${now}`)) || '';

    let [limit, limitRemain] = limitRes.split('_').map((v) => Number(v) || 0);
    limit = Number(limit) || 0;
    limitRemain = Number(limitRemain) || 0;

    let weight = 1;
    if (limit) {
      weight = Math.pow(limitRemain / limit, 3);
    }
    return {
      weight,
      limit,
      limitRemain,
    };
  }

  async updateScore(runner: string, errorType: ScoreType, httpVersion?: number, extraLog?: any) {
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
    const before = score.score;
    this.logger?.debug(`updateScore before: ${runner} ${JSON.stringify(score)}`);

    const delta = scoresDelta[errorType];

    score.score = Math.min(Math.max(score.score + delta, this.minScore), 100);
    score.httpVersion = httpVersion || score.httpVersion;
    score.lastUpdate = now;
    score.lastFailed = errorType === ScoreType.SUCCESS ? 0 : now;

    this.logger?.debug(`updateScore after: ${runner} ${JSON.stringify(score)}`);

    this.scoreStore.set(key, score);
    extraLog = extraLog || {};

    if (score.score <= 1 && this.notifyFunc) {
      this.notifyFunc(`${this.projectId}_${runner}`, {
        text: `*Title*: score down from ${before} to ${score.score}\n*DeploymentId*: ${
          this.projectId
        }\n*Indexer*: ${runner}\n*Info*: ${errorType} - ${JSON.stringify(
          extraLog
        )}\n*Time*: ${new Date().toISOString()}`,
      });
    }

    this.logger?.info({
      type: 'updateScore',
      target: 'base',
      deploymentId: this.projectId,
      indexer: runner,
      deltaType: errorType,
      deltaValue: delta,
      from: before,
      to: score.score,
      direction: delta > 0 ? 'add' : 'minus',
      ...extraLog,
    });
  }

  async updateRatelimit(runner: string, limit: number, limitRemain: number, type: OrderType) {
    const key = this.getRatelimitKey();
    const now = Math.floor(Date.now() / 1000);
    await this.scoreStore.set(`${key}:${type}:${runner}:${now}`, `${limit}_${limitRemain}`, 1);
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

  async updatePriceScore(orders: Order[]) {
    const prices = orders.map((o) => BigNumber(o.price));
    const percenTile = calculateBigIntPercentile(prices, 95);
    const key = this.getPriceScoreKey();
    for (const o of orders) {
      const blockWeight = await getBlockScoreWeight(this.scoreStore, o.indexer, this.projectId);
      const latencyWeight = await getLatencyScoreWeight(this.scoreStore, o.indexer, this.projectId);

      let factor = 4;
      if (blockWeight >= 1 && latencyWeight >= 1) {
        factor = 9;
      }
      let weight = 1;
      const diff = percenTile.minus(new BigNumber(o.price));
      if (diff.gt(0)) {
        weight = 1 + diff.dividedBy(percenTile).times(factor).toNumber();
        weight = Number(weight.toFixed(2));
      }
      await this.scoreStore.set(`${key}:${o.indexer}_${this.projectId}`, weight);
      this.logger?.info({
        type: 'updateScore',
        target: 'priceWeight',
        deploymentId: this.projectId,
        indexer: o.indexer,
        price: o.price,
        to: weight,
        percenTile: percenTile.toString(),
        factor,
        diff: diff.toString(),
        blockWeight,
        latencyWeight,
      });
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

  private getPriceScoreKey(): string {
    return 'score:price';
  }

  private getRatelimitKey(): string {
    return `sample:ratelimit`;
  }
}
