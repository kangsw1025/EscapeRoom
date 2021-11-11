import React from "react";
import { useSelector } from "react-redux";
import {
  PublicStepContainer,
  StepContainer,
  StepBox,
  NowStepImage,
  NowStepText,
  StepArrow,
  StepImage,
  StepText,
} from "../css/StepStyledComponents";
import styled from "styled-components";
import {
  InputBody,
  InputForm,
  InputLine,
  InputTitle,
} from "../css/FormStyledComponents";
import { useHistory } from "react-router";

const InformationContainer = styled.div`
  width: 100%;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const InformationHeader = styled.div`
  height: 100px;
  font-size: 12px;
  color: gray;
  text-align: center;
`;

const MainBtn = styled.div`
  width: 150px;
  height: 50px;
  background: #a390ee;
  color: white;
  font-size: 24px;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

function BookThirdStep() {
  const { date, thema, bookTime, booker, email, personnel, cost, message } =
    useSelector(state => ({
      date: state.book.date,
      thema: state.book.thema,
      bookTime: state.book.bookTime,
      booker: state.book.booker,
      email: state.book.email,
      personnel: state.book.personnel,
      cost: state.book.cost,
      message: state.book.message,
    }));

  const history = useHistory();
  const onClickHome = () => {
    history.push("/");
  };

  return (
    <PublicStepContainer>
      <StepContainer>
        <StepBox>
          <StepImage>STEP 1</StepImage>
          <StepText>날짜/테마 선택</StepText>
        </StepBox>
        <StepArrow />
        <StepBox>
          <StepImage>STEP 2</StepImage>
          <StepText>정보 입력</StepText>
        </StepBox>
        <StepArrow />
        <StepBox>
          <NowStepImage>STEP 3</NowStepImage>
          <NowStepText>예약 완료</NowStepText>
        </StepBox>
      </StepContainer>
      <InformationContainer>
        <InformationHeader>
          <div
            style={{ fontSize: "32px", color: "#a390ee", marginBottom: "10px" }}
          >
            예약이 완료되었습니다
          </div>
          15분전까지 꼭 와주시길 부탁드립니다
        </InformationHeader>
        <InputForm style={{ borderTop: "2px solid #a390ee" }}>
          <InputLine>
            <InputTitle>테마 (Room)</InputTitle>
            <InputBody>{thema.title}</InputBody>
          </InputLine>
          <InputLine>
            <InputTitle>예약일 (Date)</InputTitle>
            <InputBody>{date}</InputBody>
          </InputLine>
          <InputLine>
            <InputTitle>예약 시간</InputTitle>
            <InputBody>{bookTime}</InputBody>
          </InputLine>
          <InputLine>
            <InputTitle>인원 (Player)</InputTitle>
            <InputBody>{personnel}명</InputBody>
          </InputLine>
          <InputLine>
            <InputTitle>예약자</InputTitle>
            <InputBody>{booker}</InputBody>
          </InputLine>
          <InputLine>
            <InputTitle>E-mail</InputTitle>
            <InputBody>{email}</InputBody>
          </InputLine>
          <InputLine>
            <InputTitle>참가 요금</InputTitle>
            <InputBody>{cost}</InputBody>
          </InputLine>
          <InputLine>
            <InputTitle>결제방식 선택</InputTitle>
            <InputBody>현장 결제</InputBody>
          </InputLine>
          <InputLine>
            <InputTitle>전달 메세지</InputTitle>
            <InputBody>{message}</InputBody>
          </InputLine>
        </InputForm>
      </InformationContainer>
      <MainBtn onClick={onClickHome}>메인으로</MainBtn>
    </PublicStepContainer>
  );
}

export default BookThirdStep;
