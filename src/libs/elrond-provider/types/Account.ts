import BigNumber from "bignumber.js";
import { TAmount } from "./Amount";

export type TAccount = {
    address: string,
    balance: TAmount,
    nonce: BigNumber,
    shard: BigNumber,
}