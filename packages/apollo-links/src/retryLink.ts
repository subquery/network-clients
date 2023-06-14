// Copyright 2020-2022 SubQuery Pte Ltd authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { RetryLink } from "@apollo/client/link/retry";
import { Logger } from "./logger";
import type { Operation } from "@apollo/client/core";

export const createRetryLink = (logger?: Logger, maxRetries = 3, ) => new RetryLink({
  attempts: function (count: number, operation: Operation, error: any) {
    if (count <= maxRetries) {
      if (['failed to get indexer url and token','empty url'].includes(error?.message) ||
          operation.getContext().fallback) {
        return false;
      }
      logger?.debug(`retry: ${count}/${maxRetries}`);
      return true;
    }
    logger?.debug(`reach max retries: ${maxRetries}`);
    return false;
  }
});
