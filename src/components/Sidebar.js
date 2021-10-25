import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router";

const Container = styled.div`
  width: 10%;
  background: #483d8b;
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
  cursor: pointer;
  list-style: none;
  font-weight: bold;
  :hover {
    color: white;
  }
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
        <Menu>홈</Menu>
        <Menu>테마</Menu>
        <Menu>오시는길</Menu>
        <Menu>예약하기</Menu>
        <Menu>예약조회/취소</Menu>
      </MenuContainer>
    </Container>
  );
}

export default Sidebar;
