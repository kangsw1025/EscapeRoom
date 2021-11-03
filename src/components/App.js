import React from "react";
import { Route } from "react-router-dom";
import styled from "styled-components";
import Home from "../routes/Home";
import Book from "../routes/Book";
import BookCheck from "../routes/BookCheck";
import BookForm from "../routes/BookForm";
import Sidebar from "./Sidebar";

const PublicContainer = styled.div`
  display: flex;
  overflow: hidden;
  width: 100%;
  height: 100vh;
`;

function App() {
  return (
    <PublicContainer>
      <Sidebar />
      <Route path="/" component={Home} exact />
      <Route path="/book" component={Book} exact />
      <Route path="/book/:title" component={Book} />
      <Route path="/bookCheck" component={BookCheck} />
      <Route path="/bookForm" component={BookForm} />
    </PublicContainer>
  );
}

export default App;
