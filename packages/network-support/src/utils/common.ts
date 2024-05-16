// Copyright 2020-2024 SubQuery Pte Ltd authors & contributors
// SPDX-License-Identifier: Apache-2.0

export function safeJSONParse(json: string) {
  try {
    return JSON.parse(json);
  } catch (e) {
    return undefined;
  }
}
