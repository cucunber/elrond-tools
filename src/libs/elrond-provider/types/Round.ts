import BigNumber from "bignumber.js";

export type TRound = {
    blockWasProposed: boolean;
    round: BigNumber;
    shard: BigNumber;
    epoch: BigNumber;
    timestamp: BigNumber;
}