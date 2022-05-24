import { TAmount } from "./Amount"
import { TProviderUnstakedTokens } from "./ProviderUnstakedTokens";

export type TProviderStake = {
    totalStaked: TAmount;
    unstakedTokens: TProviderUnstakedTokens;
}