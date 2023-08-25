// Copyright 2020-2022 SubQuery Pte Ltd authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Operation } from '@apollo/client/core';
import { RetryLink } from '@apollo/client/link/retry';
import { Logger } from '../utils/logger';
import OrderManager from '../utils/orderManager';

export type RetryLinkOption = {
  orderManager: OrderManager;
  maxRetries?: number;
  logger?: Logger;
};

export const createRetryLink = ({ orderManager, maxRetries = 3, logger }: RetryLinkOption) =>
  new RetryLink({
    attempts: function (count: number, operation: Operation, error: any) {
      if (count <= maxRetries) {
        const { indexer } = operation.getContext();
        orderManager.updateIndexerScore(indexer, 'network');

        if (['empty url'].includes(error?.message) || operation.getContext().fallback) {
          return false;
        }
        logger?.debug(`retry: ${count}/${maxRetries}`);
        return true;
      }
      logger?.debug(`reach max retries: ${maxRetries}`);
      return false;
    },
  });
