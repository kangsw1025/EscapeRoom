import React from "react";
import styled from "styled-components";
import greetingImg from "../images/greeting.png";
import Main from "../components/Main";

const Greeting = styled.div`
  position: relative;
  left: 0;
  top: 0;
  width: 100%;
  min-width: calc(19.2px * 90);
  height: 80vh;
  min-height: calc(10.8px * 80);
  background-image: url(${greetingImg});
  background-size: 100% 100%;
  background-position: center;
`;

function Home() {
  return (
    <Main>
      <Greeting />
      <div className="introduce"></div>
      <div className="caution"></div>
      <div className="themaContainer"></div>
      <div className="map"></div>
    </Main>
  );
}

export default Home;
