// Copyright 2020-2023 SubQuery Pte Ltd authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { Logger } from './utils';
import { IStore, createStore } from './utils/store';

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
}

const scoresDelta = {
  [ScoreType.GRAPHQL]: -50,
  [ScoreType.NETWORK]: -30,
  [ScoreType.RPC]: -10,
  [ScoreType.SUCCESS]: 50,
};

type ScoreStoreType = {
  score: number;
  lastUpdate: number;
  lastFailed: number;
};

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

  async getScore(runner: string) {
    const key = this.getCacheKey(runner);
    let score = await this.scoreStore.get<number | ScoreStoreType>(key);

    if (score === undefined) {
      score = {
        score: 100,
        lastUpdate: 0,
        lastFailed: 0,
      };
      this.scoreStore.set(key, score);
    }

    if (typeof score === 'number') {
      return Math.max(score, this.minScore);
    }

    return this.calculatedScore(score);
  }

  private calculatedScore(score: ScoreStoreType) {
    // if (score.lastFailed) {
    //   return Math.min(
    //     score.score + Math.floor((Date.now() - score.lastFailed) / (600_000)),
    //     100
    //   );
    // }

    // if (score.lastUpdate && Date.now() - score.lastUpdate < 5 * 1000) {
    //   return Math.max(score.score - 50, this.minScore);
    // }

    // return score.score;

    return Math.min(score.score + Math.floor((Date.now() - score.lastUpdate) / 600_000), 100);
  }

  async updateScore(runner: string, errorType: ScoreType) {
    if (!runner) {
      this.logger?.debug('updateScore: runner is empty');
      return;
    }

    const key = this.getCacheKey(runner);
    let score = (await this.scoreStore.get<number | ScoreStoreType>(key)) ?? 100;

    if (typeof score === 'number') {
      score = {
        score: score,
        lastUpdate: 0,
        lastFailed: 0,
      };
    }

    this.logger?.debug(`updateScore type: ${runner} ${errorType}`);
    this.logger?.debug(`updateScore before: ${runner} ${JSON.stringify(score)}`);

    const delta = scoresDelta[errorType];

    score = {
      score: Math.min(Math.max(score.score + delta, this.minScore), 100),
      lastUpdate: Date.now(),
      lastFailed: errorType === ScoreType.SUCCESS ? 0 : Date.now(),
    };

    this.logger?.debug(`updateScore after: ${runner} ${JSON.stringify(score)}`);

    this.scoreStore.set(key, score);
  }

  private getCacheKey(runner: string): string {
    return `$query-score-${runner}-${this.projectId}`;
  }
}
