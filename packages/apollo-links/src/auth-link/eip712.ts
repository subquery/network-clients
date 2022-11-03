// Copyright 2020-2022 SubQuery Pte Ltd authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { MessageTypes, TypedMessage } from '@metamask/eth-sig-util';

export interface Message {
  [key: string]: string | number | undefined;
  indexer: string;
  deploymentId: string;
  agreement?: string;
  consumer?: string;
}

export interface AuthMessage extends Message {
  timestamp: number;
}

const EIP712Domain = [
  { name: 'name', type: 'string' },
  { name: 'chainId', type: 'uint256' },
];

const ConsumerMessageType = [
  { name: 'consumer', type: 'address' },
  { name: 'indexer', type: 'address' },
  { name: 'agreement', type: 'string' },
  { name: 'timestamp', type: 'uint256' },
  { name: 'deploymentId', type: 'string' },
];

const IndexerMessageType = [
  { name: 'indexer', type: 'address' },
  { name: 'timestamp', type: 'uint256' },
  { name: 'deploymentId', type: 'string' },
];

export function buildTypedMessage(
  message: AuthMessage,
  chainId = 1287
): TypedMessage<MessageTypes> {
  const messageType = message.consumer ? ConsumerMessageType : IndexerMessageType;
  const domain = { name: 'Subquery', chainId };

  return {
    types: {
      EIP712Domain,
      messageType,
    },
    primaryType: 'messageType',
    domain,
    message,
  };
}

export function createAuthRequestBody(message: AuthMessage, signature: string, chainId = 1287) {
  const { consumer, indexer, agreement, deploymentId, timestamp } = message;
  const baseBody = {
    indexer,
    timestamp,
    signature: signature.replace(/^0x/, ''),
    deployment_id: deploymentId,
    chain_id: chainId,
  };

  return consumer ? { ...baseBody, consumer, agreement } : baseBody;
}
