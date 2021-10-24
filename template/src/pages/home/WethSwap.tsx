import { useState } from "react";
import styled from "styled-components";
import { utils } from "ethers";

import constants from "../../app/constants";
import Button from "../../components/Button";
import TokenInput from "../../components/TokenInput";
import { useWrap } from "../../contracts/contracts";

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

  const [value, setValue] = useState("");

  return (
    <StyledWethSwap>
      <TokenInput
        eth
        token={constants.WETH}
        value={value}
        setValue={(v: string) => setValue(v)}
      />
      <Button
        text="Wrap ETH"
        click={() => wrap({ value: utils.formatEther(value) })}
        loading={wrapState.status === "Mining"}
      />
    </StyledWethSwap>
  );
};

export default WethSwap;
