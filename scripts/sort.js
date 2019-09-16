const atlas = require('../atlas');
const sortByNetworkIdAndChainId = require('./sortByNetworkIdAndChainId');

const sortedAtlas = atlas.sort(sortByNetworkIdAndChainId);

console.log(
    JSON.stringify(sortedAtlas, null, 2)
);
