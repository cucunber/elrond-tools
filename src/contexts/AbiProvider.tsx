import { createContext, FC, PropsWithChildren, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { simpleObject, TContextAbiEndpoint } from "../types";
import { fileReader, getAbiEndpoints, getAbiName, getAbiTypes } from "../utils";

interface IAbiContext {
    setNewAbiFile: (file: File) => void;
}

const AbiContext = createContext<IAbiContext>({} as IAbiContext);

const AbiProvider:FC<PropsWithChildren<unknown>> = ({children}) => {

    const [abiName, setAbiName] = useState<string | null>(null);
    const [abiTypes, setAbiTypes] = useState<simpleObject[]>([]);
    const [abiEndpoints, setAbiEndpoints] = useState<TContextAbiEndpoint>({read: [], write: []});

    const [abiFile, setAbiFile] = useState<File | null>(null);

    const setNewAbiFile = useCallback((newAbiFile: File) => {
        setAbiFile(newAbiFile);
    }, [])

    const updateAbiState = useCallback(async (newAbiFile: File) => {
        try{
            const rawJsonAbiFile = await fileReader(newAbiFile);
            const jsonAbiFile = JSON.parse(rawJsonAbiFile);
            setAbiName(getAbiName(jsonAbiFile));
            setAbiTypes(getAbiTypes(jsonAbiFile));
            setAbiEndpoints(getAbiEndpoints(jsonAbiFile));
        } catch (e) {
            console.error(e);
        }
    }, [])

    useEffect(() => {
        if(abiFile){
            updateAbiState(abiFile);
        }
    }, [abiFile, updateAbiState])

    console.log(abiName, abiTypes, abiEndpoints);

    const values = useMemo(() => ({ setNewAbiFile, abiName, abiTypes, abiEndpoints }), [setNewAbiFile, abiEndpoints, abiName, abiTypes]);

    return(
        <AbiContext.Provider value={values}>
            {children}
        </AbiContext.Provider>
    )
}

const useAbiProvider = () => useContext(AbiContext);

export {AbiProvider, useAbiProvider};