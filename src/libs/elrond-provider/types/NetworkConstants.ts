import BigNumber from "bignumber.js";

export type TNetworkConstants = {
    chainId: string;
    gasPerDataByte: BigNumber;
    minGasLimit: BigNumber;
    minGasPrice: BigNumber;
    minTransactionVersion: BigNumber;
}