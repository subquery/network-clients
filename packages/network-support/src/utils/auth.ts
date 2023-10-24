// Copyright 2020-2022 SubQuery Pte Ltd authors & contributors
// SPDX-License-Identifier: Apache-2.0

import jwt_decode from 'jwt-decode';

export function isTokenExpired(token: string): boolean {
  if (!token) return true;

  try {
    const { exp } = jwt_decode(token) as { exp: number };
    const currentDate = new Date().getTime();
    return exp < currentDate;
  } catch {
    return true;
  }
}
