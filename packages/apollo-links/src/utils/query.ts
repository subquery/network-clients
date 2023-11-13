// Copyright 2020-2023 SubQuery Pte Ltd authors & contributors
// SPDX-License-Identifier: Apache-2.0

// import fetch from 'cross-fetch';
//
// export async function POST<T>(
//   url: string,
//   body: Record<string, string | number | boolean | undefined>
// ) {
//   const headers = { 'Content-Type': 'application/json' };
//   const res = await fetch(url, {
//     body: JSON.stringify(body),
//     method: 'post',
//     headers,
//   });
//   if (res.status >= 400) {
//     throw new Error('Bad response from server');
//   }
//   return res.json();
// }
//
// export async function GET<T>(url: string) {
//   const headers = { 'Content-Type': 'application/json' };
//   const res = await fetch(url, {
//     method: 'get',
//     headers,
//   });
//   if (res.status >= 400) {
//     throw new Error('Bad response from server');
//   }
//   return res.json();
// }
