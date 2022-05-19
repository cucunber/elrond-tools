import { objectArrayToObject } from '../objectArrayToObject';
import { TJsonAbi, TStructLike } from './../../types/abi/index';

export const ABITypeStructGenerator = (structLikeType: TStructLike, structName: string) => {
    return ({
        [structName]: objectArrayToObject(structLikeType.fields),
    })
}

export const getAbiTypes = (abi: TJsonAbi) => {
    const abiTypes = abi.types;
    if(abiTypes){
        return Object.entries(abiTypes).map(([typeName, typeValues]) => {
            const {type} = typeValues;
            switch(type){
                case 'struct': {
                    return ABITypeStructGenerator(typeValues, typeName)
                }
                default:{
                    return {}
                }
            }
        })
    }
    return [];
};