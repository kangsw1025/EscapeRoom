import React from "react";
import styled from "styled-components";
import mainImg from "../images/main_logo.png";
import snsImg from "../images/btn_sns.png";
import blackImg from "../images/btn_black.png";
import { useHistory } from "react-router";

const Container = styled.div`
  width: 10%;
  background: #faebd7;
  min-width: calc(19.2px * 14);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MainLogo = styled.div`
  height: 116px;
  width: 125px;
  background-image: url(${mainImg});
  background-size: 100% 100%;
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
  cursor: pointer;
  list-style: none;
  font-weight: bold;
  :hover {
    color: green;
  }
`;

const SNSImg = styled.div`
  width: 124px;
  height: 45px;
  padding: 0;
  margin-top: 190px;
  background-image: url(${snsImg});
  cursor: pointer;
`;

const BLACKImg = styled.div`
  width: 123px;
  height: 31px;
  margin-top: 30px;
  background-image: url(${blackImg});
  cursor: pointer;
`;

function Sidebar() {
  const history = useHistory();

  const toHome = () => {
    history.push("/");
  };

  return (
    <Container>
      <MainLogo onClick={toHome} />
      <MenuContainer>
        <Menu>방탈출?</Menu>
        <Menu>테마</Menu>
        <Menu>오시는길</Menu>
        <Menu>예약하기</Menu>
        <Menu>예약조회/취소</Menu>
        <SNSImg
          onClick={() =>
            window.open("https://www.instagram.com/secretgarden_esc.official/")
          }
        />
        <BLACKImg
          onClick={() => window.open("http://www.black-labyrinth.com/")}
        />
      </MenuContainer>
    </Container>
  );
}

export default Sidebar;
