// Copyright 2020-2023 SubQuery Pte Ltd authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { Logger } from '@subql/apollo-links/dist/utils/logger';
import { SubqueryAuthedRpcProvider } from '../src/provider';

const mockLogger: Logger = {
  debug: jest.fn(console.log),
  error: jest.fn(console.log),
  warn: jest.fn(console.log),
  info: jest.fn(console.log),
};
describe('eth provider', () => {
  it('can send rpc without network option', async () => {
    const privider = new SubqueryAuthedRpcProvider({
      deploymentId: 'QmTeutqL8wQqzAdG8MNWMXxoz1LDkkRZkY6HEw1HbdT2um',
      authUrl: 'https://kepler-auth.thechaindata.com',
      logger: mockLogger,
    });
    const res = await privider.send('eth_blockNumber', []);
    expect(res).toBeTruthy();
  });

  it('can send rpc with network option', async () => {
    const privider = new SubqueryAuthedRpcProvider({
      deploymentId: 'QmTeutqL8wQqzAdG8MNWMXxoz1LDkkRZkY6HEw1HbdT2um',
      authUrl: 'https://kepler-auth.thechaindata.com',
      logger: mockLogger,
      network: 12345,
    });
    const res = await privider.send('eth_blockNumber', []);
    expect(res).toBeTruthy();
  });
});
