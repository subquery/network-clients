// Copyright 2020-2022 SubQuery Pte Ltd authors & contributors
// SPDX-License-Identifier: Apache-2.0

import GraphqlTypes from '@subql/network-query';

/**
 * Shared types
 */
export type AsyncData<T> = Readonly<{ data?: T; loading: boolean; error?: Error }>;

export { GraphqlTypes }