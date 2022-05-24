import BigNumber from "bignumber.js"
import { TAmount } from "./Amount"
import { EScamList } from "./enums"

export type TAccountDetailed = {
    address: string,
    balance: TAmount,
    nonce: BigNumber,
    shard: BigNumber,
    code: string,
    codeHash: string,
    rootHash: string,
    txCount: BigNumber,
    scrCount: BigNumber,
    username: string,
    developerReward: string,
    ownerAddress: string,
    deployedAt: BigNumber,
    isUpgradeable: boolean,
    isReadable: boolean,
    isPayable: boolean,
    isPayableBySmartContract: boolean,
    scamInfo: EScamList,
}