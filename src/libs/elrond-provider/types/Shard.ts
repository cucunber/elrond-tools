import BigNumber from "bignumber.js";

export type TShard = {
    shard: BigNumber;
    validators: BigNumber;
    activeValidators: BigNumber;
}