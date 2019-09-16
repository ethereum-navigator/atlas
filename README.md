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

Network Name                   | Type     | NetworkId       | ChainId  | Project                
-------------------------------|----------|-----------------|----------|------------------------
Ethereum                       | mainnet  | `0x1`           |          | Ethereum
Expanse                        | testnet  | `0x1`           | `0x2`    | Ethereum
Ubiq                           | mainnet  | `0x1`           | `0x8`    | 
Ethereum Classic               | mainnet  | `0x1`           | `0x3d`   | Ethereum
EtherInc                       | mainnet  | `0x1`           | `0x65`   | 
Callisto                       | mainnet  | `0x1`           | `0x334`  | 
Teslafunds                     | mainnet  | `0x1`           | `0x740`  | 
Ethersocial                    | mainnet  | `0x1`           | `0x797e` | 
Morden                         | testnet  | `0x2`           |          | Ethereum
Ubiq                           | testnet  | `0x2`           | `0x9`    | 
Ethereum Classic               | testnet  | `0x2`           | `0x3e`   | 
Callisto                       | testnet  | `0x2`           | `0x335`  | 
Ropsten                        | testnet  | `0x3`           |          | Ethereum
Rinkeby                        | testnet  | `0x4`           |          | Ethereum
Görli                          | testnet  | `0x5`           |          | Ethereum
Kotti                          | testnet  | `0x6`           |          | Ethereum
Metadium                       | mainnet  | `0xb`           |          | 
Metadium                       | testnet  | `0xc`           |          | 
Development Chain              | testnet  | `0x11`          |          | Parity
ThunderCore                    | testnet  | `0x12`          |          | 
L14                            | testnet  | `0x16`          |          | LUKSO.network
RSK                            | mainnet  | `0x1e`          |          | 
RSK                            | testnet  | `0x1f`          |          | 
Kovan                          | testnet  | `0x2a`          |          | Ethereum
GoChain                        | mainnet  | `0x3c`          |          | 
Ellaism                        | mainnet  | `0x40`          |          | 
Mix                            | mainnet  | `0x4c`          |          | 
Sokol                          | testnet  | `0x4d`          |          | POA.network
TomoChain                      | mainnet  | `0x58`          |          | 
Core                           | mainnet  | `0x63`          |          | POA.network
xDai                           | mainnet  | `0x64`          |          | xDai
High Performance Blockchain    | mainnet  | `0x64`          | `0x10d`  | 
ThunderCore                    | mainnet  | `0x6c`          |          | 
Lightstreams                   | testnet  | `0xa2`          |          | 
Lightstreams                   | mainnet  | `0xa3`          |          | 
Energy Web Chain               | mainnet  | `0xf6`          |          | Energy Web Foundation
Lisinski                       | mainnet  | `0x181`         |          | 
Nepal Blockchain               | mainnet  | `0x3d1`         |          | 
EtherGem                       | mainnet  | `0x7c3`         |          | 
Duero                          | testnet  | `0x897`         |          | Ocean Protocol
Nile                           | testnet  | `0x2323`        |          | Ocean Protocol
Spree                          | testnet  | `0x2324`        |          | Ocean Protocol
Webchain                       | mainnet  | `0x9109`        | `0x5fa4` | 
Volta                          | testnet  | `0x12047`       |          | Energy Web Foundation
Akaroma                        | mainnet  | `0x30fb1`       |          | 
ARTIS sigma1                   | testnet  | `0x3c301`       |          | 
ARTIS tau1                     | testnet  | `0x3c401`       |          | 
Pacific                        | mainnet  | `0xCEA11`       |          | Ocean Protocol
Ether-1                        | mainnet  | `0x14095a`      |          | 
Xerom                          | mainnet  | `0x140adc`      |          | 
Musicoin                       | mainnet  | `0x76740F`      |          | 
Atheios                        | mainnet  | `0xab71e5`      | `0x654`  | 
PepChain Churchill             | testnet  | `0xcc07c9`      |          | 
IOLite                         | mainnet  | `0x1171337`     |          | 
Auxilium                       | mainnet  | `0x1b9ac4e`     |          | 
Aquachain                      | mainnet  | `0x3adbc39`     |          | 
IPOS                           | mainnet  | `0x42e576f7`    |          | 
Pirl                           | mainnet  | `0xba4dc610`    |          | 

Networks: 58 Mainnets: 34 Testnets: 24


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
