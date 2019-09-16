const sortByNetworkIdAndChainId = (a, b) =>
    parseInt(a.networkId) - parseInt(b.networkId) ||
    parseInt(a.chainId ? a.chainId : 0) - parseInt(b.chainId ? b.chainId : 0);

module.exports = sortByNetworkIdAndChainId;
