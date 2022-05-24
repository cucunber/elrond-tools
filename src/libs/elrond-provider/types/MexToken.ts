import BigNumber from "bignumber.js";

export type TMexToken = {
    id: string;
    symbol: string;
    name: string;
    price: BigNumber;
}