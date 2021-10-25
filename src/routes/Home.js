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
  width: 140px;
  height: 150px;
  background-image: url("https://user-images.githubusercontent.com/62426665/138452293-fc4ed240-cdc4-442d-b86f-96f49b82d5b4.png");
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
  height: calc(10.8px * 90);
  margin: 0;
  color: white;
  padding: 50px 0;
  background: #8c8cff;
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

const IntroduceBodyText = styled.div`
  text-align: center;
  margin-bottom: 30px;
  line-height: 2rem;
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
  color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
`;

const IntroduceBodyIcon = styled.div`
  height: 255px;
  width: 300px;
  background-size: 100% 255px;
`;

const CautionContainer = styled.div`
  width: 80%;
  min-width: calc(19.2px * 70);
  min-height: calc(10.8px * 70);
  margin: 0 100px;
  padding: 100px 0;
  display: flex;
  flex-direction: column;

  div:nth-child(odd) {
    justify-content: flex-end;
    margin-top: 100px;
    margin-bottom: 100px;
  }

  div:nth-child(1) {
    justify-content: center;
    margin: 0 0 200px;
  }
`;

const Caution = styled.div`
  width: 100%;
  display: flex;
`;

function Home() {
  return (
    <PublicContainer>
      <Sidebar />
      <MainContainer>
        <MainBG />
        <Introduce id="introduce">
          <Header>
            <LogoIcon />
            <HeaderText>
              <span
                style={{
                  color: "#FF0000",
                }}
              >
                방탈출
              </span>
              이란?
            </HeaderText>
          </Header>
          <IntroduceBody>
            <IntroduceBodyText>
              방탈출에서
              <span style={{ color: "#FF0000" }}>
                당신의 상상 속 세계를 현실
              </span>
              로 만나보세요
              <br />
              여러분이 경험하지 못했던 다양한 분위기의 테마룸을 경험할 수
              있습니다
            </IntroduceBodyText>
            <IntroduceBodyText>
              테마 안에서 플레이어의 다양한 능력을 발휘해
              <br />
              단서를 조합하고 문제를 해결하며 차근차근 다음 단계로 진행하는
              방식의 게임입니다
              <br />
              제한 시간 안에 최종단계를 통과하는 것이 여러분의 목표입니다
            </IntroduceBodyText>
            <IntroduceBodyIcons>
              <IntroduceBodyIconBox>
                <IntroduceBodyIcon
                  style={{
                    backgroundImage:
                      "url(https://user-images.githubusercontent.com/62426665/138724780-c9f685ac-e1ea-4508-b997-e26403e65870.png)",
                  }}
                />
                <IntroduceBodyText>
                  당신은 테마 속의 <span style={{ color: "red" }}>주인공</span>{" "}
                  입니다
                  <br />
                  단서를 발견해 제한시간 안에
                  <br />
                  <span style={{ color: "red" }}>탈출</span>
                  하세요
                </IntroduceBodyText>
              </IntroduceBodyIconBox>
              <IntroduceBodyIconBox>
                <IntroduceBodyIcon
                  style={{
                    backgroundImage:
                      "url(https://user-images.githubusercontent.com/62426665/138727797-3a4db7e2-da00-4b84-b7c3-4a51b16b2d8c.png)",
                  }}
                />
                <IntroduceBodyText>
                  다양한 장르의 테마를 <br />
                  자유롭게 선택하여
                  <br />
                  각각의 스토리를 체험해 보세요
                </IntroduceBodyText>
              </IntroduceBodyIconBox>
              <IntroduceBodyIconBox>
                <IntroduceBodyIcon
                  style={{
                    backgroundImage:
                      "url(https://user-images.githubusercontent.com/62426665/138728474-dfda4c7f-7858-4bd0-926a-f2ecc250d0ab.png)",
                  }}
                />
                <IntroduceBodyText>
                  팀원들과 역할을 분담하고
                  <br /> 협동심을 발휘해 단서를 획득하여
                  <br />
                  <span style={{ color: "red" }}>탈출</span>에 성공하세요
                </IntroduceBodyText>
              </IntroduceBodyIconBox>
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
