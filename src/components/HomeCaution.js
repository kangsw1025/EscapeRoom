import React from "react";
import styled from "styled-components";

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
  letter-spacing: -3px;
`;

const HeaderText = styled.p`
  font-size: 32px;
  margin-top: 5px;
`;

const CautionContainer = styled.div`
  width: 80%;
  min-width: calc(19.2px * 70);
  min-height: calc(10.8px * 80);
  padding: 100px 0;
  display: flex;
  flex-direction: column;

  div:nth-child(n) {
    margin: 0 25px;
  }

  div:nth-child(odd) {
    justify-content: flex-end;
    margin-top: 30px;
    margin-bottom: 30px;
    text-align: right;
  }

  div:nth-child(1) {
    justify-content: center;
    flex-direction: row-reverse;
    margin: 0 0 75px;
  }
`;

const Caution = styled.div`
  width: 100%;
  height: 150px;
  min-height: 150px;
  display: flex;
`;

const CautionImg = styled.div`
  width: 150px;
  height: 150px;
  background-size: 150px 150px;
  padding: 0;
`;

const CautionText = styled.div`
  font-size: 20px;
  line-height: 2rem;
  padding: 20px 0;
  letter-spacing: -2px;
`;

export default () => {
  return (
    <CautionContainer>
      <Header>
        <HeaderText>주의사항</HeaderText>
      </Header>
      <Caution>
        <CautionImg
          style={{
            backgroundImage:
              "url(https://user-images.githubusercontent.com/62426665/138833593-2b8e3743-07fd-45f0-9c16-17206aa92bb4.png)",
          }}
        />
        <CautionText>
          원활한 진행을 위해 게임에 관한 안내가 이루어 집니다
          <br />
          <span style={{ color: "red" }}>시작시간 10분 전까지 매장에 도착</span>
          해 주세요
          <br />
          늦게 도착하시는 경우, 플레이 시간이 차감될 수 있습니다
        </CautionText>
      </Caution>
      <Caution>
        <CautionText>
          자극적이거나 선정적인 테마의 경우
          <br />
          <span style={{ color: "red" }}>노약자, 임산부, 어린이</span> 등의
          참여가 제한될 수 있습니다
          <br />
          또한, 밀폐된 공간이므로 폐쇄공포증 환자의 경우{" "}
          <span style={{ color: "red" }}>출입을 자제</span>하는 것이 좋습니다
        </CautionText>
        <CautionImg
          style={{
            backgroundImage:
              "url(https://user-images.githubusercontent.com/62426665/138833628-0d4488a6-daa4-48d6-b468-e8663d1ff827.png)",
          }}
        />
      </Caution>
      <Caution>
        <CautionImg
          style={{
            backgroundImage:
              "url(https://user-images.githubusercontent.com/62426665/138833689-db73dc28-695a-4582-890a-ca701b49dbdf.png)",
          }}
        />
        <CautionText>
          손님들의 재미있는 플레이를 위하여{" "}
          <span style={{ color: "red" }}>
            사진촬영 및 스포일러가 엄격히 제한
          </span>
          됩니다
          <br />
          휴대폰 및 전자기기는 플레이 전 직원의 안내에 따라 캐비닛에 보관하여
          주세요
          <br />
          만일,{" "}
          <span style={{ color: "red" }}>
            휴대폰 소지 및 촬영이 발각될 경우 카페 이용에 불이익
          </span>
          이 따를 수 있습니다
        </CautionText>
      </Caution>
      <Caution>
        <CautionText>
          방 안의 모든 문제들은{" "}
          <span style={{ color: "red" }}>작은 힘으로도 충분히 해결</span>
          하실 수 있습니다
          <br />
          위험 물품은 반입이 금지되며, 높은 곳이나 전선, 소화기 등에는 단서가
          숨겨져 있지 않습니다
          <br />큰 힘을 가하여{" "}
          <span style={{ color: "red" }}>
            소품이 파손 되었을 시 손해배상이 청구
          </span>
          될 수 있습니다
        </CautionText>
        <CautionImg
          style={{
            backgroundImage:
              "url(https://user-images.githubusercontent.com/62426665/138833697-1f3e5391-cad4-4328-be7c-45caca17f22a.png)",
          }}
        />
      </Caution>
    </CautionContainer>
  );
};
