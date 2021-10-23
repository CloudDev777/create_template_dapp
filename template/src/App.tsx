import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Footer from "./components/Footer";
import Header from "./components/Header";
import HomePage from "./pages/home/HomePage";
import NotFoundPage from "./pages/not-found/NotFoundPage";
import AnotherPage from "./pages/another-page/AnotherPage";
import { ChainId, Config, DAppProvider } from "@usedapp/core";

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
      "https://mainnet.infura.io/v3/62687d1a985d4508b2b7a24827551934",
  },
};

const App = () => {
  return (
    <StyledApp>
      <DAppProvider config={config}>
        <Router>
          <Header />
          <Switch>
            <Route path="/another">
              <AnotherPage />
            </Route>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route>
              <NotFoundPage />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </DAppProvider>
    </StyledApp>
  );
};

export default App;
