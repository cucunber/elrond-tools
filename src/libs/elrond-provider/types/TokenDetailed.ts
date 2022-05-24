import BigNumber from "bignumber.js";
import { TAmount } from "./Amount";
import { TTokenAssets } from "./TokenAssets";
import { TTokenRoles } from "./TokenRoles";

export type TTokenDetailed = {
    identifier: string;
    name: string;
    ticker: string;
    owner: string;
    minted: TAmount;
    burnt: TAmount;
    initialMinted: TAmount;
    decimals: BigNumber;
    isPaused: boolean;
    assets: null | TTokenAssets;
    transactions: null | BigNumber;
    accounts: null | BigNumber;
    canUpgrade: boolean;
    canMint: boolean;
    canBurn: boolean;
    canChangeOwner: boolean;
    canPause: boolean;
    canFreeze: boolean;
    canWipe: boolean;
    price: BigNumber;
    marketCap: BigNumber;
    supply: TAmount;
    circulatingSupply: TAmount;
    roles: null | TTokenRoles;
}