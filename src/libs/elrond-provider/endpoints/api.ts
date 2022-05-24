const apiAccounts = {
    getAccounts: () =>  `accounts`,
    getAccountsCount: () => `accounts/count`,
    getAccountDetails: (address: string) => `accounts/${address}`,
    getDeferredAccountPayments: (address: string) => `accounts/${address}/deferred`,
    getAccountTokens:  (address: string) => `accounts/${address}/tokens`,
    getAccountTokensCount:  (address: string) => `accounts/${address}/tokens/count`,
    getAccountCollections: (address: string) => `accounts/${address}/collections`,
    getAccountCollectionsCount: (address: string) => `accounts/${address}/collections/count`,
    getAccountTokenDetails: (address: string, token: string) => `accounts/${address}/tokens/${token}`,
    getAccountCollectionDetails: (address: string, token: string) => `accounts/${address}/collections/${token}`,
    getAccountNFTs: (address: string) => `accounts/${address}/nfts`,
    getAccountNFTsCount: (address: string) => `accounts/${address}/nfts/count`,
    getAccountNFTDetail: (address: string, nft: string) => `accounts/${address}/nfts/${nft}`,
    getAccountStake: (address: string) => `accounts/${address}/stake`,
    getAccountDelegationLegacy: (address: string) => `accounts/${address}/delegation-legacy`,
    getAccountKeys: (address: string) => `accounts/${address}/keys`,
    getAccountWaitingList: (address: string) => `accounts/${address}/waiting-list`,
    getAccountTransactions: (address: string) => `accounts/${address}/transactions`,
    getAccountTransactionsCount: (address: string) => `accounts/${address}/transactions/count`,
    getAccountTransfers: (address: string) => `accounts/${address}/transfers`,
    getAccountTransfersCount: (address: string) => `accounts/${address}/transfers/count`,
    getAccountContracts: (address: string) => `accounts/${address}/contracts`,
    getAccountContractsCount: (address: string) => `accounts/${address}/contracts/count`,
    getAccountResults: (address: string) => `accounts/${address}/results`,
    getAccountResultsCount: (address: string) => `accounts/${address}/results/count`,
    getAccountResultBySCHash: (address: string, scHash: string) => `accounts/${address}/results/${scHash}`,
    getAccountEGLDHistory: (address: string) => `accounts/${address}/history`,
    getAccountTokenHistory: (address: string, tokenIdentifier: string) => `accounts/${address}/history/${tokenIdentifier}`,
}

const apiBlocks = {
    getBlocks: () => `blocks`,
    getBlocksCount: () => `blocks/count`,
    getBlockByHash: (hash: string) => `block/${hash}`,
}

const apiCollections = {
    getCollections: () => `collections`,
    getCollectionsCount: () => `collections/count`,
    getCollectionDetail: (collection: string) => `collections/${collection}`,
    getCollectionNFTs: (collection: string) => `collections/${collection}/nfts`,
    getCollectionNFTsCount: (collection: string) => `collections/${collection}/nfts/count`,
}

const apiDelegation = {
    getDelegation: () => `delegation`,
    getDelegationLegacy: () => `delegation-legacy`,
}

const apiIdentities = {
    getIdentities: () => `identities`,
    getIdentityByIdentifier: (identifier: string) => `identities/${identifier}`,
}

const apiKeys = {
    getKey: (key: string) => `keys/${key}/unbound-period`,
}

const apiMiniBlocks = {
    getMiniBlockHash: (hash: string) => `miniblock/${hash}`,
}

const apiNetwork = {
    getNetworkConstants: () => `constants`,
    getNetworkEconomics: () => `economics`,
    getStats: () => `stats`,
}

