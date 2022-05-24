import BigNumber from "bignumber.js";
import { TAmount } from "./Amount";
import { TTransactionAction } from "./TransactionAction";
import { TTransactionLog } from "./TransactionLog";

export type TSmartContractResult = {
    hash: string;
    timestamp: BigNumber;
    nonce: BigNumber;
    gasLimit: BigNumber;
    gasPrice: BigNumber;
    value: TAmount;
    sender: string;
    receiver: string;
    relayedValue: string;
    data: string;
    prevTxHash: string;
    originalTxHash: string;
    callType: string;
    miniBlockHash: null | string;
    logs: null | TTransactionLog;
    returnMessage: null | string;
    action: null | TTransactionAction;
}