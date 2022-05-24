import BigNumber from "bignumber.js";
import { EMexPairStateEnum, EMexPairTypeEnum } from "./enums";

export type TMexPair = {
    address: string;
    id: string;
    symbol: string;
    name: string;
    price: BigNumber;
    baseId: string;
    baseSymbol: string;
    baseName: string;
    basePrice: BigNumber;
    quoteId: string;
    quoteSymbol: string;
    totalValue: BigNumber;
    volume24h: BigNumber;
    state: EMexPairStateEnum;
    type: EMexPairTypeEnum;
}