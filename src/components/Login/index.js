import React, { useState, useContext, useEffect } from "react";
import { useHistory, useLocation, Link } from "react-router-dom";
import styles from "./index.module.css";
import loginUser from "./../../Cognito/login";

import { AuthContext } from "./../../Routes";

const Login = () => {
  const history = useHistory();
  const location = useLocation();
  const auth_context = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  const [error, setError] = useState({});

  useEffect(() => {
    if (location.state && location.state.passwordResetSuccess) {
      setShowSuccess(true);
      const myTimeout = setTimeout(() => setShowSuccess(false), 5000);
      return () => clearTimeout(myTimeout);
    }
  }, [location.state]);

  const handleInputChange = (type, e) => {
    if (error) setError({});
    if (type === "email") return setEmail(e.target.value);
    if (type === "password") return setPassword(e.target.value);
  };
  const handleFormSubmission = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      return setError({ message: "Missing required fields" });
    }

    try {
      const { result, cognitoUser } = await loginUser({ email, password });
      const { idToken } = result;
      console.log("USER login", result);
      auth_context.updateCognitoUser(cognitoUser);
      history.push({
        pathname: "/success",
        state: {
          email: idToken.payload.email,
          preferred_username: idToken.payload.preferred_username,
        },
      });
    } catch (err) {
      console.log("ERROR SIGNUP", err);
      setError(err);
    }
  };

  return (
    <div className={styles.outerContainer}>
      <h2> Login Page</h2>

      <form className={styles.form} onSubmit={handleFormSubmission}>
        {error.message && <p className={styles.error}>{error.message}</p>}
        {showSuccess && <p>Password reset successful!</p>}
        <input
          type="email"
          placeholder="Type Email"
          required
          value={email}
          onChange={(e) => handleInputChange("email", e)}
        />
        <input
          type="password"
          placeholder="Type Password"
          required
          value={password}
          onChange={(e) => handleInputChange("password", e)}
        />
        <button type="submit">Login</button>
        <Link to="/forgot-password" className={styles.forgotPassword}>
          Forgot Password
        </Link>
      </form>
    </div>
  );
};

export default Login;
