import BigNumber from "bignumber.js";

export type TTransactionSendResult = {
  receiver: string;
  receiverShard: BigNumber;
  sender: string;
  senderShard: BigNumber;
  status: string;
  txHash: string;
};
