// Copyright 2020-2024 SubQuery Pte Ltd authors & contributors
// SPDX-License-Identifier: Apache-2.0

import md5 from 'crypto-js/md5';

export function computeMD5(input: string) {
  return md5(input).toString();
}
