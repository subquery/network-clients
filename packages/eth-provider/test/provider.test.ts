// Copyright 2020-2023 SubQuery Pte Ltd authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { SubqueryRpcProvider } from '../src/provider';

describe('test provider', () => {
  it('runs', async () => {
    const privider = new SubqueryRpcProvider();
    privider.send('', []);
  });
});
