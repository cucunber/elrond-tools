import BigNumber from "bignumber.js"

export type TEconomics = {
    totalSupply: BigNumber;
    circulatingSupply: BigNumber;
    staked: BigNumber;
    price: BigNumber;
    marketCap: BigNumber;
    apr: BigNumber;
    topUpApr: BigNumber;
    baseApr: BigNumber,
}