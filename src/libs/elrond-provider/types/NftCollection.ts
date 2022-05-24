import BigNumber from "bignumber.js";
import { TCollectionRoles } from "./CollectionRoles";
import { ETypeEnum } from "./enums";
import { TTokenAssets } from "./TokenAssets";

export type NftCollection = {
    collection: string;
    type: ETypeEnum;
    name: string;
    ticker: string;
    owner: null | string;
    timestamp: BigNumber;
    canFreeze: boolean;
    canWipe: boolean;
    canPause: boolean;
    canTransferNftCreateRole: boolean;
    decimals: boolean;
    assets: TTokenAssets;
    roles: TCollectionRoles;
}