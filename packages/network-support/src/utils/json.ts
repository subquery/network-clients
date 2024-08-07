// Copyright 2020-2024 SubQuery Pte Ltd authors & contributors
// SPDX-License-Identifier: Apache-2.0

export function safeJSONParse(json: string) {
  try {
    return JSON.parse(json);
  } catch (e) {
    return undefined;
  }
}

export function tryUint8ArrayToJSON(
  input: Uint8Array,
  pattern?: RegExp | string
): { success: boolean; result: any } {
  let str = new TextDecoder().decode(input);
  if (pattern) {
    str = str.replace(pattern, '');
  }
  try {
    return {
      success: true,
      result: JSON.parse(str),
    };
  } catch (e) {
    return {
      success: false,
      result: str,
    };
  }
}
