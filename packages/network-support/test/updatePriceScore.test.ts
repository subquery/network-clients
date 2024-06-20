// Copyright 2020-2024 SubQuery Pte Ltd authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { ScoreManager, BaseStorage } from '../src';

const mockLogger = {
  error: console.log,
  warn: console.log,
  info: console.log,
  debug: console.log,
};

class MockStorage extends BaseStorage {
  override set<T>(key: string, value: T): Promise<void> {
    console.log('set key:', key, 'value:', value);
    return Promise.resolve();
  }
}

const scoreManager = new ScoreManager({
  logger: mockLogger,
  projectId: 'xxx',
  scoreStore: new MockStorage(),
});

function test() {
  scoreManager.updatePriceScore([
    {
      id: 'id_1',
      indexer: 'indexer1',
      price: '445280000000000000000',
      url: '4',
      metadata: {
        subqueryHealthy: true,
        coordinatorVersion: '5',
        proxyVersion: '6',
        lastHeight: 7,
        targetHeight: 8,
      },
    },

    {
      id: 'id_2',
      indexer: 'indexer2',
      price: '445280000000002000000',
      url: '4',
      metadata: {
        subqueryHealthy: true,
        coordinatorVersion: '5',
        proxyVersion: '6',
        lastHeight: 7,
        targetHeight: 8,
      },
    },

    {
      id: 'id_3',
      indexer: 'indexer3',
      price: '445280003000000000000',
      url: '4',
      metadata: {
        subqueryHealthy: true,
        coordinatorVersion: '5',
        proxyVersion: '6',
        lastHeight: 7,
        targetHeight: 8,
      },
    },
  ]);
}

test();
