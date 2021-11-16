import React, { forwardRef, useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styled from "styled-components";
import {
  PublicStepContainer,
  StepContainer,
  StepBox,
  NowStepImage,
  NowStepText,
  StepArrow,
  StepImage,
  StepText,
} from "../css/StepStyledComponents";
import BookThemaView from "./BookThemaView";
import { addDays } from "date-fns";
import { useDispatch, useSelector } from "react-redux";
import { setDate } from "../modules/book";

const TimeContainer = styled.div`
  width: 100%;
  height: 50px;
  border-bottom: 1px dashed gray;
  display: flex;
  margin-top: 30px;
  margin-bottom: 10px;
`;

const TimeText = styled.div`
  width: 100px;
  border: 1px solid gray;
  height: 20px;
  padding: 5px 0px;
  text-align: center;
  border-right: none;
  background: white;
`;

const ThemaViewContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const DatePickerButton = styled.button`
  background: white;
  height: 32px;
  width: 150px;
  padding: 5px 0px;
  border: 1px solid gray;
  cursor: pointer;
  margin-right: 0px;
  font-size: 20px;
`;

function BookFirstStep({ title }) {
  const [selectDate, setSelectDate] = useState(new Date());
  const { ThemaInfo } = useSelector(state => ({
    ThemaInfo: state.thema,
  }));
  const themas = title
    ? ThemaInfo.filter(thema => thema.title === title)
    : ThemaInfo;

  const CustomInput = forwardRef(({ value, onClick }, ref) => (
    <DatePickerButton onClick={onClick} ref={ref}>
      {value}
    </DatePickerButton>
  ));

  const canBookDays = () => {
    const days = [];
    for (let i = 0; i < 14; i++) {
      days.push(addDays(new Date(), i));
    }
    return days;
  };

  const dispatch = useDispatch();
  const onSetDate = date => dispatch(setDate(date));
  const onChangeDate = date => {
    setSelectDate(date);
    onSetDate(JSON.stringify(date).slice(1, 11));
  };

  useEffect(async () => {
    await setSelectDate(new Date());
    onSetDate(JSON.stringify(selectDate).slice(1, 11));
  }, []);

  return (
    <PublicStepContainer>
      <StepContainer>
        <StepBox>
          <NowStepImage>STEP 1</NowStepImage>
          <NowStepText>날짜/테마 선택</NowStepText>
        </StepBox>
        <StepArrow />
        <StepBox>
          <StepImage>STEP 2</StepImage>
          <StepText>정보 입력</StepText>
        </StepBox>
        <StepArrow />
        <StepBox>
          <StepImage>STEP 3</StepImage>
          <StepText>예약 완료</StepText>
        </StepBox>
      </StepContainer>
      <TimeContainer>
        <TimeText>예약 날짜</TimeText>
        <DatePicker
          dateFormat="yyyy-MM-dd"
          selected={selectDate}
          onChange={date => onChangeDate(date)}
          includeDates={canBookDays()}
          customInput={<CustomInput />}
          withPortal
        />
      </TimeContainer>
      <ThemaViewContainer>
        {themas.map((thema, index) => (
          <BookThemaView thema={thema} index={index} key={index} />
        ))}
      </ThemaViewContainer>
    </PublicStepContainer>
  );
}

export default BookFirstStep;
