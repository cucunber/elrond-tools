import { EEsdtTypeEnum, ETransactionOperationActionEnum, ETransactionOperationTypeEnum } from "./enums";

export type TTransactionOperation = {
    id: string;
    action: ETransactionOperationActionEnum;
    type: ETransactionOperationTypeEnum;
    esdtType: EEsdtTypeEnum;
    identifier: string;
    collection: string;
    name: string;
    value: string;
    sender: string;
    receiver: string;
    decimals: string;
    data: string;
    message: string;
    svgUrl: string;
}