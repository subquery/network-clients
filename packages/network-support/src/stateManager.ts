// Copyright 2020-2024 SubQuery Pte Ltd authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { ChannelAuth } from './types';
import { Logger, POST } from './utils';
import { computeMD5 } from './utils/hash';
import { IStore, createStore } from './utils/store';

type Options = {
  logger: Logger;
  authUrl: string;
  projectId: string;
  apikey: string;
  stateStore?: IStore;
};

type State = {
  authorization: string;
  active: number;
};

const block = 'multiple';

export class StateManager {
  private logger: Logger;
  private authUrl: string;
  private projectId: string;
  private apikey: string;
  private stateStore: IStore;

  constructor(options: Options) {
    this.logger = options.logger;
    this.authUrl = options.authUrl;
    this.projectId = options.projectId;
    this.apikey = options.apikey;
    this.stateStore = options.stateStore ?? createStore({ ttl: 86_400_000 });
  }

  async getSignedState(channelId: string): Promise<string> {
    const cachedState = await this.getState(channelId);
    if (cachedState) {
      return cachedState.authorization;
    }
    const signedState = await this.requestState(channelId);
    if (signedState.authorization) {
      await this.setState(channelId, { authorization: signedState.authorization, active: 0 });
    }
    return signedState.authorization;
  }

  async updateState(channelId: string, active: number): Promise<void> {
    let state = await this.getState(channelId);
    if (!state) {
      return;
    }
    if (active !== 0) {
      state.active = active;
      await this.setState(channelId, state);
      state = await this.requestState(channelId);
      await this.setState(channelId, state);
    }
  }

  private async requestState(channelId: string): Promise<State> {
    const tokenUrl = new URL('/channel/auth', this.authUrl);
    const signedState = await POST<ChannelAuth>(tokenUrl.toString(), {
      deployment: this.projectId,
      channelId,
      apikey: this.apikey,
      block,
    });
    return { authorization: signedState.authorization, active: 0 };
  }

  private async getState(channelId: string): Promise<State | undefined> {
    const key = this.getCacheKey(channelId);
    return await this.stateStore.get<State>(key);
  }

  private async setState(channelId: string, state: State): Promise<void> {
    const key = this.getCacheKey(channelId);
    await this.stateStore.set(key, state);
  }

  private async removeState(channelId: string): Promise<void> {
    const key = this.getCacheKey(channelId);
    await this.stateStore.remove(key);
  }

  private getCacheKey(channelId: string) {
    return `state:${this.projectId}:${channelId}:${computeMD5(this.apikey)}`;
  }
}
