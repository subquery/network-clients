// Copyright 2020-2023 SubQuery Pte Ltd authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { IStore, createStore } from './utils/store';

type Options = {
  projectId: string;
  fallbackServiceUrl?: string;
  scoreStore?: IStore;
};

export enum ScoreType {
  GRAPHQL = 'Graphql',
  NETWORK = 'network',
  RPC = 'RPC',
}

const scoresDelta = {
  [ScoreType.GRAPHQL]: 50,
  [ScoreType.NETWORK]: 10,
  [ScoreType.RPC]: 10,
};

export class ScoreManager {
  private scoreStore: IStore;
  private minScore: number;
  private projectId: string;

  constructor(options: Options) {
    this.scoreStore = options.scoreStore ?? createStore({ ttl: 86_400_000 });
    this.minScore = options.fallbackServiceUrl ? 0 : 1;
    this.projectId = options.projectId;
  }

  public getScore(indexer: string) {
    const key = this.getCacheKey(indexer);
    let score = this.scoreStore.get<number>(key);
    if (score === undefined) {
      score = 100;
      this.scoreStore.set(key, score);
    }
    return score;
  }

  public updateScore(runner: string, errorType: ScoreType) {
    const key = this.getCacheKey(runner);
    const score = this.scoreStore.get<number>(key) ?? 100;

    const delta = scoresDelta[errorType];
    const newScore = Math.max(score - delta, 0);

    this.scoreStore.set(key, newScore);
  }

  private getCacheKey(indexer: string): string {
    return `$query-score-${indexer}-${this.projectId}`;
  }
}
