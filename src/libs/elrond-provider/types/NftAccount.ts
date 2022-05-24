import BigNumber from "bignumber.js";
import { TAmount } from "./Amount";
import { EScamList, ETypeEnum } from "./enums";
import { TNftMedia } from "./NftMedia";
import { TNftMetadata } from "./NftMetadata";
import { TTag } from "./Tag";
import { TTokenAssets } from "./TokenAssets";

export type TNftAccount = {
    identifier: string;
    collection: string;
    timestamp: string;
    attributes: string;
    nonce: string;
    type: ETypeEnum;
    name: string;
    creator: string;
    royalties: string;
    uris: string[]; //TODO rework this type
    url: string;
    media: TNftMedia;
    isWhitelistedStorage: boolean;
    thumbnailUrl: string;
    tags: TTag[];
    metadata: TNftMetadata;
    owner: string;
    balance: string;
    supply: TAmount;
    decimals: BigNumber;
    assets: TTokenAssets;
    ticker: string;
    scamInfo: EScamList;
    price: BigNumber;
    valueUsd: BigNumber;
}