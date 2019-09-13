## Ethereum Navigator

Imagine you are on a ship staring at the horizon. Suddenly you see an island, are you curious which island it is?

Ethereum Navigator is a tool to navigate thru the endless amount of networks in the Ethereum universe.


## Atlas

The single source of truth for all Ethereum networks.

### Installation

```bash
npm install --save @ethereum-navigator/atlas
```


### Usage

```javascript
const atlas = require('@ethereum-navigator/atlas')
```


### Schema

Sample entry of the atlas:

```json
[
  {
    "name": "Sokol",
    "project": "POA.network",
    "type": "testnet",
    "networkId": "0x4d",
    "url": "https://sokol.poa.network"
  }
]
```

Name        | Description                                       | Type                      | Sample Value
------------|---------------------------------------------------|---------------------------|------------------------------
name        | The name of the network                           | `string`                  | `Sokol`
networkId   | The hex representation of the networkId           | `string`                  | `0x4d`
project*    | The name of the project that started this network | `string`                  | `POA.network`
type*       | The type of the network                           | `enum(testnet,mainnet)`   | `testnet`
chainId*    | The hex representation of the chainId             | `string`                  | `0x3d`
url*        | A sample RPC endpoint                             | `string`                  | `https://sokol.poa.network`

\* = optional


### Networks

Network Name         | NetworkId  | ChainId  | Project         
---------------------|------------|----------|-----------------
Duero                | `0x897`    |          | Ocean Protocol
Nile                 | `0x2323`   |          | Ocean Protocol
Pacific              | `0xCEA11`  |          | Ocean Protocol
Ethereum             | `0x1`      |          | Ethereum
Ethereum Classic     | `0x1`      | `0x3d`   | Ethereum
Expanse              | `0x1`      | `0x2`    | Ethereum
Morden               | `0x2`      |          | Ethereum
Ropsten              | `0x3`      |          | Ethereum
Rinkeby              | `0x5`      |          | Ethereum
Görli                | `0x5`      |          | Ethereum
Kotti                | `0x6`      |          | Ethereum
Kovan                | `0x2a`     |          | Ethereum
Development Chain    | `0x11`     |          | Parity
xDai                 | `0x64`     |          | xDai
Core                 | `0x63`     |          | POA.network
Sokol                | `0x4d`     |          | POA.network
Tobalaba             | `0x62121`  |          | EWF
Volta                | `0x12047`  |          | EWF
Musicoin             | `0x76740F` |          |


### License

```text
MIT License

Copyright (c) 2019 Sebastian Gerske

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
