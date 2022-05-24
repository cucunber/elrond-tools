import { IPagination } from "./interface";

const JSONbig = require("json-bigint");

export const defaultAxiosConfig = {
    // timeout when request fall down
    timeout: 1000,
    // transform wei number string into BigNumber object
    // remove this declaration to get native strings
    transformResponse: [
        function (data: any) {
            return JSONbig.parse(data);
        }
    ]
};

export const defaultPagination: IPagination = {
    from: 0,
    size: 100
};
