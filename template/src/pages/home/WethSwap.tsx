import { useState, useEffect } from "react";
import styled from "styled-components";
import { utils } from "ethers";

import Button from "../../components/Button";
import TokenInput from "../../components/TokenInput";
import { useWrap } from "../../contracts/contracts";
import useGlobals from "../../app/hooks/use-globals";

const StyledWethSwap = styled.div`
  width: 50rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  border: solid 1px pink;

  > button {
    margin-top: 2rem;
  }
`;

const WethSwap = () => {
  const { wrapState, wrap } = useWrap();
  const globals = useGlobals();
  const [value, setValue] = useState("");

  useEffect(() => {
    if (wrapState.status === "Success") setValue("");
  }, [wrapState.status]);

  return (
    <StyledWethSwap>
      <TokenInput
        eth
        token={globals.WETH}
        value={value}
        setValue={(v: string) => setValue(v)}
      />
      <Button
        text="Wrap ETH"
        click={() => wrap({ value: utils.parseEther(value) })}
        loading={wrapState.status === "Mining"}
      />
    </StyledWethSwap>
  );
};

export default WethSwap;
