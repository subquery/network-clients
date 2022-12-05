# @subql/react-hooks

## Description

React Hooks Client, which exports various useful hooks.

This package will generate React useQuery hooks by using the queries and types from the @subql/network-query package.

## Usage

- To see view hooks run `yarn codegen-gql` or `yarn build` from root of monorepo. 

- If you need a useQuery hook that isn't avaliable in `src/__hooks__` follow instructions in @subql/network-query README.md to add queries which this package can use to generate hooks.

## Example

- Note: full examples on how to use all hooks are included in the generated files under `src/__hooks__` directory.

``` TS
    import { useGetDeploymentIndexersQuery } from '@subql/react-hooks';
    const { data, loading, error } = useGetDeploymentIndexersQuery({
        variables: {
        offset: // value for 'offset'
        deploymentId: // value for 'deploymentId'
        },
    });
```


## ChangeLogs

[CHANGELOG.md](./CHANGELOG.md)
