import { collection, onSnapshot, query, where } from "firebase/firestore";
import React, { useCallback, useState } from "react";
import styled from "styled-components";
import BookListView from "../components/BookListView";
import {
  InputBody,
  InputForm,
  InputLine,
  InputTitle,
  TextInput,
} from "../css/FormStyledComponents";
import { dbService } from "../firebase";
import MainContainer from "../components/MainContainer";
import { Header } from "../css/StepStyledComponents";

export const Button = styled.button`
  width: 150px;
  height: 40px;
  border-radius: 50px;
  border: none;
  font-size: 1.25rem;
  cursor: pointer;
  margin-top: 40px;
  background: #d5c2ee;
  color: white;
  :hover {
    background: #a390ee;
  }
`;

function BookCheckView() {
  const [booker, setBooker] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [bookList, setBookList] = useState([]);
  const onChange = useCallback(e => {
    if (e.target.name === "booker") {
      setBooker(e.target.value);
    } else if (e.target.name === "email") {
      setEmail(e.target.value);
    } else if (e.target.name === "password") {
      setPassword(e.target.value);
    }
  }, []);

  const onClickCheck = useCallback(() => {
    setBookList([]);
    const q = query(
      collection(dbService, booker),
      where("email", "==", email),
      where("password", "==", password)
    );

    const unsubscribe = onSnapshot(q, querySnapshot => {
      const newArray = querySnapshot.docs.map(doc => {
        const docId = doc.id;
        const obj = doc.data();
        return [obj.title, obj.date, obj.bookTime, obj.id, obj.booker, docId];
      });
      setBookList(newArray);
    });

    return () => {
      unsubscribe();
    };
  }, [booker, email, password]);
  return (
    <MainContainer>
      <Header>예약 확인하기</Header>
      <InputForm style={{ borderTop: "2px #a390ee solid" }}>
        <InputLine>
          <InputTitle>예약자</InputTitle>
          <InputBody>
            <TextInput
              type="text"
              name="booker"
              value={booker}
              onChange={onChange}
              autocomplete="off"
            />
          </InputBody>
        </InputLine>
        <InputLine>
          <InputTitle>Email</InputTitle>
          <InputBody>
            <TextInput
              type="email"
              name="email"
              value={email}
              onChange={onChange}
              autocomplete="off"
            />
          </InputBody>
        </InputLine>
        <InputLine>
          <InputTitle>비밀 번호</InputTitle>
          <InputBody>
            <TextInput
              type="password"
              name="password"
              value={password}
              onChange={onChange}
              autocomplete="off"
            />
          </InputBody>
        </InputLine>
        <InputLine>
          <InputTitle>예약 현황</InputTitle>
          <InputBody>
            {bookList.map((book, index) => (
              <BookListView book={book} key={index} />
            ))}
          </InputBody>
        </InputLine>
      </InputForm>
      <Button onClick={onClickCheck}>예약 조회</Button>
    </MainContainer>
  );
}

export default BookCheckView;
