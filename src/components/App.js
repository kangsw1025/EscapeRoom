import React from "react";
import { Route } from "react-router-dom";
import styled from "styled-components";
import Home from "../routes/Home";
import BookFirst from "../routes/BookFirst";
import BookSecond from "../routes/BookSecond";
import BookThird from "../routes/BookThird";
import BookCheck from "../routes/BookCheck";
import Sidebar from "./Sidebar";

const PublicContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
`;

function App() {
  return (
    <PublicContainer>
      <Sidebar />
      <Route path="/home" component={Home} exact />
      <Route path="/home/:element" component={Home} exact />
      <Route path="/book_1" component={BookFirst} exact />
      <Route path="/book_1/:title" component={BookFirst} exact />
      <Route path="/book_2" component={BookSecond} exact />
      <Route path="/book_3" component={BookThird} exact />
      <Route path="/bookCheck" component={BookCheck} exact />
    </PublicContainer>
  );
}

export default App;
