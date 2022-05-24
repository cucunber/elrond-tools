import BigNumber from "bignumber.js";
import { TAmount } from "./Amount";

export type TAccountEsdtHistory = {
    address: string;
    balance: TAmount;
    timestamp: BigNumber;
    isSender: null | boolean;
    token: string;
}