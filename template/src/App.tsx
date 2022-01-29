import styled from "styled-components";
import { Outlet } from "react-router-dom";

import Footer from "./components/Footer";
import Header from "./components/Header";
import { ChainId, Config, DAppProvider } from "@usedapp/core";
import Error from "./components/Error";

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`;

const config: Config = {
  readOnlyChainId: ChainId.Mainnet,
  readOnlyUrls: {
    [ChainId.Mainnet]:
      "https://mainnet.infura.io/v3/f42c3f37e40b4ab1bc5a0d7bf5612d0f",
  },
};

const App = () => {
  return (
    <StyledApp>
      <DAppProvider config={config}>
        <Header />
        <Outlet />
        <Footer />
        <Error />
      </DAppProvider>
    </StyledApp>
  );
};

export default App;
