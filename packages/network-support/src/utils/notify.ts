// Copyright 2020-2024 SubQuery Pte Ltd authors & contributors
// SPDX-License-Identifier: Apache-2.0

export async function notifySlack(url: string, body: any, headers?: Record<string, string>) {
  try {
    headers = headers || {
      'Content-Type': 'application/json',
    };
    await fetch(url, {
      method: 'post',
      headers,
      body: JSON.stringify(body),
    });
  } catch (_) {
    _;
  }
}
