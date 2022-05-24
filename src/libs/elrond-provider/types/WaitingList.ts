import BigNumber from "bignumber.js";
import { TAmount } from "./Amount";

export type TWaitingList = {
    address: string;
    nonce: BigNumber;
    rank: BigNumber;
    value: TAmount;
}