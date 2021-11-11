import React from "react";
import MainContainer from "../components/MainContainer";
import { Header } from "../css/StepStyledComponents";
import BookThirdStep from "../components/BookThirdStep";

function BookThird() {
  return (
    <MainContainer background="#f8f9fa">
      <Header>테마 예약하기</Header>
      <BookThirdStep />
    </MainContainer>
  );
}

export default BookThird;
