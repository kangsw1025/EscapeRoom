import React from "react";
import styled from "styled-components";

const MainDiv = styled.div`
  width: 86%;
  overflow-x: hidden;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${props => props.background || "white"};
`;

function MainContainer({ background, children }) {
  return <MainDiv background={background}>{children}</MainDiv>;
}

export default MainContainer;
