import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const Container = styled.div`
  width: 10%;
  background: #b7adc9;
  min-width: calc(19.2px * 14);
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
`;

const MainLogo = styled.div`
  height: 140px;
  min-height: 160px;
  width: 140px;
  background-image: url("https://user-images.githubusercontent.com/62426665/138452293-fc4ed240-cdc4-442d-b86f-96f49b82d5b4.png");
  background-size: 140px 160px;
  margin: 50px 0;
  cursor: pointer;
`;

const MenuContainer = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 0;
  margin: 0;
`;

const Menu = styled.li`
  margin: 20px;
  font-size: 1.5rem;
  width: 175px;
  text-align: center;
  padding: 0;
  color: white;
  cursor: pointer;
  list-style: none;
  font-weight: bold;
  :hover {
    color: #7a6f95;
  }
`;

function Sidebar() {
  const history = useHistory();

  const onClickHome = () => {
    history.push("/EscapeRoom/Home");
  };

  const onClickMain = () => {
    history.push("/EscapeRoom/Home/main");
  };

  const onClickThema = () => {
    history.push("/EscapeRoom/Home/thema");
  };

  const onClickMap = () => {
    history.push("/EscapeRoom/Home/map");
  };

  const onClickBook = () => {
    history.push("/EscapeRoom/book_1");
  };

  const onClickCheckBook = () => {
    history.push("/EscapeRoom/bookCheck");
  };

  return (
    <Container>
      <MainLogo onClick={onClickHome} />
      <MenuContainer>
        <Menu onClick={onClickMain}>홈</Menu>
        <Menu onClick={onClickThema}>테마</Menu>
        <Menu onClick={onClickMap}>오시는길</Menu>
        <Menu onClick={onClickBook}>예약하기</Menu>
        <Menu onClick={onClickCheckBook}>예약조회/취소</Menu>
      </MenuContainer>
    </Container>
  );
}

export default Sidebar;
