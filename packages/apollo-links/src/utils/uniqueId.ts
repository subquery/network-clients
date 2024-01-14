// Copyright 2020-2023 SubQuery Pte Ltd authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { ethers } from 'ethers';

export function generateUniqueId() {
  const randomBytes = ethers.utils.randomBytes(16);
  const uniqueId = ethers.utils.keccak256(randomBytes);
  return uniqueId;
}
