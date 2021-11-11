import React, { useEffect } from "react";
import styled from "styled-components";
import MainContainer from "../components/MainContainer";
import HomeCaution from "../components/HomeCaution";
import HomeIntroduce from "../components/HomeIntroduce";
import HomeThema from "../components/HomeThema";
import HomeMap from "../components/HomeMap";
import { useDispatch } from "react-redux";
import { setReset } from "../modules/book";

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
  const dispatch = useDispatch();
  const onSetReset = () => dispatch(setReset());

  useEffect(() => {
    onSetReset();
  }, []);

  return (
    <MainContainer>
      <MainBG />
      <HomeIntroduce />
      <HomeCaution />
      <HomeThema />
      <HomeMap />
    </MainContainer>
  );
}

export default Home;
