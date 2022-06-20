// Copyright 2020-2022 SubQuery Pte Ltd authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { EvmRpcProvider, calcEthereumTransactionParams } from '@acala-network/eth-providers';
import { BigNumber } from 'ethers';

const substrate = 'wss://node-6870830370282213376.rz.onfinality.io/ws?apikey=0f273197-e4d5-45e2-b23e-03b015cb7000';

export async function getOverrides(): Promise<{
  gasLimit: BigNumber;
  gasPrice: BigNumber;
  type: number;
}> {
  const provider = EvmRpcProvider.from(substrate);
  const txFeePerGas = '199999946752';
  const storageByteDeposit = '100000000000000';
  const blockNumber = await provider.getBlockNumber();

  const ethParams = calcEthereumTransactionParams({
      gasLimit: '31000000',
      validUntil: (blockNumber + 100).toString(),
      storageLimit: '64001',
      txFeePerGas,
      storageByteDeposit,
  });

  const overrides = {
    gasLimit: ethParams.txGasLimit,
    gasPrice: ethParams.txGasPrice,
    type: 0,
  };

  return overrides;
}