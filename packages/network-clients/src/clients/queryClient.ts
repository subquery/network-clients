// Copyright 2020-2022 SubQuery Pte Ltd authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client/core';
import fetch from 'cross-fetch';
import { GqlEndpoint, NetworkConfig } from '../config';
import { wrapApolloResult } from '../utils/apollo';
import {
  GetDelegation,
  GetDelegationQuery,
  GetDelegationQueryVariables,
  GetIndexer,
  GetIndexerQuery,
  GetIndexerQueryVariables,
  GetTotalLock,
  GetTotalLockQuery,
  GetDelegator,
  GetDelegatorQuery,
  GetDelegatorQueryVariables,
} from '@subql/network-query';

type ApolloClients = { [key: string]: ApolloClient<unknown> };

export class GraphqlQueryClient {
  private apolloClients: ApolloClients = {};

  get explorerClient() {
    return this.apolloClients[GqlEndpoint.Explorer];
  }

  constructor(private config: NetworkConfig) {
    this.apolloClients[GqlEndpoint.Explorer] = new ApolloClient({
      cache: new InMemoryCache({ resultCaching: true }),
      link: new HttpLink({ uri: config.gql.explorer, fetch: fetch }),
      defaultOptions: {
        watchQuery: {
          fetchPolicy: 'no-cache',
        },
        query: {
          fetchPolicy: 'no-cache',
        },
      },
    });
  }

  // QUERY REGISTRY QUERY FUNCTIONS

  async getIndexer(address: string): Promise<GetIndexerQuery['indexer']> {
    const result = await wrapApolloResult(
      this.explorerClient.query<GetIndexerQuery, GetIndexerQueryVariables>({
        query: GetIndexer,
        variables: { address },
      })
    );

    return result?.indexer;
  }

  async getDelegation(
    indexer: string,
    delegator: string
  ): Promise<GetDelegationQuery['delegation']> {
    const result = await wrapApolloResult(
      this.explorerClient.query<GetDelegationQuery, GetDelegationQueryVariables>({
        query: GetDelegation,
        variables: { id: `${indexer}:${delegator}` },
      })
    );
    return result?.delegation;
  }

  async getDelegator(delegator: string): Promise<GetDelegatorQuery['delegator']> {
    const result = await wrapApolloResult(
      this.explorerClient.query<GetDelegatorQuery, GetDelegatorQueryVariables>({
        query: GetDelegator,
        variables: { address: delegator },
      })
    );
    return result?.delegator;
  }

  async getTotalLock(): Promise<any> {
    const result = await wrapApolloResult(
      this.explorerClient.query<GetTotalLockQuery>({
        query: GetTotalLock,
      })
    );
    return result?.totalLocks;
  }
}
