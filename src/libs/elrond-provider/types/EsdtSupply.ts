import { TAmount } from "./Amount"

export type TEsdtSupply = {
    totalSupply: TAmount;
    circulatingSupply: TAmount;
    minted: TAmount;
    burned: TAmount;
    initialMinted: TAmount;
    lockedAccounts: any; //TODO rework field type
}