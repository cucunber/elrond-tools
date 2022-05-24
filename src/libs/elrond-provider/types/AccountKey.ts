import { TAmount } from "./Amount";

export type TAccountKey  ={
    blsKey: string;
    stake: TAmount;
    topUp: TAmount;
    status: string;
    rewardAddress: string;
    queueIndex: null | string;
    queueSize: null | string;
}