import BigNumber from "bignumber.js";

export type TMiniBlockDetailed = {
    miniBlockHash: string;
    receiverBlockHash: string;
    receiverShard: BigNumber;
    senderBlockHash: string;
    senderShard: BigNumber;
    timestamp: BigNumber;
    type: string;
}