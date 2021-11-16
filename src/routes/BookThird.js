import React from "react";
import MainContainer from "../components/MainContainer";
import { PublicHeader } from "../css/StepStyledComponents";
import BookThirdStep from "../components/BookThirdStep";

function BookThird() {
  return (
    <MainContainer background="#f8f9fa">
      <PublicHeader />
      <BookThirdStep />
    </MainContainer>
  );
}

export default BookThird;
