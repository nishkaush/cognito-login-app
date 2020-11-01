import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./../components/Home";
import Login from "./../components/Login";
import Signup from "./../components/Signup";

const Routes = () => (
  <Switch>
    <Route path="/signup">
      <Signup />
    </Route>
    <Route path="/login">
      <Login />
    </Route>
    <Route path="/">
      <Home />
    </Route>
  </Switch>
);

export default Routes;
