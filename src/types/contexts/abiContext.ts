import { TAbiEndpoint } from "../abi";

export type TContextAbiEndpoint = {
    read: TAbiEndpoint[],
    write: TAbiEndpoint[],
}