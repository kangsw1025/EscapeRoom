import React from "react";
import MainContainer from "../components/MainContainer";
import { Header } from "../css/StepStyledComponents";
import BookSecondStep from "../components/BookSecondStep";

function BookSecond() {
  return (
    <MainContainer background="#f8f9fa">
      <Header>테마 예약하기</Header>
      <BookSecondStep />
    </MainContainer>
  );
}

export default BookSecond;
