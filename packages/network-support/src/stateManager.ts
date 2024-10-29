// Copyright 2020-2024 SubQuery Pte Ltd authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { Base64 } from 'js-base64';
import { ChannelAuth, ChannelState } from './types';
import { Logger, POST } from './utils';
import { computeMD5 } from './utils/hash';
import { IStore, createStore } from './utils/store';

type Options = {
  logger: Logger;
  authUrl: string;
  projectId: string;
  apikey?: string;
  stateStore?: IStore;
};

export enum BlockType {
  Single = 'single',
  Multiple = 'multiple',
}

export enum ActiveType {
  Active,
  Inactive1,
  Inactive2,
}

export type State = {
  authorization: string;
};

export class StateManager {
  private logger: Logger;
  private authUrl: string;
  private projectId: string;
  private apikey?: string;
  private stateStore: IStore;
  private channelIdStateTime: Record<string, number>;

  constructor(options: Options) {
    this.logger = options.logger;
    this.authUrl = options.authUrl;
    this.projectId = options.projectId;
    this.apikey = options.apikey;
    this.stateStore = options.stateStore ?? createStore({ ttl: 86_400_000 });
    this.channelIdStateTime = {};
  }

  async getSignedState(channelId: string, block: BlockType): Promise<State> {
    const cachedState = block === BlockType.Multiple ? await this.getState(channelId) : undefined;
    if (cachedState) {
      return cachedState;
    }
    const signedState = await this.requestState(channelId, block);
    const convertResult = this.tryConvertJson(signedState.authorization);
    if (block === BlockType.Multiple && signedState.authorization && !convertResult.success) {
      await this.setState(channelId, {
        authorization: signedState.authorization,
      });
    }
    return signedState;
  }

  private async requestState(channelId: string, block: BlockType): Promise<State> {
    const tokenUrl = new URL('/channel/sign', this.authUrl);
    this.logger?.debug(
      `requesting new state signature [${block}] for deployment ${this.projectId} and channel ${channelId}`
    );
    const signedState = await POST<ChannelAuth>(tokenUrl.toString(), {
      deployment: this.projectId,
      channelId,
      apikey: this.apikey,
      block,
    });
    this.logger?.debug(
      `requested new state signature [${block}] for deployment ${this.projectId} and channel ${channelId}`
    );
    const state: State = {
      authorization: signedState.authorization,
    };
    return state;
  }

  async syncState(channelId: string, state: State | ChannelState): Promise<void> {
    if ('consumerSign' in state) {
      // ChannelState
      const stateUrl = new URL('/channel/state', this.authUrl);
      try {
        const res = await POST<{ spent: string }>(stateUrl.toString(), {
          // ...state,
          channelId,
          auth: Base64.encode(JSON.stringify(state)),
          block: BlockType.Single,
          apikey: this.apikey,
        });
        if (res.spent) {
          // this.logger?.debug(`syncChannelState [single] succeed`);
        } else {
          this.logger?.debug(`syncChannelState [single] failed: ${JSON.stringify(res)}`);
        }
      } catch (e) {
        this.logger?.debug(`syncChannelState [single] failed: ${e}`);
      }
    } else {
      // State
      if (this.getActiveType(state) === ActiveType.Active) {
        return;
      }
      try {
        const now = Date.now();
        const lastStateTime = this.channelIdStateTime[channelId] || 0;
        if (now - lastStateTime < 5_000) {
          this.logger?.debug(`syncChannelState skip. ${channelId}`);
          return;
        }
        this.channelIdStateTime[channelId] = now;
        const stateUrl = new URL('/channel/state', this.authUrl);
        const res = await POST<{ authorization: string }>(stateUrl.toString(), {
          channelId,
          auth: state.authorization,
          block: BlockType.Multiple,
          apikey: this.apikey,
        });
        // const res = await this.requestState(channelId, BlockType.Multiple);
        if (res.authorization) {
          const convertResult = this.tryConvertJson(res.authorization);
          if (!convertResult.success) {
            await this.setState(channelId, {
              authorization: res.authorization,
            });
            this.logger?.debug(`syncChannelState [multiple] succeed`);
          } else {
            // this.logger?.debug(`syncChannelState [multiple] failed: ${convertResult.error}`);
            this.logger?.error({
              type: 'state_convert',
              deploymentId: this.projectId,
              channelId,
              res: JSON.stringify(convertResult),
              state: JSON.stringify(state),
            });
          }
        } else {
          // this.logger?.debug(`syncChannelState [multiple] failed: ${JSON.stringify(res)}`);
          this.logger?.error({
            type: 'state_empty',
            deploymentId: this.projectId,
            channelId,
            res: JSON.stringify(res),
            state: JSON.stringify(state),
          });
        }
      } catch (e: any) {
        // this.logger?.debug(`syncChannelState [multiple] failed: ${e}`);
        this.logger?.error({
          type: 'state_error',
          deploymentId: this.projectId,
          channelId,
          error: e.message,
          stack: e.stack,
          state: JSON.stringify(state),
        });
      }
    }
  }

  async forceReportInactiveState(channelId: string | undefined): Promise<void> {
    channelId = channelId || '';
    const cachedState = await this.getState(channelId);
    if (cachedState) {
      const authorization = cachedState.authorization;
      if (authorization) {
        const buffer = Buffer.from(authorization, 'base64');
        buffer[0] = 2;
        const newAuthorization = buffer.toString('base64');
        const state = {
          authorization: newAuthorization,
        };
        this.logger?.info(`PAYG conflict, ${authorization} set state to ${newAuthorization}`);
        await this.syncState(channelId, state);
      }
    }
  }

  async invalidateState(channelId: string) {
    await this.removeState(channelId);
    this.logger?.debug(`invalidateState [multiple] for channel ${channelId}`);
  }

  tryConvertJson(bs64Data: string): { success: boolean; data: any; error: any } {
    try {
      const json = JSON.parse(Base64.decode(bs64Data));
      return {
        success: true,
        data: json,
        error: json.error,
      };
    } catch {
      return {
        success: false,
        data: Base64.toUint8Array(bs64Data),
        error: undefined,
      };
    }
  }

  getActiveType(state: State): ActiveType {
    const data = Base64.toUint8Array(state.authorization);
    return data[0] as ActiveType;
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
    return `state:${this.projectId}:${channelId}:${computeMD5(this.apikey ?? '')}`;
  }

  private agreementTokenKey(agreementId: string) {
    return `token:agreement:${agreementId}`;
  }

  private agreementLimitKey(agreementId: string) {
    const date = new Date();
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    const formattedDate = `${year}-${month}-${day}`;
    return `dlimit:${formattedDate}:${agreementId}`;
  }

  async getAgreementToken(agreementId: string): Promise<string> {
    const key = this.agreementTokenKey(agreementId);
    return (await this.stateStore.get<string>(key)) || '';
  }

  async setAgreementToken(agreementId: string, token: string) {
    const key = this.agreementTokenKey(agreementId);
    await this.stateStore.set(key, token);
  }

  async setDailyLimitedAgreement(agreementId: string) {
    const key = this.agreementLimitKey(agreementId);
    const now = new Date();
    const midnight = new Date(now);
    midnight.setHours(24, 0, 0, 0);
    const mills = midnight.getTime() - now.getTime();
    const seconds = Math.floor(mills / 1000);
    await this.stateStore.set(key, 1, seconds + 60);
  }

  async getDailyLimitedAgreement(agreement: string) {
    const key = this.agreementLimitKey(agreement);
    const reached = await this.stateStore.get(key);
    return reached ? true : false;
  }
}
