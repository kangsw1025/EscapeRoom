import React from "react";
import styled from "styled-components";
import MainContainer from "../components/MainContainer";
import Sidebar from "../components/Sidebar";
import PublicContainer from "../components/PublicContainer";
import CautionContainer from "../components/CautionContainer";
import IntroduceContainer from "../components/IntroduceContainer";
import ThemaContainer from "../components/ThemaContainer";

const MainBG = styled.div`
  position: relative;
  left: 0;
  top: 0;
  width: 100%;
  min-width: calc(19.2px * 86);
  min-height: calc(10.8px * 80);
  background-color: #fdf4e3;
  background-image: url("https://user-images.githubusercontent.com/62426665/139088792-42ba7360-57ac-4fbd-b4b7-6fe909826692.png");
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
        <ThemaContainer />
        <div className="map"></div>
      </MainContainer>
    </PublicContainer>
  );
}

export default Home;
