import { useEthers } from "@usedapp/core";
import { useDispatch } from "react-redux";
import { setError } from "../../state/errorSlice";
import { ETH_GLOBALS, RINKEBY_GLOBALS } from "../globals";

const useGlobals = () => {
  const dispatch = useDispatch();
  const { chainId } = useEthers();

  if (chainId === 4) return RINKEBY_GLOBALS;
  if (chainId === 1) return ETH_GLOBALS;
  if (!chainId) return ETH_GLOBALS;

  dispatch(
    setError({
      header: "Unsupported Network",
      subHeader: "Only Rinkey and Mainnet are supported",
    })
  );
  return ETH_GLOBALS;
};

export default useGlobals;
