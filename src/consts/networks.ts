// main networks of Elrond
export const networks = ['devnet', 'testnet', 'mainnet'] as const;
export type TNetworks = typeof networks[number];

// main api points of Elrond
export type TApiProvidersFromNetwork = {
    [key in TNetworks]: string;
}
export const apiProvidersFromNetworks: TApiProvidersFromNetwork = {
    devnet: "https://devnet-api.elrond.com",
    testnet: "https://testnet-api.elrond.com",
    mainnet: "https://api.elrond.com",
}

//main proxy points of Elrond (used to interact with blockchain)
export type TProxyProvidersFromNetwork = {
    [key in TNetworks]: string;
}
export const proxyProvidersFromNetwork = {
    devnet: "https://devnet-gateway.elrond.com",
    testnet: "https://testnet-gateway.elrond.com",
    mainnet: "https://gateway.elrond.com",
}