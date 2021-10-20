import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../routes/Home";
import Reservation from "../routes/Reservation";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const Sidebar = styled.div`
  width: 15%;
  min-width: calc(19.2px * 15);
`;

export default () => {
  return (
    <Container>
      <Sidebar />
      <Router>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/reservation">
            <Reservation />
          </Route>
        </Switch>
      </Router>
    </Container>
  );
};
