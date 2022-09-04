# moloni-client

## How ?

```ts
import Moloni from 'moloni-client'

const client = new Moloni({
    clientId: 'DEVELOPER_ID',
    clientSecret: 'CLIENT_SECRET',
    username: 'USERNAME',
    password: 'PASSWORD',
})

client.setCompanyId(12345)

...
```