import { collection, onSnapshot, query, where } from "firebase/firestore";
import React from "react";
import { useCallback } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { dbService } from "../firebase";
import { setBook, setReset } from "../modules/thema";
import BookTimeView from "./BookTimeView";

const Container = styled.div`
  width: calc(19.2px * 60);
  height: 400px;
  margin: 50px;
  padding: 20px 10px;
  border-bottom: 1px dashed gray;
  display: flex;
  flex-direction: ${props => (props.index % 2 === 0 ? "row" : "row-reverse")};
  text-align: ${props => (props.index % 2 === 0 ? "left" : "right")};
`;

const Image = styled.div`
  width: 360px;
  height: 360px;
  margin: 20px 20px;
  background: url(${props => props.url});
  background-size: 100% 100%;
`;

const ThemaInfo = styled.span`
  width: 720px;
  height: 360px;
`;

const PlayTimeContainer = styled.div`
  width: 700px;
  height: 240px;
  margin: 5px 0px 20px;
  padding: 30px 0px;
  display: flex;
  flex-wrap: wrap;
`;

function BookThemaView({ thema, index }) {
  const { title, imgUrl, level, playTime, contents, isBooked } = thema;
  const { date } = useSelector(state => ({
    date: state.book.date,
  }));
  const dispatch = useDispatch();
  const onSetBook = useCallback(
    (title, time) => dispatch(setBook(title, time)),
    [dispatch]
  );
  const timeToMinute = useCallback(time => {
    const h = parseInt(time.slice(0, 2));
    return (h === 12 ? 0 : h) * 60 + parseInt(time.slice(3, 5));
  }, []);
  const onReset = useCallback(() => dispatch(setReset()), [dispatch]);

  const formatDate = useCallback(date => {
    const year = date.getFullYear();
    var month = date.getMonth() + 1;
    month = month < 10 ? month + 10 : month;
    var day = date.getDate();
    day = day < 10 ? day + 10 : day;
    return year + "-" + month + "-" + day;
  }, []);

  useEffect(() => {
    if (date == null) return;
    onReset();
    const q = query(collection(dbService, title), where("date", "==", date));
    const unsubscribe = onSnapshot(q, querySnapshot => {
      const newArray = querySnapshot.docs.map(doc => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });

      newArray.forEach(array => {
        onSetBook(array.title, array.bookTime);
      });

      const today = formatDate(new Date());
      if (today === date) {
        const nowTimeText = new Date().toLocaleTimeString();
        const nowTime =
          nowTimeText.slice(0, 2) === "오후"
            ? 720 + timeToMinute(nowTimeText.slice(3, 8))
            : timeToMinute(nowTimeText.slice(3, 8));

        isBooked.forEach(array => {
          if (timeToMinute(array.time) < nowTime) {
            onSetBook(title, array.time);
          }
        });
      }
    });
    return () => {
      unsubscribe();
    };
  }, [date]);

  return (
    <Container index={index}>
      <Image url={imgUrl} />
      <ThemaInfo>
        <h2>{title}</h2>
        <div style={{ fontSize: "20px", marginBottom: "5px" }}>
          #난이도{level} #{playTime}분
        </div>
        {contents}
        <PlayTimeContainer>
          {isBooked.map((booktime, index) => (
            <BookTimeView
              thema={thema}
              time={booktime.time}
              isBooked={Boolean(booktime.booked)}
              key={index}
            />
          ))}
        </PlayTimeContainer>
      </ThemaInfo>
    </Container>
  );
}

export default BookThemaView;
