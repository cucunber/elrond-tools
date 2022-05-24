import BigNumber from "bignumber.js";
import { TAmount } from "./Amount"

export type TAccountDeferred = {
    deferredPayment: TAmount;
    secondsLeft: BigNumber;
}