const apiNFTs = {
    getNFTs: () => `nfts`,
    getNFTsCount: () => `nfts/count`,
    getNFTByIdentifier: (identifier: string) => `nfts/${identifier}`,
    getNFTThumbnail: (identifier: string) => `nfts/${identifier}/thumbnail`,
    getNFTSupply: (identifier: string) => `nfts/${identifier}/supply`,
    getNFTHolders: (identifier: string) => `nfts/${identifier}/accounts`,
    getNFTHoldersCount: (identifier: string) => `nfts/${identifier}/accounts/count`,
}

const apiTags = {
    getTags: () => `tags`,
    getTag: (tag: string) => `tags/${tag}`,
}

const apiNodes = {
    getNodes: () => `nodes`,
    getNodesVersion: () => `nodes/versions`,
    getNodesCount: () => `nodes/counts`,
    getNodeByBLS: (bls: string) => `nodes/${bls}`,
}

const apiProviders = {
    getProviders: () => `providers`,
    getProviderByAddress: (address: string) => `providers/${address}`,
}

const apiRounds = {
    getRounds: () => `rounds`,
    getRoundsCount: () => `rounds/count`,
    getRoundsByShardAndRound: (shard: string, round: string) => `rounds/${shard}/${round}`,
}

const apiSCResults = {
    getResults: () => `rounds`,
    getResultsCount: () => `results/count`,
    getResultBySCHash: (scHash: string) => `results/${scHash}`,
}

const apiShards = {
    getShards: () => `shards`,
}

const apiStake ={ 
    getStakes: () => `stake`,
}

const apiTokens = {
    getTokens: () => `tokens`,
    getTokensCount: () => `tokens/count`,
    getTokenByIdentifier: (identifier: string) => `tokens/${identifier}`,
    getTokenSupply:  (identifier: string) => `tokens/${identifier}/supply`,
    getTokenHolders: (identifier: string) => `tokens/${identifier}/accounts`,
    getTokenHoldersCount: (identifier: string) => `tokens/${identifier}/accounts/count`,
    getTokenTransactions: (identifier: string) => `tokens/${identifier}/transactions`,
    getTokenTransactionsCount: (identifier: string) => `tokens/${identifier}/transactions/count`,
    getTokenRoles: (identifier: string) => `tokens/${identifier}/roles`,
    getTokenRolesForAddress: (identifier: string, address: string) => `tokens/${identifier}/roles/${address}`,
}

const apiTransactions = {
    getTransactions: () => `transactions`,
    sendTransactions: () => `transactions`,
    getTransactionsCount: () => `transactions/count`,
    getTransactionDetailsByHash: (txHash: string) => `transactions/${txHash}`,
    decodeTransaction: () => `transaction/decode`,
}

const apiUsernames = {
    getUserByUsername: (username: string) => `username/${username}`,
}

// ???
const apiQuery = {

}

const apiWaitingList = {
    getWaitingList: () => `waiting-list`,
    getWaitingListCount: () => `waiting-list/count`,
}

const apiDefault = {
    getBlockchainStatus: () => `hello`
}

const apiDappConfig = {
    getDappConfig: () => `dapp/config`,
}

// endpoints doesn't work
const apiWebsocket = {

}

const apiMaiarExchange = {
    getMexEconomics: () => `mex/economics`,
    getMexPairs: () => `mex/pairs`,
    getMexTokens: () => `mex/tokens`,
    getMexFarms: () => `mex/farms`,
    getMexPairByTokens: (baseId: string, quoteId: string) => `mex/pairs/${baseId}/${quoteId}`,
}

export const apiEndpoints = {
    apiAccounts,
    apiBlocks,
    apiCollections,
    apiDelegation,
    apiIdentities,
    apiKeys,
    apiMiniBlocks,
    apiNetwork,
    apiNFTs,
    apiTags,
    apiNodes,
    apiProviders,
    apiRounds,
    apiSCResults,
    apiShards,
    apiStake,
    apiTokens,
    apiTransactions,
    apiUsernames,
    apiQuery,
    apiWaitingList,
    apiDefault,
    apiDappConfig,
    apiWebsocket,
    apiMaiarExchange,
}