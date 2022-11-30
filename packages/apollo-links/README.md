# @subql/apollo-links

## Description

- This package contains an extended version of apollo-link and various utilities to perform authentication with our network services. 

- This package is use to authenticate with the subquery network's auth center.   

## Usage 

``` TS
import { authHttpLink } from '@subql/apollo-links';
import { ApolloClient } from '@apollo/client';
const link = await authHttpLink({...});

new ApolloClient({
    link,
    ...
});
```

## ChangeLogs

[CHANGELOG.md](./CHANGELOG.md)
