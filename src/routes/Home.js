import React from "react";
import styled from "styled-components";
import greetingImg from "../images/greeting.png";
import Main from "../components/Main";
import Sidebar from "../components/Sidebar";
import PublicContainer from "../components/PublicContainer";

const Greeting = styled.div`
  position: relative;
  left: 0;
  top: 0;
  width: 100%;
  min-width: calc(19.2px * 86);
  height: 75vh;
  min-height: calc(10.8px * 75);
  background-image: url(${greetingImg});
  background-size: 100% 100%;
  background-position: center;
`;

const Introduce = styled.div`
  width: 100%;
  height: 80vh;
  margin: 0;
  padding: 100px 0;
  background: #ffb6c1;
`;

function Home() {
  return (
    <PublicContainer>
      <Sidebar />
      <Main>
        <Greeting />
        <Introduce></Introduce>
        <div className="caution"></div>
        <div className="themaContainer"></div>
        <div className="map"></div>
      </Main>
    </PublicContainer>
  );
}

export default Home;
