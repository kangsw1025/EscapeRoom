import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../routes/Home";
import Reservation from "../routes/Reservation";
import ReservationCheck from "../routes/ReservationCheck";
import ReservationForm from "../routes/ReservationForm";

export default () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/book">
          <Reservation />
        </Route>
        <Route path="/bookCheck">
          <ReservationCheck />
        </Route>
        <Route path="/bookForm">
          <ReservationForm />
        </Route>
      </Switch>
    </Router>
  );
};
