import { simpleObject } from "../types";

export const objectArrayToObject = (objArray: simpleObject[]) => {
    const obj: simpleObject = {};
    objArray.forEach((objItem) => {
        const {name, type} = objItem;
        obj[name] = type;
    })
    return obj;
}
