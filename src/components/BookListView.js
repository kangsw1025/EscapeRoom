import { deleteDoc, doc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { dbService } from "../firebase";

const Button = styled.button`
  margin-left: 10px;
  background: #d5c2ee;
  color: white;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  :hover {
    background: #a390ee;
  }
`;

const PastButton = styled.button`
  margin-left: 10px;
  background: gray;
  color: white;
  border: none;
  border-radius: 20px;
`;

function BookListView({ book }) {
  const [isPast, setIsPast] = useState(false);
  const title = book[0];
  const date = book[1];
  const time = book[2];
  const id = book[3];
  const name = book[4];
  const docId = book[5];

  const onClickCancel = async () => {
    const ok = window.confirm("예약 취소하시겠습니까?");
    if (ok) {
      await deleteDoc(doc(dbService, title, `${id}`));
      await deleteDoc(doc(dbService, name, `${docId}`));
    }
  };

  useEffect(() => {
    const today = new Date().toLocaleDateString();
    const currentTime = new Date().toLocaleTimeString();
    const currentDate = parseInt(
      today.slice(0, 4) + today.slice(6, 8) + today.slice(10, 12)
    );
    const selectedDate = parseInt(date.split("-").join(""));
    if (currentDate >= selectedDate) {
      if (currentDate === selectedDate) {
        const selected =
          parseInt(time.slice(0, 2)) * 60 + parseInt(time.slice(3, 5));
        const am = currentTime.slice(0, 2) === "오후" ? 720 : 0;
        const h =
          parseInt(currentTime.slice(3, 5)) === 12
            ? 0
            : parseInt(currentTime.slice(3, 5));
        const m = parseInt(currentTime.slice(6, 8));
        const current = am + h * 60 + m;
        if (current >= selected) setIsPast(true);
      } else {
        setIsPast(true);
      }
    }
  }, []);

  return (
    <div>
      테마 : {title} 날짜 : {date} 예약 시간 : {time}
      {isPast ? (
        <PastButton>예약 취소</PastButton>
      ) : (
        <Button onClick={onClickCancel}>예약 취소</Button>
      )}
    </div>
  );
}

export default BookListView;
