# eth-provider

```
import { SubqueryAuthedRpcProvider } from '@subql/eth-provider'

const provider = new SubqueryAuthedRpcProvider({
  deploymentId: "RPC deployment id"
  authUrl: "auth service url",
  selector: { // optional
    runnerAddresses: ["0x00000"]
  }
})
```
