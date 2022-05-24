import { TTransactionAction } from "./TransactionAction"

export type TTransactionDecodeDto = {
    action: null | TTransactionAction;
    data: string;
    receiver: string;
    sender: string;
    value: string;
}