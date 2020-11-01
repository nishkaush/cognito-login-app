import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./../components/Home";
import Login from "./../components/Login";
import Signup from "./../components/Signup";
import EmailVerification from "./../components/EmailVerification";
import ForgotPassword from "./../components/ForgotPassword";
import SuccessPage from "./../components/SuccessPage";

export const AuthContext = React.createContext();

// passing an object with a method to updateCognitoUser
const authObj = {
  idToken: {},
  cognitoUser: "",
  updateCognitoUser(user) {
    this.cognitoUser = user;
  },
};

const Routes = () => (
  <AuthContext.Provider value={authObj}>
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
      <Route path="/success">
        <SuccessPage />
      </Route>
      <Route path="/">
        <Home />
      </Route>
      <Route path="*">
        <Home />
      </Route>
    </Switch>
  </AuthContext.Provider>
);

export default Routes;
