# @subql/network-query

# Description

The package contains all the graphql queries for our dapps. This package will then generate the typescript types and queries using [codegen](https://the-guild.dev/graphql/codegen).

The queries are split into folders which map to subquery project endpoints that are used to perform codegen.

The react-hooks package will use the queries and types from this package to generate react-hooks.

# Usage

To use queries and types from this package:

```TS
import { GetIndexer, GetIndexerQuery, GetIndexerQueryVariables} from '@subql/network-query'

//example of querying using apollo client
apolloClient.query<GetIndexerQuery, GetIndexerQueryVariables>({
    query: GetIndexer,
    variables: { address },
})
```

To add graphql queries:

- Add the query to correct file in `/queries` directory.

- Run `yarn codegen-gql` to ensure the query is correct. This will output code into `src/__graphql__`

- Create pull request

# ChangeLogs

[CHANGELOG.md](./CHANGELOG.md)
