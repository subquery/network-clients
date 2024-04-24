// Copyright 2020-2024 SubQuery Pte Ltd authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { SemVer } from 'semver';

export class Version {
  static parse(version: string): SemVer {
    return new SemVer(version);
  }

  static gte(version1: string, version2: string): boolean {
    return new SemVer(version1).compare(version2) >= 0;
  }

  static lte(version1: string, version2: string): boolean {
    return new SemVer(version1).compare(version2) <= -1;
  }

  static lt(version1: string, version2: string): boolean {
    return new SemVer(version1).compare(version2) === -1;
  }

  static gt(version1: string, version2: string): boolean {
    return new SemVer(version1).compare(version2) === 0;
  }

  static eq(version1: string, version2: string): boolean {
    return new SemVer(version1).compare(version2) === 0;
  }
}
