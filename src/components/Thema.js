import React from "react";
import styled from "styled-components";
import ThemaLevel from "./ThemaLevel";
import ThemaPlayTime from "./ThemaPlayTime";

const ThemaBox = styled.div`
  width: 300px;
  min-width: 300px;
  height: 600px;
  min-height: 600px;
  margin: 50px 50px;
  justify-content: center;
`;

const ThemaImg = styled.div`
  width: 300px;
  height: 300px;
  margin: 0;
  margin-bottom: 10px;
  padding: 0;
  background-size: 100% 100%;
`;

const ThemaInfo = styled.div`
  width: 300px;
  height: 200px;
  padding-top: 15px;
`;

const ThemaTitle = styled.div`
  text-align: center;
  font-size: 30px;
  margin-bottom: 20px;
  letter-spacing: 5px;
`;

const ThemaState = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-bottom: 20px;
  border-bottom: 1px gray dashed;
`;

const ThemaContents = styled.div`
  text-align: center;
  padding-top: 20px;
  font-size: 18px;
`;

const ThemaBook = styled.div`
  width: 50%;
  height: 40px;
  border-radius: 10px;
  font-size: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-left: auto;
  margin-right: auto;
  background: #ffc6c3;
  color: white;
  :hover {
    background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1));
  }
`;

function Thema({ info }) {
  const { title, imgUrl, level, playTime, contents } = info;

  return (
    <ThemaBox>
      <ThemaImg style={{ background: `url(${imgUrl})` }} />
      <ThemaInfo>
        <ThemaTitle>{title}</ThemaTitle>
        <ThemaState>
          <ThemaLevel level={parseInt(level)} />
          <ThemaPlayTime playTime={playTime} />
        </ThemaState>
        <ThemaContents>{contents}</ThemaContents>
      </ThemaInfo>
      <ThemaBook>예약하기</ThemaBook>
    </ThemaBox>
  );
}

export default Thema;
