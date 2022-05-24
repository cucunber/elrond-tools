import BigNumber from "bignumber.js";
import { TAmount } from "./Amount";
import { TTokenAssets } from "./TokenAssets";

export type TTokenWithBalance = {
  identifier: string;
  name: string;
  ticker: string,
  owner: string,
  minted: TAmount,
  burnt: TAmount,
  initialMinted: TAmount,
  decimals: BigNumber,
  isPaused: boolean,
  assets: TTokenAssets,
  transactions: BigNumber,
  accounts: BigNumber,
  canUpgrade: boolean,
  canMint: boolean,
  canFreeze: boolean,
  canWipe: boolean,
  price: BigNumber,
  marketCap: BigNumber,
  balance: TAmount,
  valueUsd: BigNumber,
};
