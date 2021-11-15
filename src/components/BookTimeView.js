import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { setBookTime, setThema } from "../modules/book";

const BookBox = styled.div`
  width: 100px;
  height: 100px;
  background: ${props => (props.isBooked ? "darkgray" : "#D5C2EE")};
  color: ${props => (props.isBooked ? "#f1f3f5" : "white")};
  padding: 5px 0px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 15px;
  margin-right: 15px;
  cursor: ${props => (props.isBooked ? "" : "pointer")};
  :hover {
    background: ${props => (props.isBooked ? "" : "#a390ee")};
    color: ${props => (props.isBooked ? "" : "#f1f3f5")};
  }
`;

const Header = styled.div`
  font-size: 24px;
`;

function BookTimeView({ thema, time, isBooked }) {
  const dispatch = useDispatch();
  const onSetBookTime = booktime => dispatch(setBookTime(booktime));
  const onSetThema = thema => dispatch(setThema(thema));
  const history = useHistory();

  const onClick = () => {
    onSetThema(thema);
    onSetBookTime(time);
    history.push("/book_2");
  };

  return (
    <BookBox isBooked={isBooked} onClick={isBooked ? null : onClick}>
      <Header>{time}</Header>
      <div>{isBooked ? "예약마감" : "예약가능"}</div>
    </BookBox>
  );
}

export default BookTimeView;
