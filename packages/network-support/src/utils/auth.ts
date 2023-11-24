// Copyright 2020-2022 SubQuery Pte Ltd authors & contributors
// SPDX-License-Identifier: Apache-2.0

import jwt_decode from 'jwt-decode';

export function isTokenExpired(token: string): boolean {
  if (!token) return true;

  try {
    const { exp }: { exp: number } = jwt_decode(token);
    const currentDate = new Date().getTime();
    return exp < currentDate;
  } catch {
    return true;
  }
}
