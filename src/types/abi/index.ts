/* default abi types */
export enum EDefaultTypes{
    Address = 'Address',
    TokenIdentifier = 'TokenIdentifier',
    BigUint = 'BigUint',
    u64 = 'u64',
    u8 = 'u8',
} 

/* struct types */
export type TStructLikeField = {
    name: string,
    type: EDefaultTypes,
}

export type TStructLike = {
    type: 'struct',
    fields: TStructLikeField[],
}

/* endpoint types */
export type TAbiEndpointInput = {
    name: string,
    type: EDefaultTypes,
}

export type TAbiEndpointOutput = {
    type: EDefaultTypes,
}

export type TAbiEndpoint = {
    name: string,
    mutability: 'readonly' | 'mutable',
    inputs: TAbiEndpointInput[],
    outputs: TAbiEndpointOutput[],
    payableInTokens?: string[],
    onlyOwner?: boolean;
}

export type TJsonAbi = {
    name: string;
    endpoints: any[];
    types: any[];
}