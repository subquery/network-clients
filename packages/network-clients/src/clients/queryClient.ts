// Copyright 2020-2022 SubQuery Pte Ltd authors & contributors
// SPDX-License-Identifier: Apache-2.0

import {
  ApolloClient,
  ApolloClientOptions,
  HttpLink,
  InMemoryCache,
  NormalizedCacheObject,
} from '@apollo/client/core';
import fetch from 'cross-fetch';
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
import { GQLEndpoint, NetworkConfig } from '@subql/network-config';

import { wrapApolloResult } from '../utils/apollo';

type ApolloClients = { [key: string]: ApolloClient<unknown> };

export class GraphqlQueryClient {
  private apolloClients: ApolloClients = {};

  get networkClient() {
    return this.apolloClients[GQLEndpoint.Network];
  }

  constructor(
    private config: NetworkConfig,
    apolloClientOptionsOrClient?:
      | Partial<ApolloClientOptions<NormalizedCacheObject>>
      | ApolloClient<NormalizedCacheObject>
  ) {
    if (apolloClientOptionsOrClient instanceof ApolloClient) {
      this.apolloClients[GQLEndpoint.Network] = apolloClientOptionsOrClient;
    } else {
      this.apolloClients[GQLEndpoint.Network] = new ApolloClient({
        cache: new InMemoryCache({ resultCaching: true }),
        link: new HttpLink({ uri: config.gql.network, fetch: fetch }),
        defaultOptions: {
          watchQuery: {
            fetchPolicy: 'no-cache',
          },
          query: {
            fetchPolicy: 'no-cache',
          },
        },

        ...apolloClientOptionsOrClient,
      });
    }
  }

  // QUERY REGISTRY QUERY FUNCTIONS

  async getIndexer(address: string): Promise<GetIndexerQuery['indexer']> {
    const result = await wrapApolloResult(
      this.networkClient.query<GetIndexerQuery, GetIndexerQueryVariables>({
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
      this.networkClient.query<GetDelegationQuery, GetDelegationQueryVariables>({
        query: GetDelegation,
        variables: { id: `${indexer}:${delegator}` },
      })
    );
    return result?.delegation;
  }

  async getDelegator(delegator: string): Promise<GetDelegatorQuery['delegator']> {
    const result = await wrapApolloResult(
      this.networkClient.query<GetDelegatorQuery, GetDelegatorQueryVariables>({
        query: GetDelegator,
        variables: { address: delegator },
      })
    );
    return result?.delegator;
  }

  async getTotalLock(): Promise<any> {
    const result = await wrapApolloResult(
      this.networkClient.query<GetTotalLockQuery>({
        query: GetTotalLock,
      })
    );
    return result?.totalLocks;
  }
}
