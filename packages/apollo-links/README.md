# @subql/apollo-links

## Description

- This package contains an extended version of apollo-link and various utilities to perform authentication with our network services. 

- This package is use to authenticate with the subquery network's auth center.   

## Usage 

For example of usage see our [test cases](../../test/authLink.test.ts)

```TS
import { ApolloClient, from, HttpLink, InMemoryCache } from '@apollo/client/core';
import { authHttpLink } from '@subql/apollo-links';
import fetch from 'cross-fetch'; // doesn't need to be this fetch library

const options = {
  authUrl: `http://example-url.com/token`,
  sk: '<insert secret key here>',
  indexer: '<insert indexer address here>',
  consumer: '<insert consumer address here>',
  chainId: 1287,
  deploymentId: '<insert deployment id here>',
  agreement: '<insert agreement id here>',
};

const link = await authHttpLink(options);
const client = new ApolloClient({
    cache: new InMemoryCache({ resultCaching: true }),
    link: from([authLink, new HttpLink({ uri, fetch })]),
});

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

```

## ChangeLogs

[CHANGELOG.md](./CHANGELOG.md)
