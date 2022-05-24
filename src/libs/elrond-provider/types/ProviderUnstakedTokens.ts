import BigNumber from "bignumber.js";
import { TAmount } from "./Amount";

export type TProviderUnstakedTokens = {
  amount: TAmount;
  expires: BigNumber;
  epochs: BigNumber;
};
