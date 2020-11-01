import React, { useContext } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { AuthContext } from "./../../Routes";

const SuccessPage = () => {
  const {
    state: { email, preferred_username },
  } = useLocation();

  const history = useHistory();
  const auth_context = useContext(AuthContext);
  console.log("auth_context inside success page", auth_context);

  const handleLogout = () => {
    // log user out
    // and send him back to home page
    auth_context.cognitoUser.signOut();
    auth_context.updateCognitoUser("");
    history.push({ pathname: "/", state: { showLogoutSuccess: true } });
  };

  return (
    <div>
      <h1>Login Successful!</h1>
      <h3>Your personal details are as follows:</h3>
      <p>
        <b>Email - </b> {email}
      </p>
      <p>
        <b>Display Name - </b> {preferred_username}
      </p>

      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default SuccessPage;
