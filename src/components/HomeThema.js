import React from "react";
import styled from "styled-components";
import { ThemaInfo } from "./ThemaInfoes";
import HomeThemaView from "./HomeThemaView";

const ThemaContainer = styled.div`
  width: 100%;
  min-width: calc(19.2px * 70);
  height: auto;
  min-height: calc(108px * 15.5);
  margin: 0;
  padding: 50px 0;
  background: #ffe4e1;
  letter-spacing: -1.5px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
  letter-spacing: -3px;
`;

const HeaderTitle = styled.div`
  font-size: 32px;
  margin-top: 5px;
  margin-bottom: 20px;
  letter-spacing: 7px;
`;

const HeaderBody = styled.div`
  text-align: center;
  font-size: 22px;
  color: #cc6666;
`;

const ThemaBoxes = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: calc(19.2px * 70);
`;

export default () => {
  return (
    <ThemaContainer>
      <Header>
        <HeaderTitle>테 마</HeaderTitle>
        <HeaderBody>
          각 테마 예약하기 버튼을 클릭하면, 온라인 예약이 가능합니다.
          <br />
          검은 자물쇠는 난이도를 나타냅니다.
        </HeaderBody>
      </Header>
      <ThemaBoxes>
        {ThemaInfo.map(info => (
          <HomeThemaView info={info} />
        ))}
      </ThemaBoxes>
    </ThemaContainer>
  );
};
