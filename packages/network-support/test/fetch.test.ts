// Copyright 2020-2023 SubQuery Pte Ltd authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { Logger } from '@subql/apollo-links/dist/utils/logger';
import { createFetch } from '../src/fetch';
import { OrderManager, ProjectType, ResponseFormat } from '../src';

const mockLogger: Logger = {
  debug: jest.fn(console.log),
  error: jest.fn(console.log),
  warn: jest.fn(console.log),
  info: jest.fn(console.log),
};
describe('eth provider', () => {
  it('can send rpc without network option', async () => {
    const orderManager = new OrderManager({
      authUrl: 'https://auth.subquery.network',
      projectId: 'Qmf6uZkxuNzpcNvnhReXrz1BTzMWgmtkdFQrSNByPytkuk',
      projectType: ProjectType.deployment,
      logger: mockLogger,
      responseFormat: ResponseFormat.Wrapped,
    });
    const fetch = createFetch(orderManager);

    const res = await fetch({
      body: JSON.stringify({ jsonrpc: '2.0', method: 'eth_blockNumber', params: [], id: 1 }),
      headers: { 'Content-Type': 'application/json' },
      method: 'post',
    });
    expect(res).toBeTruthy();
  });
});
