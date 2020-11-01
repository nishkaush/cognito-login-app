import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./../components/Home";
import Login from "./../components/Login";
import Signup from "./../components/Signup";
import EmailVerification from "./../components/EmailVerification";
import ForgotPassword from "./../components/ForgotPassword";

const Routes = () => (
  <Switch>
    <Route path="/signup">
      <Signup />
    </Route>
    <Route path="/login">
      <Login />
    </Route>
    <Route path="/email-verification">
      <EmailVerification />
    </Route>
    <Route path="/forgot-password">
      <ForgotPassword />
    </Route>
    <Route path="/">
      <Home />
    </Route>
    <Route path="*">
      <Home />
    </Route>
  </Switch>
);

export default Routes;
