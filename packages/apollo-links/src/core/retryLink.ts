// Copyright 2020-2022 SubQuery Pte Ltd authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Operation } from '@apollo/client/core';
import { RetryLink } from '@apollo/client/link/retry';
import { OrderManager } from '@subql/network-support';
import { Logger } from '../utils/logger';

export type RetryLinkOption = {
  orderManager: OrderManager;
  maxRetries?: number;
  logger?: Logger;
};

export const createRetryLink = ({ orderManager, maxRetries = 8, logger }: RetryLinkOption) =>
  new RetryLink({
    attempts: function (count: number, operation: Operation, error: any) {
      if (count <= maxRetries) {
        const { indexer } = operation.getContext();
        orderManager.updateScore(indexer, 'network');

        const isEmptyUrlError = error?.message?.includes('empty url');
        const isFallback = operation.getContext().fallback;
        if (!indexer && (isEmptyUrlError || isFallback)) {
          return false;
        }
        logger?.debug(`retry: ${count}/${maxRetries}`);
        return true;
      }
      logger?.debug(`reach max retries: ${maxRetries}`);
      return false;
    },
  });
