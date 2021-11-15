import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setBooker,
  setCost,
  setEmail,
  setMessage,
  setPassword,
  setPersonnel,
  setReset,
} from "../modules/book";
import { useHistory } from "react-router";
import { dbService } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import {
  Button,
  ButtonConainter,
  InputBody,
  InputForm,
  InputLine,
  InputTitle,
  Select,
  TextInput,
} from "../css/FormStyledComponents";

function BookInputForm() {
  const {
    date,
    thema,
    bookTime,
    booker,
    email,
    personnel,
    cost,
    password,
    message,
  } = useSelector(state => ({
    date: state.book.date,
    thema: state.book.thema,
    bookTime: state.book.bookTime,
    booker: state.book.booker,
    email: state.book.email,
    personnel: state.book.personnel,
    cost: state.book.cost,
    password: state.book.password,
    message: state.book.message,
  }));
  const dispatch = useDispatch();
  const onSetBooker = booker => dispatch(setBooker(booker));
  const onSetEmail = email => dispatch(setEmail(email));
  const onSetPersonnel = personnel => dispatch(setPersonnel(personnel));
  const onSetCost = cost => dispatch(setCost(cost));
  const onSetPassWord = password => dispatch(setPassword(password));
  const onSetMessage = message => dispatch(setMessage(message));
  const onSetReset = () => dispatch(setReset());
  const history = useHistory();

  const onClick = e => {
    onSetPersonnel(parseInt(e.target.value) / thema.price);
    onSetCost(e.target.value);
  };

  const onChange = e => {
    if (e.target.name === "booker") {
      onSetBooker(e.target.value);
    } else if (e.target.name === "email") {
      onSetEmail(e.target.value);
    } else if (e.target.name === "password") {
      onSetPassWord(e.target.value);
    } else if (e.target.name === "message") {
      onSetMessage(e.target.value);
    }
  };

  const onClickBook = async () => {
    if (booker === undefined) {
      window.alert("예약자 명을 입력해 주세요");
    } else if (email === undefined || email.split("@").length < 2) {
      window.alert("이메일을 입력해 주세요");
    } else if (password === undefined) {
      window.alert("비밀번호를 입력해 주세요");
    } else if (password.length < 4) {
      window.alert("비밀번호는 최소 4자리 이상 입력해 주세요");
    } else {
      const infoObj = {
        date,
        title: thema.title,
        bookTime,
        booker,
        email,
        personnel,
        cost,
        password,
        message: message ? message : " ",
      };

      try {
        const docRef = await addDoc(
          collection(dbService, thema.title),
          infoObj
        );
        infoObj.id = docRef.id;
        const docRef2 = await addDoc(
          collection(dbService, infoObj.booker),
          infoObj
        );
        history.push("/book_3");
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    }
  };

  const onClickCancle = () => {
    onSetReset();
    history.push("/book_1");
  };

  useEffect(() => {
    onSetPersonnel(1);
    onSetCost(thema.price);
  }, []);

  return (
    <InputForm>
      <InputLine>
        <InputTitle>테마 (Room)</InputTitle>
        <InputBody>{thema.title}</InputBody>
      </InputLine>
      <InputLine>
        <InputTitle>예약일 (Date)</InputTitle>
        <InputBody>{date}</InputBody>
      </InputLine>
      <InputLine>
        <InputTitle>예약 시간</InputTitle>
        <InputBody>{bookTime}</InputBody>
      </InputLine>
      <InputLine>
        <InputTitle>게임 시간</InputTitle>
        <InputBody>{thema.playTime} 분</InputBody>
      </InputLine>
      <InputLine>
        <InputTitle>인원 (Players)</InputTitle>
        <InputBody>
          <form>
            <Select name="personnel" onClick={onClick}>
              <option value={parseInt(thema.price) * 1} onClick={onClick}>
                1명 ({parseInt(thema.price) * 1}원)
              </option>
              <option value={thema.price * 2} onClick={onClick}>
                2명 ({parseInt(thema.price) * 2}원)
              </option>
              <option value={thema.price * 3} onClick={onClick}>
                3명 ({parseInt(thema.price) * 3}원)
              </option>
              <option value={thema.price * 4} onClick={onClick}>
                4명 ({parseInt(thema.price) * 4}원)
              </option>
            </Select>
          </form>
        </InputBody>
      </InputLine>
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
        <InputTitle>E-Mail</InputTitle>
        <InputBody>
          <TextInput
            type="text"
            name="email"
            value={email}
            onChange={onChange}
            autocomplete="off"
          />
        </InputBody>
      </InputLine>
      <InputLine>
        <InputTitle>참가 요금</InputTitle>
        <InputBody>{cost}원</InputBody>
      </InputLine>
      <InputLine>
        <InputTitle>결제방식 선택</InputTitle>
        <InputBody>
          <input type="checkbox" value="현장 결제" checked />
          현장 결제
        </InputBody>
      </InputLine>
      <InputLine>
        <InputTitle>예약 비밀번호</InputTitle>
        <InputBody>
          <TextInput
            type="text"
            name="password"
            value={password}
            onChange={onChange}
            minLength="4"
            autocomplete="off"
            required
          />
        </InputBody>
      </InputLine>
      <InputLine>
        <InputTitle>전달 메세지</InputTitle>
        <InputBody>
          <TextInput
            type="text"
            name="message"
            value={message}
            onChange={onChange}
            style={{ width: "500px" }}
            autocomplete="off"
          />
        </InputBody>
      </InputLine>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <ButtonConainter>
          <Button
            style={{ color: "white", backgroundColor: "gray" }}
            onClick={onClickCancle}
          >
            취소
          </Button>
          <Button
            style={{ color: "white", backgroundColor: "#a390ee" }}
            onClick={onClickBook}
          >
            예약하기
          </Button>
        </ButtonConainter>
      </div>
    </InputForm>
  );
}

export default BookInputForm;
