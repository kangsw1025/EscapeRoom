import React from "react";
import styled from "styled-components";
import MainContainer from "../components/MainContainer";
import Sidebar from "../components/Sidebar";
import PublicContainer from "../components/PublicContainer";

const MainBG = styled.div`
  position: relative;
  left: 0;
  top: 0;
  width: 100%;
  min-width: calc(19.2px * 86);
  height: 75vh;
  min-height: calc(7px * 75);
  background-image: url("https://user-images.githubusercontent.com/62426665/138460223-28f329a8-1886-4547-bbaf-8be8b2e8385b.jpg");
  background-size: 100% 100%;
  background-position: center;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
  letter-spacing: -3px;
`;

const LogoIcon = styled.div`
  width: 54px;
  height: 54px;
  background-size: 100% 100%;
  margin-bottom: 10px;
`;

const HeaderText = styled.p`
  font-size: 32px;
  margin-top: 5px;
`;

const Introduce = styled.div`
  width: 100%;
  min-width: calc(19.2px * 70);
  height: calc(10.8px * 70);
  margin: 0;
  padding: 100px 0;
  background: #ffdeeb;
  letter-spacing: -1.5px;
`;

const IntroduceBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 20px;
  font-family: inherit;
  line-height: inherit;
`;

const IntroduceBodyText = styled.p`
  text-align: center;
  margin-bottom: 30px;
`;

const IntroduceBodyIcons = styled.div`
  width: calc(19.2px * 60);
  height: 373px;
  display: flex;
  justify-content: space-around;
`;
const IntroduceBodyIconBox = styled.div`
  box-sizing: content-box;
  height: 100%;
  width: 33.33333%;
  border: 5px solid darkgray;
  background: white;
  margin: 20px 30px;
`;

function Home() {
  return (
    <PublicContainer>
      <Sidebar />
      <MainContainer>
        <MainBG />
        <Introduce>
          <Header>
            <LogoIcon />
            <HeaderText>
              <span
                style={{
                  color: "red",
                }}
              >
                비밀의 화원
              </span>
              <span> 방탈출이란?</span>
            </HeaderText>
          </Header>
          <IntroduceBody>
            <IntroduceBodyText>
              <span>비밀의 화원 방탈출에서 </span>
              <span style={{ color: "red" }}>당신의 상상 속 세계를 현실</span>
              <span>
                로 만나보세요.
                <br />
                여러분이 경험하지 못했던 다양한 분위기의 테마룸을 경험할 수
                있습니다.
              </span>
            </IntroduceBodyText>
            <IntroduceBodyText>
              테마 안에서 플레이어의 다양한 능력을 발휘해,
              <br />
              단서를 조합하고 문제를 해결하며 차근차근 다음 단계로 진행하는
              방식의 게임입니다.
              <br />
              제한 시간 안에 최종단계를 통과하는 것이 여러분의 목표입니다!
            </IntroduceBodyText>
            <IntroduceBodyIcons>
              <IntroduceBodyIconBox>1</IntroduceBodyIconBox>
              <IntroduceBodyIconBox>2</IntroduceBodyIconBox>
              <IntroduceBodyIconBox>3</IntroduceBodyIconBox>
            </IntroduceBodyIcons>
          </IntroduceBody>
        </Introduce>
        <div className="caution"></div>
        <div className="themaContainer"></div>
        <div className="map"></div>
      </MainContainer>
    </PublicContainer>
  );
}

export default Home;
