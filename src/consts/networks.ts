export const networks = ['devnet', 'testnet', 'mainnet'] as const;
export type TNetworks = typeof networks[number];
