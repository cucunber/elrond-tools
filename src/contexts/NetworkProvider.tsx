import {
  createContext,
  FC,
  PropsWithChildren,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import { TNetworks } from "../consts";

interface INetworkContext {
  network: TNetworks;
  switchNetwork: (network: TNetworks) => void;
}

const NetworkContext = createContext<INetworkContext>({} as INetworkContext);

const NetworkProvider: FC<PropsWithChildren<unknown>> = ({ children }) => {
  const [network, setNetwork] = useState<TNetworks>("mainnet");

  const switchNetwork = useCallback((newNetwork: TNetworks) => {
    setNetwork(newNetwork);
  }, []);

  const values = useMemo(
    () => ({ switchNetwork, network }),
    [network, switchNetwork]
  );

  return (
    <NetworkContext.Provider value={values}>
      <>{children};</>
    </NetworkContext.Provider>
  );
};

const useNetwork = () => useContext(NetworkContext);

export { NetworkProvider, useNetwork };
