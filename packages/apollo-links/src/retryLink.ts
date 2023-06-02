// Copyright 2020-2022 SubQuery Pte Ltd authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { RetryLink } from "@apollo/client/link/retry";

export const retryLink = new RetryLink({
  attempts: {
    max: 2,
    retryIf: (error) => !!error
  }
});
