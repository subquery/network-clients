# @subql/apollo-links

## Overview

The `@subql/apollo-links` package provides a set of tailored Apollo links to handle authentication, error handling, query quality control, fallback mechanisms, and caching. These are optimized for querying data from the Subquery network. With this set of links, users can ensure efficient data fetching while minimizing costs.

## Installation

```bash
# yarn
yarn add @subql/apollo-links @apollo/client graphql

# npm
npm install @subql/apollo-links @apollo/client graphql
```

## Features

- **ClusterAuthLink**: Manages authorization request for all the agreements and plans.
- **DynamicHttpLink**: Handles dynamic HTTP operations for flexible data fetches.
- **RetryLink**: In cases of failures, this link retries the request based on predefined criteria.
- **FallbackLink**: In the event of any failures, this link provides a fallback service URL to ensure uninterrupted data querying.
- **ResponseLink**: Manages responses from the Subquery network, ensuring data integrity.
- **ErrorLink**: Provides a robust error handling mechanism for any GraphQL or network errors.
- **Caching**: Integrated caching ensures data is fetched efficiently with reduced costs.

## Usage - external authorization mode

### What scenario work best with external authorization mode

This is the recommended way to use `@subql/apollo-links`. With an auth-server to handle cryptography stuff that consumer needed to interact with indexer.
Client side doesn't need to expose anything to reveal the identity of consumer.
Auth-server will also provide some extra benefits like indexer progress monitoring and filtering.
We provide an implementation of auth-service that everyone can fork and run on their end. https://github.com/subquery/network-auth-service

### Initializing `authHttpLink`

The `authHttpLink` offers two main methods for setup based on your needs, one instance of authHttpLink can not be reused across different deployment.

#### 1. `deploymentHttpLink`

Tailored for deployment-based queries, which works for most scenario, `@subql/apollo-links` will grab all available approaches of querying indexer from auth service and smartly route requests for you.

```TS
import { ApolloClient, InMemoryCache } from '@apollo/client/core';
import { deploymentHttpLink } from '@subql/apollo-links';
import gql from 'graphql-tag';

const options = {
  authUrl: 'https://kepler-auth.subquery.network',
  deploymentId: 'your_deployment_id_here',
  // ... other optional configurations
  // fallbackUrl:
};

const { link, cleanup } = deploymentHttpLink(options);
const client = new ApolloClient({
  cache: new InMemoryCache({ resultCaching: true }),
  link,
});

const metadataQuery = gql`
    query Metadata {
        _metadata {
        indexerHealthy
        indexerNodeVersion
        }
    }
`
const result = await client.query({ query: metadataQuery });
```

#### 2. `dictHttpLink`

Optimized for dictionary-based queries. The difference from deploymentHttpLink is `dictHttpLink` only asks for chainId, it is genesisHash for substrate chains and numeric chainId for ethereum like chains.

```TS
import { ApolloClient, InMemoryCache } from '@apollo/client/core';
import { dictHttpLink } from '@subql/apollo-links';
import fetch from 'cross-fetch';
import gql from 'graphql-tag';

const options = {
  authUrl: 'https://kepler-auth.subquery.network',
  chainId: '0x91b171bb158e2d3848fa23a9f1c25182fb8e20313b2c1eb49219da7a70ce90c3', // polkadot
  httpOptions: { fetch, fetchOptions: { timeout: 5000 } },
  // optional configurations
  fallbackUrl: 'https://api.subquery.network/sq/your_deployment_id_here', // fall back service url for `AuthLink`
  logger: console, // or any other custom logger
};

const { link, cleanup } = dictHttpLink(options);
```

## Usage - local authorization mode

Need to put consumer controller's private key with client so it can sign and authorise every requests sent to indexer.

```ts
const options = {
  sk: '<private key>',
  // don't put authUrl
};
```

## Score Store

We have an internal store for indexer scores so bad performed, bad progressed or unreachable indexers will be punished and not getting new requests.

For browser side usage, after page refresh, the score will lose though. To solve that, you can instantiate a LocalStorageStore and pass in when constructing the link object.

```ts
const store = createLocalStorageStore({ ttl: 86_400_000 });

const { link, cleanup } = deploymentHttpLink({
  authUrl: 'https://kepler-auth.subquery.network',
  deploymentId: 'your_deployment_id_here',
  httpOptions: { fetchOptions: { timeout: 5000 } },
  scoreStore: store,
});
```

## Other options

| params | usage                                                            |
| ------ | ---------------------------------------------------------------- |
| logger | apollo link will write logs to it, by default no logs will print |
|        |                                                                  |

## Cleanup

Because of the extra state management logic in it, call `cleanup()` to completely destroy the link and release resources.

```TS
cleanup();
```
