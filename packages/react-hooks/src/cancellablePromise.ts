// Copyright 2020-2022 SubQuery Pte Ltd authors & contributors
// SPDX-License-Identifier: Apache-2.0

class Cancelled extends Error {
  constructor(reason = '') {
    super(reason);
    Object.setPrototypeOf(this, Cancelled.prototype);
  }
}

export class CancellablePromise<T> extends Promise<T> {
  private _isCancelled: false | string = false;

  constructor(promise: Promise<T>) {
    super((resolve, reject) => {
      promise.then(
        (v) => {
          if (this._isCancelled) {
            reject(new Cancelled(this._isCancelled));
            return;
          }
          resolve(v);
        },
        (e) => {
          if (this._isCancelled) {
            reject(new Cancelled(this._isCancelled));
            return;
          }
          reject(e);
        }
      );
    });
  }

  public cancel(reason?: string): CancellablePromise<T> {
    this._isCancelled = reason ?? '';
    return this;
  }

  public get isCancelled(): boolean {
    return this._isCancelled !== false;
  }
}
