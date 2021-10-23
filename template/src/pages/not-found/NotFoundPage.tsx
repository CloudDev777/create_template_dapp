import React from "react";
import styled from "styled-components";

const StyledNotFoundPage = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  font-size: 3rem;
  padding: 3rem;
  border: solid 1px red;
`;

const NotFoundPage = () => {
  return (
    <StyledNotFoundPage>pages/not-found/NotFoundPage.tsx</StyledNotFoundPage>
  );
};

export default NotFoundPage;
