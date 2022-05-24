import { TAmount } from "./Amount"

export type TDelegation = {
    stake: TAmount;
    topUp: TAmount;
    locked: TAmount;
    minDelegation: TAmount;
}