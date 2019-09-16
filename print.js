const atlas = require('./atlas');

console.log("Network Name                   | Type     | NetworkId       | ChainId  | Project                ");
console.log('-------------------------------|----------|-----------------|----------|------------------------');

let mainnets = 0;
let testnets = 0;

for (const network of atlas) {
    const columns = [
        network.name.padEnd(30),
        (network.type ? network.type : "").padEnd(8),
        `\`${network.networkId}\``.padEnd(15),
        (network.chainId ? `\`${network.chainId}\`` : "").padEnd(8),
        network.project ? network.project : ""
    ];

    if (network.type === 'mainnet') {
        mainnets++;
    } else if (network.type === 'testnet') {
        testnets++;
    }

    console.log(columns.join(" | "))
}

console.log();

console.log(
    `Networks: ${atlas.length} Mainnets: ${mainnets} Testnets: ${testnets}`
);