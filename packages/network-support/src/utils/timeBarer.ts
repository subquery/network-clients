// Copyright 2020-2024 SubQuery Pte Ltd authors & contributors
// SPDX-License-Identifier: Apache-2.0

class TimeBarrier {
  private ttl: number;
  private timers: Map<string, any>;

  constructor(ttl: number) {
    this.ttl = ttl;
    this.timers = new Map();
  }

  set(key: string): boolean {
    if (this.timers.has(key)) {
      return false;
    }
    this.timers.set(
      key,
      setTimeout(() => this.timers.delete(key), this.ttl)
    );
    return true;
  }

  inspect() {
    return `TimeBarrier size:${this.timers.size}`;
  }
}

export default new TimeBarrier(1000 * 60 * 5);

export function createTimeBarrier(ttl: number) {
  return new TimeBarrier(ttl);
}
