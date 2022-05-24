import { EStatusEnum } from "./enums";

export type TTokenAssets = {
    website: string,
    description: string,
    status: EStatusEnum,
    pngUrl: string,
    svgUrl: string,
    lockedAccounts: string[],
    extraTokens: string[],
}