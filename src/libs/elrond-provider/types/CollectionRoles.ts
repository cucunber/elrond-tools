export type TCollectionRoles = {
  address: string;
  canCreate: boolean;
  canBurn: boolean;
  canAddQuantity: boolean;
  canUpdateAttributes: boolean;
  canAddUri: boolean;
  canTransferRole: boolean;
  roles: string[];
};
