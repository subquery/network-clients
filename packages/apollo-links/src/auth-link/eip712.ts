// Copyright 2020-2022 SubQuery Pte Ltd authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { MessageTypes, TypedMessage } from '@metamask/eth-sig-util';

export interface AuthMessage {
  indexer: string;
  deploymentId: string;
  agreement?: string;
  consumer?: string;
}

export interface Message extends AuthMessage {
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

const domain = {
  name: 'Subquery',
  // TODO: get from config
  chainId: 1287,
};

export function buildTypedMessage(message: Message): TypedMessage<MessageTypes> {
  const messageType = message.consumer ? ConsumerMessageType : IndexerMessageType;
  return {
    types: {
      EIP712Domain,
      messageType,
    },
    primaryType: 'messageType',
    domain,
    message, // FIXME: type issue
  };
}

export function createAuthRequestBody(message: Message, signature: string) {
  const { consumer, indexer, agreement, deploymentId, timestamp } = message;
  const baseBody = {
    indexer,
    timestamp,
    signature,
    deployment_id: deploymentId,
    chain_id: domain.chainId,
  };

  return consumer ? { ...baseBody, consumer, agreement } : baseBody;
}
