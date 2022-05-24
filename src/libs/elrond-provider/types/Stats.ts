import BigNumber from "bignumber.js"

export type TStats = {
    accounts: BigNumber;
    blocks: BigNumber;
    epoch: BigNumber;
    refreshRate: BigNumber;
    roundsPassed: BigNumber;
    roundsPerEpoch: BigNumber;
    shards: BigNumber;
    transactions: BigNumber;
}