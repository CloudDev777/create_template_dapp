import { useContractCall } from "@usedapp/core";
import { utils } from "ethers";

import wethAbi from "./weth.json";
import erc20Abi from "./erc20.json";
import useGlobals from "../app/hooks/use-globals";
import useContract from "../app/hooks/use-contract";

export const useWrap = () => {
  const globals = useGlobals();

  const { state: wrapState, send: wrap } = useContract(
    globals.WETH,
    wethAbi,
    "deposit",
    "Wrap"
  );
  return { wrapState, wrap };
};

export const useTokenSymbol = (token: string) => {
  const [symbol] = useContractCall({
    abi: new utils.Interface(erc20Abi),
    address: token,
    method: "symbol",
    args: [],
  }) ?? ["---"];
  return symbol;
};
