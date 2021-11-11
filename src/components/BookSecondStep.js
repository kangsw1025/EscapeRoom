import React from "react";
import BookInputForm from "./BookInputForm";
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

function BookSecondStep() {
  return (
    <PublicStepContainer>
      <StepContainer
        style={{ borderBottom: "2px solid #a390ee", paddingBottom: "40px" }}
      >
        <StepBox>
          <StepImage>STEP 1</StepImage>
          <StepText>날짜/테마 선택</StepText>
        </StepBox>
        <StepArrow />
        <StepBox>
          <NowStepImage>STEP 2</NowStepImage>
          <NowStepText>정보 입력</NowStepText>
        </StepBox>
        <StepArrow />
        <StepBox>
          <StepImage>STEP 3</StepImage>
          <StepText>예약 완료</StepText>
        </StepBox>
      </StepContainer>
      <BookInputForm />
    </PublicStepContainer>
  );
}

export default BookSecondStep;
