import BigNumber from "bignumber.js";
import { TAmount } from "./Amount";

export type TAccountUsername = {
    address: string;
    nonce: BigNumber;
    balance: TAmount;
    rootHash: string;
    txCount: BigNumber;
    scrCount: BigNumber;
    username: string;
    shard: BigNumber;
    developerReward: string;
}