# @subql/apollo-links

## Overview

The `@subql/apollo-links` package provides a set of tailored Apollo links to handle authentication, error handling, query quality control, fallback mechanisms, and caching. These are optimized for querying data from the Subquery network. With this set of links, users can ensure efficient data fetching while minimizing costs.

## Installation

```bash
# yarn
yarn add @subql/apollo-links

# npm
npm install @subql/apollo-links
```

## Features

- **ClusterAuthLink**: Manages authorization request for all the agreements and plans.
- **DynamicHttpLink**: Handles dynamic HTTP operations for flexible data fetches.
- **RetryLink**: In cases of failures, this link retries the request based on predefined criteria.
- **FallbackLink**: In the event of any failures, this link provides a fallback service URL to ensure uninterrupted data querying.
- **ResponseLink**: Manages responses from the Subquery network, ensuring data integrity.
- **ErrorLink**: Provides a robust error handling mechanism for any GraphQL or network errors.
- **Caching**: Integrated caching ensures data is fetched efficiently with reduced costs.

## Usage

### Initializing `authHttpLink`

The `authHttpLink` offers two main methods for setup based on your needs:

#### 1. dictHttpLink

Optimized for dictionary-based queries. Utilizes the dictionary's chain ID for authentication.

```TS
import { dictHttpLink } from '@subql/apollo-links';
import fetch from 'cross-fetch';

const options = {
  authUrl: 'https://auth.subquery.network',
  chainId: '0x91b171bb158e2d3848fa23a9f1c25182fb8e20313b2c1eb49219da7a70ce90c3', // polkadot
  httpOptions: { fetch, fetchOptions: { timeout: 5000 } },
  // optional configurations
  fallbackUrl: 'https://api.subquery.network/sq/your_deployment_id_here', // fall back service url for `AuthLink`
  logger: console, // or any other custom logger
  cacheEnabled: true, // default is true
  ttl: 43200000, // default is 1 day
};

const { link, cleanup } = dictHttpLink(options);
```

#### 2. deploymentHttpLink

Tailored for deployment-based queries, leveraging the deployment's ID for optimized querying.

```TS
import { deploymentHttpLink } from '@subql/apollo-links';

const options = {
  authUrl: 'https://auth.subquery.network',
  deploymentId: 'your_deployment_id_here',
  httpOptions: { fetch, fetchOptions: { timeout: 5000 } },
  // ... other optional configurations
};

const { link, cleanup } = deploymentHttpLink(options);
```

### Integrating with Apollo Client

After setting up the authHttpLink, it's simple to integrate with your Apollo Client:

```TS
import { ApolloClient, from, HttpLink, InMemoryCache } from '@apollo/client/core';
import fetch from 'cross-fetch';  // doesn't need to be this fetch library

const { link, cleanup } = deploymentHttpLink(options);
const client = new ApolloClient({
  cache: new InMemoryCache({ resultCaching: true }),
  link,
});

// You can then make your GraphQL queries seamlessly:
const metadataQuery = gql`
  query Metadata {
    _metadata {
      indexerHealthy
      indexerNodeVersion
    }
  }
`

await client.query({ query: metadataQuery });
```

### Cleanup

For optimal performance and resource management, call the cleanup function when you want to destroy the link:

```TS
cleanup();
```