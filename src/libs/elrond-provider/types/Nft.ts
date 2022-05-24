import BigNumber from "bignumber.js";
import { TAmount } from "./Amount";
import { EScamList, ETypeEnum } from "./enums";
import { TNftMedia } from "./NftMedia";
import { TNftMetadata } from "./NftMetadata";
import { TTag } from "./Tag";
import { TTokenAssets } from "./TokenAssets";

export type TNft = {
    identifier: string;
    collection: string;
    timestamp: null | BigNumber;
    attributes: string;
    nonce: BigNumber;
    type: ETypeEnum;
    name: string;
    creator: string;
    royalties: null | BigNumber;
    uris: string[]; //TODO rework type
    media: null | TNftMedia;
    isWhitelistedStorage: boolean;
    thumbnailUrl: string;
    tags: TTag[];
    metadata: TNftMetadata;
    owner: null | string;
    balance: null | BigNumber;
    supply: TAmount;
    decimals: null | TAmount;
    assets: TTokenAssets;
    ticker: string;
    scamInfo: null | EScamList;
}