// Copyright 2020-2022 SubQuery Pte Ltd authors & contributors
// SPDX-License-Identifier: Apache-2.0

export default {
    projects: {
        registry: {
            documents: 'packages/network-queries/documents/registry/*.gql',
            schema: 'https://api.subquery.network/sq/subquery/kepler-testnet-subql-project'
        },
        exchange: {
            documents: 'packages/network-queries/documents/exchange/*.gql',
            schema: 'https://api.subquery.network/sq/subquery/kepler-testnet-exchange-project'
        }
    }
}