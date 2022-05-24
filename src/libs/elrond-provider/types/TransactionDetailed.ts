import BigNumber from "bignumber.js";
import { EScamList, ETransactionType } from "./enums";
import { TSmartContractResult } from "./SmartContractResult";
import { TTransactionAction } from "./TransactionAction";
import { TTransactionLog } from "./TransactionLog";
import { TTransactionOperation } from "./TransactionOperation";
import { TTransactionReceipt } from "./TransactionReceipt";

export type TTransactionDetailed = {
    txHash: string;
    gasLimit: BigNumber;
    gasPrice: null | BigNumber;
    gasUsed: null | BigNumber;
    miniBlockHash: null | string;
    nonce: null | BigNumber;
    receiver: string;
    receiverShard: BigNumber;
    round: null | BigNumber;
    sender: string;
    senderShard: null | BigNumber;
    signature: null | string;
    status: string;
    value: string;
    fee: null | string;
    timestamp: BigNumber;
    data: null | string;
    function: null | string;
    action: null | TTransactionAction;
    scamInfo: null | EScamList;
    type: null | ETransactionType;
    originalTxHash: null | string;
    pendingResults: null | boolean;
    results: null | TSmartContractResult[];
    receipt: null | TTransactionReceipt;
    price: null | BigNumber;
    logs: null | TTransactionLog;
    operations: TTransactionOperation[];
}