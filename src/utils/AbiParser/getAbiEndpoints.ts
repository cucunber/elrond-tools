import { TAbiEndpoint, TJsonAbi } from './../../types/abi/index';

export const getAbiEndpoints = (abi: TJsonAbi) => {
    const endpoints = abi.endpoints;
    const resultEndpoints = {
        read: [] as TAbiEndpoint[],
        write: [] as TAbiEndpoint[],
    }
    if(endpoints){
        endpoints.forEach((endpoint) => {
            const {mutability} = endpoint;
            switch(mutability){
                case 'readonly': {
                    resultEndpoints.read.push(endpoint);
                    break;
                }
                case 'mutable': {
                    resultEndpoints.write.push(endpoint);
                    break;
                }
                default: {
                    break;
                }
            }
        })
    }
    return resultEndpoints;
};