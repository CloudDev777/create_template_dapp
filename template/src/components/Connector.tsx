import { shortenAddress, useEthers } from "@usedapp/core";
import Button from "./Button";

const Connector = () => {
  const { account, activateBrowserWallet } = useEthers();

  return (
    <Button click={() => activateBrowserWallet()}>
      {account ? shortenAddress(account) : "Connect Wallet"}
    </Button>
  );
};

export default Connector;
