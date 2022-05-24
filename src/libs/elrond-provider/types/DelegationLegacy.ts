import BigNumber from "bignumber.js";
import { TAmount } from "./Amount"

export type TDelegationLegacy = {
    totalWithdrawOnlyStake: TAmount;
    totalWaitingStake: TAmount;
    totalActiveStake: TAmount;
    totalUnstakedStake: TAmount;
    totalDeferredPaymentStake: TAmount;
    numUsers: BigNumber;
}