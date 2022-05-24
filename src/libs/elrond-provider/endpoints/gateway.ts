const gatewayAddress = {
    getAddress: (address: string) => `address/${address}`,
    getNonce: (address: string) => `address/${address}/nonce`,
    getBalance: (address: string) => `address/${address}/balance`,
    getTransactions: (address: string) => `address/${address}/transactions`,
    getStorageValue: (address: string, key: string) => `address/${address}/key/${key}`,
    getStorage: (address: string) => `address/${address}/keys`,
}

const gatewayTransactions = {
    sendTransaction: () => `transaction/send`,
    sendMultipleTransactions: () => `transaction/send-multiple`,
    sendSimulateTransaction: () => `transaction/simulate`,
    estimateTransaction: () => `transaction/cost`,
    getTransaction: (txHash: string) => `transaction/${txHash}`,
    getTransactionStatus: (txHash: string) => `transaction/${txHash}/status`,
}

const gatewayNetwork = {
    getNetworkConfiguration: () => `network/config`,
    getShardStatus: (shardId: string) => `network/status/${shardId}`
}

const gatewayNodes = {
    getNoteHeartbeatStatus: () => `node/heartbeatstatus`,
    getStatistics: () => `node/statistics`,
    getP2PStatus: () => `node/p2pstatus`,
    getPeerInfo: () => `node/peerinfo`,
}

const gatewayBlocks = {
    getHyperBlockByNonce: (nonce: string) => `hyperblock/by-nonce/${nonce}`,
    getHyperBlockByHash: (hash: string) => `hyperblock/by-hash/${hash}`,
    getBlockByNonce: (shard: string, nonce: string) => `block/${shard}/by-nonce/${nonce}`,
    getBlockByHash: (shard: string, hash: string) => `block/${shard}/by-nonce/${hash}`,
}

const gatewayVirtualMachine = {
    getOutputOfPureFunction: () => `vm-values/query`,
    getHexOutputOfPureFunction: () => `vm-values/hex`,
    getStringOutputOfPureFunction: () => `vm-values/string`,
    getIntegerOutputOfPureFunction: () => `vm-values/int`,
}

export const gatewayEndpoints = {
    ...gatewayAddress,
    ...gatewayTransactions,
    ...gatewayNetwork,
    ...gatewayNodes,
    ...gatewayBlocks,
    ...gatewayVirtualMachine,
}