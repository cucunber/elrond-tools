import BigNumber from "bignumber.js";
import { TCollectionRoles } from "./CollectionRoles";
import { ETypeEnum } from "./enums";
import { TTokenAssets } from "./TokenAssets";

export type TNftCollectionAccount = {
  collection: string;
  type: ETypeEnum;
  name: string;
  ticker: string;
  owner: string;
  timestamp: string;
  canFreeze: boolean;
  canWipe: boolean;
  canPause: boolean;
  canTransferNftCreateRole: boolean;
  decimals: BigNumber;
  assets: TTokenAssets;
  roles: TCollectionRoles;
  canCreate: boolean;
  canBurn: boolean;
  canAddQuantity: boolean;
  canUpdateAttributes: boolean;
  canAddUri: boolean;
  canTransferRole: boolean;
};
