import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

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

const Github = styled.div`
  margin-top: 40%;
  width: calc(666px * 0.35);
  min-width: calc(666px * 0.35);
  height: calc(375px * 0.4);
  min-height: calc(375px * 0.4);
  background-image: url("https://user-images.githubusercontent.com/62426665/139083738-553709a8-4e53-479f-b5c9-54a8777b53de.png");
  background-size: 100% 100%;
  cursor: pointer;
`;

function Sidebar() {
  const clickGithub = () => {
    window.open("https://github.com/kangsw1025/EscapeRoom");
  };

  return (
    <Container>
      <Link to="/" style={{ textDecoration: "none" }}>
        <MainLogo />
      </Link>
      <MenuContainer>
        <Link to="/" style={{ textDecoration: "none" }}>
          <Menu>홈</Menu>
        </Link>
        <Link to="/" style={{ textDecoration: "none" }}>
          <Menu>테마</Menu>
        </Link>
        <Link to="/" style={{ textDecoration: "none" }}>
          <Menu>오시는길</Menu>
        </Link>
        <Link to="/book" style={{ textDecoration: "none" }}>
          <Menu>예약하기</Menu>
        </Link>
        <Link to="/bookCheck" style={{ textDecoration: "none" }}>
          <Menu>예약조회/취소</Menu>
        </Link>
      </MenuContainer>
      <Github onClick={clickGithub} />
    </Container>
  );
}

export default Sidebar;
