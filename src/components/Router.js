import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../routes/Home";
import Reservation from "../routes/Reservation";

export default () => {
  return (
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
  );
};
