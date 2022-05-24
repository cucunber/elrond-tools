import BigNumber from "bignumber.js";

export type TBlock = {
  hash: string;
  epoch: BigNumber;
  nonce: BigNumber;
  prevHash: string;
  proposer: string;
  pubKeyBitmap: string;
  round: BigNumber;
  shard: BigNumber;
  size: BigNumber;
  sizeTxs: BigNumber;
  stateRootHash: string;
  timestamp: BigNumber;
  txCount: BigNumber;
  gasConsumed: BigNumber;
  gasRefunded: BigNumber;
  gasPenalized: BigNumber;
  maxGasLimit: BigNumber;
};
