import BigNumber from "bignumber.js";

export type TDappConfig = {
    id: string;
    name: string;
    egldLabel: string;
    decimals: BigNumber;
    egldDenomination: BigNumber;
    gasPerDataByte: BigNumber;
    apiTimeout: BigNumber;
    walletConnectDeepLink: string;
    walletConnectBridgeAddresses: string;
    walletAddress: string;
    apiAddress: string;
    explorerAddress: string;
    chainId: string;
}