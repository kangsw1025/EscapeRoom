import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  overflow: hidden;
  width: 100%;
  height: 100vh;
`;

function PublicContainer({ children }) {
  return <Container>{children}</Container>;
}

export default PublicContainer;
