import { TRound } from "./Round";

export type TRoundDetailed = {
    signers: string[]; //TODO rework field type
} & TRound;
