import BigNumber from "bignumber.js"
import { TAmount } from "./Amount";

export type TProvider = {
    numNodes: BigNumber;
    stake: BigNumber;
    topUp: BigNumber;
    locked: BigNumber;
    provider: string;
    owner: null | string;
    featured: boolean;
    serviceFee: TAmount;
    delegationCap: TAmount;
    apr: TAmount;
    numUsers: TAmount;
    cumulatedRewards: null | string;
    identity: null | string;
}