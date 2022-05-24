import BigNumber from "bignumber.js";
import { TAmount } from "./Amount";

export type TGlobalStake = {
    totalValidators: BigNumber;
    activeValidators: BigNumber;
    queueSize: BigNumber;
    totalStaked: TAmount;
}