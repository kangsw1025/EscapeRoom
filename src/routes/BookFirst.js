import React, { useEffect } from "react";
import MainContainer from "../components/MainContainer";
import { Header } from "../css/StepStyledComponents";
import BookFirstStep from "../components/BookFirstStep";
import { useDispatch } from "react-redux";
import { setReset } from "../modules/book";

function BookFirst({ match }) {
  const { title } = match.params;
  const dispatch = useDispatch();
  const onSetReset = () => dispatch(setReset());

  useEffect(() => {
    onSetReset();
  }, []);

  return (
    <MainContainer background="#f8f9fa">
      <Header>테마 예약하기</Header>
      <BookFirstStep title={title} />
    </MainContainer>
  );
}

export default BookFirst;
