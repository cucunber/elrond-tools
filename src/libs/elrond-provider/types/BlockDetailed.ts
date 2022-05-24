import { TBlock } from "./Block";

export type BlockDetailed = {
    miniBlocksHashes: string[];
    notarizedBlocksHashes: string[];
    validators: string[];
} & TBlock;
