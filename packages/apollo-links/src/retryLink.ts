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
      // const url = operation.getContext().url;
      // if (url) {
      //   logger?.debug(`retry for unreachable url ${url}`)
      // }
      // return !!url;
    }
    logger?.debug(`reach max retries: ${maxRetries}`);
    return false;
    // else if(!operation.getContext().fallback) {
    //   logger?.debug(`reach max retries, try fallback`)
    //   operation.setContext({ url: undefined });
    //   return false;
    // } else {
    //   return false;
    // }
  }
});
//
// export const createRetryLink = (logger?: Logger) => new RetryLink({
//   attempts: {
//     max: 5,
//     retryIf: (error, operation) => {
//       if (error?.message === 'failed to get indexer url and token') {
//         logger?.debug(`retry for the reason of ${error.message}`)
//         return true;
//       } else {
//         const url = operation.getContext().url;
//         if (url) {
//           logger?.debug(`retry for unreachable url ${url}`)
//         }
//         return !!url;
//       }
//     },
//   }
// });
