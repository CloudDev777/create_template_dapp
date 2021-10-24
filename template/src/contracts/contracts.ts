import { Contract } from "@ethersproject/contracts";
import { useContractCall, useContractFunction } from "@usedapp/core";
import { utils } from "ethers";
import constants from "../app/constants";

import wethAbi from "./weth.json";
import erc20Abi from "./erc20.json";

export const wethContract = new Contract(
  constants.WETH,
  new utils.Interface(wethAbi)
);

export const useWrap = () => {
  const { state: wrapState, send: wrap } = useContractFunction(
    wethContract,
    "deposit",
    {
      transactionName: "Wrap",
    }
  );
  return { wrapState, wrap };
};

export const useUnwrap = () => {
  const { state: unwrapState, send: unwrap } = useContractFunction(
    wethContract,
    "withdraw",
    {
      transactionName: "Unwrap",
    }
  );
  return { unwrapState, unwrap };
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
