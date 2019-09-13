const atlas = require('./atlas');

console.log("Network Name         | NetworkId  | ChainId  | Project         ");
console.log('---------------------|------------|----------|-----------------');

for (const network of atlas) {
    const columns = [
        network.name.padEnd(20),
        `\`${network.networkId}\``.padEnd(10),
        (network.chainId ? `\`${network.chainId}\`` : "").padEnd(8),
        network.project ? network.project : ""
    ];

    console.log(columns.join(" | "))
}