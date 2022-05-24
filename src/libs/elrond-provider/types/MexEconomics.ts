import BigNumber from "bignumber.js"

export type TMexEconomics = {
    totalSupply: BigNumber;
    circulatingSupply: BigNumber;
    price: BigNumber;
    marketCap: BigNumber;
    volume24h: BigNumber;
    marketPairs: BigNumber;
}