import { deleteDoc, doc } from "firebase/firestore";
import React from "react";
import styled from "styled-components";
import { dbService } from "../firebase";

const Button = styled.button`
  margin-left: 10px;
  background: #a390ee;
  color: white;
  border: none;
  border-radius: 20px;

  :hover {
    background: gray;
  }
`;

function BookListView({ book }) {
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

  return (
    <div>
      테마 : {title} 날짜 : {date} 예약 시간 : {time}
      <Button onClick={onClickCancel}>취소하기</Button>
    </div>
  );
}

export default BookListView;
