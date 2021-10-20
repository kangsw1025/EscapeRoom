import React from "react";
import styled from "styled-components";

const MainDiv = styled.div`
  width: 90%;
  overflow-x: hidden;
  overflow-y: auto;
`;

function Main({ children }) {
  return <MainDiv>{children}</MainDiv>;
}

export default Main;
