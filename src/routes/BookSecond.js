import React from "react";
import MainContainer from "../components/MainContainer";
import { PublicHeader } from "../css/StepStyledComponents";
import BookSecondStep from "../components/BookSecondStep";

function BookSecond() {
  return (
    <MainContainer background="#f8f9fa">
      <PublicHeader />
      <BookSecondStep />
    </MainContainer>
  );
}

export default BookSecond;
