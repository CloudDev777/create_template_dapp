import { Contract } from "@ethersproject/contracts";
import { useContractCall, useContractFunction } from "@usedapp/core";
import { utils } from "ethers";

import wethAbi from "./weth.json";
import erc20Abi from "./erc20.json";
import useGlobals from "../app/hooks/use-globals";

export const useWrap = () => {
  const globals = useGlobals();

  const { state: wrapState, send: wrap } = useContractFunction(
    new Contract(globals.WETH, new utils.Interface(wethAbi)),
    "deposit",
    {
      transactionName: "Wrap",
    }
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
