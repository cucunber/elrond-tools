import BigNumber from "bignumber.js";

export type TTransactionCreate = {
  chainId: string;
  data: string;
  gasLimit: BigNumber;
  gasPrice: BigNumber;
  nonce: BigNumber;
  receiver: string;
  sender: string;
  signature: string;
  value: string;
  version: BigNumber;
};
