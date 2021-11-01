import React from "react";
import { Route } from "react-router-dom";
import Home from "../routes/Home";
import Reservation from "../routes/Reservation";
import ReservationCheck from "../routes/ReservationCheck";
import ReservationForm from "../routes/ReservationForm";
import PublicContainer from "./PublicContainer";
import Sidebar from "./Sidebar";

function App() {
  return (
    <PublicContainer>
      <Sidebar />
      <Route path="/" component={Home} exact />
      <Route path="/book" component={Reservation} />
      <Route path="/bookCheck" component={ReservationCheck} />
      <Route path="/bookForm" component={ReservationForm} />
    </PublicContainer>
  );
}

export default App;
