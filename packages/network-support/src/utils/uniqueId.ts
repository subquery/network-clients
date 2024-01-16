// Copyright 2020-2023 SubQuery Pte Ltd authors & contributors
// SPDX-License-Identifier: Apache-2.0

export function generateUniqueId(length = 32) {
  return Array.from(Array(length), () => Math.floor(Math.random() * 36).toString(36)).join('');
}
