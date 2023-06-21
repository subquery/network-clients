// Copyright 2020-2022 SubQuery Pte Ltd authors & contributors
// SPDX-License-Identifier: Apache-2.0

export interface LogFn {
  /* tslint:disable:no-unnecessary-generics */
  <T extends object>(obj: T, msg?: string, ...args: any[]): void;
  (obj: unknown, msg?: string, ...args: any[]): void;
  (msg: string, ...args: any[]): void;
}

export type Logger = {
  error: LogFn;
  warn: LogFn;
  info: LogFn;
  debug: LogFn;
};

export function silentLogger(): Logger {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  const logfn = () => {};
  return {
    debug: logfn,
    info: logfn,
    warn: logfn,
    error: logfn,
  };
}
