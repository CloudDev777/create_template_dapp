import React from "react";
import styled from "styled-components";

const StyledHomePage = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  font-size: 3rem;
  padding: 3rem;
  border: solid 1px orange;
`;

const HomePage = () => {
  return <StyledHomePage>pages/home-page/HomePage.tsx</StyledHomePage>;
};

export default HomePage;
