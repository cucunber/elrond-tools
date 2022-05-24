import BigNumber from "bignumber.js";
import { EScamList, ETransactionType } from "./enums";
import { TTransactionAction } from "./TransactionAction";

export type Transaction = {
    txHash: string;
    gasLimit: BigNumber;
    gasPrice: BigNumber;
    gasUsed: BigNumber;
    miniBlockHash: string;
    nonce: BigNumber;
    receiver: string;
    receiverShard: BigNumber;
    round: null | BigNumber;
    sender: string;
    senderShard: BigNumber;
    signature: null | string;
    status: string;
    value: string;
    fee: null | string;
    timestamp: BigNumber;
    data: null | string;
    function: string;
    action: null | TTransactionAction;
    scamInfo: null | EScamList;
    type: null | ETransactionType;
    originalTxHash: null | string;
    pendingResults: null | boolean;
}