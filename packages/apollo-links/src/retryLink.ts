// Copyright 2020-2022 SubQuery Pte Ltd authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { RetryLink } from "@apollo/client/link/retry";

export const retryLink = new RetryLink({
  delay: {
    initial: 500,
    max: 5000,
    jitter: true
  },
  attempts: {
    max: 5,
    retryIf: (error) => !!error
  }
});
