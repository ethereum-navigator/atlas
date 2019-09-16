const atlas = require('./atlas');

const sortedAtlas = atlas.sort(
    (a, b) =>
        parseInt(a.networkId) - parseInt(b.networkId) ||
        parseInt(a.chainId ? a.chainId : 0) - parseInt(b.chainId ? b.chainId : 0)
);

console.log(
    JSON.stringify(sortedAtlas, null, 2)
);
