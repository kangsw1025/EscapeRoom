import React from "react";
import styled from "styled-components";
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
  const { title, imgUrl, level, playTime, contents, bookTime, isBooked } =
    thema;
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
          {bookTime.map(booktime => (
            <BookTimeView
              thema={thema}
              time={booktime}
              isBooked={Boolean(isBooked[booktime])}
            />
          ))}
        </PlayTimeContainer>
      </ThemaInfo>
    </Container>
  );
}

export default BookThemaView;
