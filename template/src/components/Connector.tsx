import { shortenAddress, useEthers } from "@usedapp/core";
import Button from "./Button";

const Connector = () => {
  const { account, activateBrowserWallet } = useEthers();

  return (
    <Button
      text={account ? shortenAddress(account) : "Connect Wallet"}
      click={() => activateBrowserWallet()}
    />
  );
};

export default Connector;
