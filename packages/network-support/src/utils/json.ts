// Copyright 2020-2024 SubQuery Pte Ltd authors & contributors
// SPDX-License-Identifier: Apache-2.0

export function safeJSONParse(json: string) {
  try {
    return JSON.parse(json);
  } catch (e) {
    return undefined;
  }
}

export function tryUint8ArrayToJSON(input: Uint8Array) {
  const str = new TextDecoder().decode(input);
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
