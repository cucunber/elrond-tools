import BigNumber from "bignumber.js";
import { TAmount } from "./Amount";

export type TIdentity = {
    identity: string;
    name: string;
    description: string;
    avatar: string;
    website: string;
    twitter: string;
    location: string;
    score: BigNumber;
    validators: BigNumber;
    stake: TAmount;
    topUp: TAmount;
    locked: TAmount;
    distribution: any; //TODO rework field
    providers: string[];
    stakePercent: BigNumber;
    rank: BigNumber;
    apr: BigNumber;
}