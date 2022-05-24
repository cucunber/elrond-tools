import BigNumber from "bignumber.js";
import { TAmount } from "./Amount";
import { ENodeStatusEnum, ENodeTypeEnum } from "./enums";

export type TNode = {
    bls: string;
    name: string;
    version: string;
    rating: BigNumber;
    tempRating: BigNumber;
    ratingModifier: BigNumber;
    shard: BigNumber;
    type: ENodeTypeEnum;
    status: ENodeStatusEnum;
    online: boolean;
    nonce: BigNumber;
    instances: BigNumber;
    owner: string;
    identity: string;
    provider: string;
    issues: string[];
    stake: TAmount;
    topUp: TAmount;
    locked: TAmount;
    leaderFailure: BigNumber;
    leaderSuccess: BigNumber;
    validatorFailure: BigNumber;
    validatorIgnoredSignatures: BigNumber;
    validatorSuccess: BigNumber;
    position: BigNumber;
}