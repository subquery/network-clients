// Copyright 2020-2024 SubQuery Pte Ltd authors & contributors
// SPDX-License-Identifier: Apache-2.0

import crypto from 'crypto';

export function computeMD5(input: string) {
  const hash = crypto.createHash('md5');
  hash.update(input);
  return hash.digest('hex');
}
