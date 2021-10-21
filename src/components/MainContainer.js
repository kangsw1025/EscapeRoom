import React from "react";
import styled from "styled-components";

const MainDiv = styled.div`
  width: 86%;
  overflow-x: hidden;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function MainContainer({ children }) {
  return <MainDiv>{children}</MainDiv>;
}

export default MainContainer;
