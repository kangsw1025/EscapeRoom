import React from "react";
import styled from "styled-components";
import MainContainer from "../components/MainContainer";
import Sidebar from "../components/Sidebar";
import PublicContainer from "../components/PublicContainer";
import CautionContainer from "../components/CautionContainer";
import IntroduceContainer from "../components/IntroduceContainer";

const MainBG = styled.div`
  position: relative;
  left: 0;
  top: 0;
  width: 100%;
  min-width: calc(19.2px * 86);
  min-height: calc(10.8px * 80);
  background-image: url("https://user-images.githubusercontent.com/62426665/138460223-28f329a8-1886-4547-bbaf-8be8b2e8385b.jpg");
  background-size: 100% 100%;
  background-position: center;
`;

function Home() {
  return (
    <PublicContainer>
      <Sidebar />
      <MainContainer>
        <MainBG />
        <IntroduceContainer />
        <CautionContainer />
        <div className="Thema"></div>
        <div className="map"></div>
      </MainContainer>
    </PublicContainer>
  );
}

export default Home;
