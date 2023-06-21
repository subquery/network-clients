# @subql/network-clients

## Clients 

### Network Client

The high level client for SubQuery Network

Network Clients provide contract sdk, contract client and ipfs client methods to interact with Subquery Network.

This high level client is for when we need to access multiple clients for a method.

``` TS
import {NetworkClient, getIndexer} from '@subql/network-clients';
const client = NetworkClient.create(SQNetworks.TESTNET);

//this method needs to access contract client and query client
const indexer = await getIndexer('<insert indexer address here>') 
```

### Contract Client

Client where you can access several methods that use
the contract sdk values as inputs.

``` TS
import {cancelOfferUnspentBalance} from '@subql/network-clients';
const offerId = 4
const balance = await cancelOfferUnspentBalance(offerId);
```

### IPFS Client

Client where you can call basic ipfs method without having to
implement the logic yourself.

```TS 
import {cat} from '@subql/network-clients';

const output = await cat('<insert ipfs address here>');
console.log(output);
```

### Query Client

Client providing commonly used graphql requests that we use
to get data from the network subquery project.

```TS
import {GraphqlQueryClient, getIndexer} from '@subql/network-clients';

import {GetIndexer} from '@subql/network-query';

const client = new GraphqlQueryClient(config).networkClient;
const result = await client.query({
      query: GetIndexer,
      variables: { address: address1 },
    });
```

## ChangeLogs

[CHANGELOG.md](./CHANGELOG.md)
