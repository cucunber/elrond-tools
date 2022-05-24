import BigNumber from "bignumber.js";
import { TAmount } from "./Amount";

export type TAccountHistory = {
    address: string;
    balance: TAmount;
    timestamp: BigNumber;
    isSender: null | boolean;
}