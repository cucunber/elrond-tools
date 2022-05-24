import BigNumber from "bignumber.js";
import { EMexFarmTypeEnum } from "./enums";

export type TMexFarm = {
  type: EMexFarmTypeEnum;
  address: string;
  id: string;
  symbol: string;
  name: string;
  price: BigNumber;
  farmingId: string;
  farmingSymbol: string;
  farmingName: string;
  farmingPrice: BigNumber;
  farmedId: string;
  farmedSymbol: string;
  farmedName: string;
  farmedPrice: BigNumber;
};
