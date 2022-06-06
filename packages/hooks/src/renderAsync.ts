// Copyright 2020-2022 SubQuery Pte Ltd authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { AsyncData, Handlers, HandlersArray, RenderResult } from "./utils";

export function renderAsync<T>(data: AsyncData<T>, handlers: Handlers<T>): RenderResult {
  if (data.data !== undefined) {
    try {
      return handlers.data(data.data, data);
    } catch (e) {
      // TODO not sure this is desired behaviour
      return handlers.error(e as Error);
    }
  } else if (data.error) {
    return handlers.error(data.error);
  } else if (data.loading) {
    return handlers.loading();
  }

  return null;
}

export function renderAsyncArray<T extends any[]>(data: AsyncData<T>, handlers: HandlersArray<T>): RenderResult {
  if (data.data !== undefined) {
    try {
      if (data.data === null || (Array.isArray(data.data) && !data.data.length)) {
        return handlers.empty();
      }
      return handlers.data(data.data, data);
    } catch (e) {
      // TODO not sure this is desired behaviour
      return handlers.error(e as Error);
    }
  }
  if (data.error) {
    return handlers.error(data.error);
  } else if (data.loading) {
    return handlers.loading();
  }

  return null;
}
