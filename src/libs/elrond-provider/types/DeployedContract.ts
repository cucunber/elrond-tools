import BigNumber from "bignumber.js";

export type TDeployedContract = {
    address: string;
    deployTxHash: string;
    timestamp: BigNumber;
}