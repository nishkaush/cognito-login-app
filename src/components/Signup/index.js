import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styles from "./index.module.css";
import SignupUser from "./../../Cognito/signup";

const Signup = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");

  const [error, setError] = useState({});

  const handleInputChange = (type, e) => {
    if (type === "email") return setEmail(e.target.value);
    if (type === "password") return setPassword(e.target.value);
    if (type === "displayName") return setDisplayName(e.target.value);
  };
  const handleFormSubmission = async (e) => {
    e.preventDefault();
    if (!email || !password || !displayName) {
      return setError({ message: "Missing required fields" });
    }
    const user = await SignupUser({ displayName, email, password }).catch((err) => {
      console.log("ERROR SIGNUP", err);
      setError(err);
    });
    console.log("USER signup", user);
    if (!user.userConfirmed) {
      history.push({ pathname: "/email-verification", state: { email: user.user.username } });
    }
  };

  return (
    <div className={styles.outerContainer}>
      <h1> Signup Page</h1>

      <form className={styles.form} onSubmit={handleFormSubmission}>
        {error.message && <p className={styles.error}>{error.message}</p>}
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
        <input
          type="text"
          placeholder="Type Display Name"
          required
          value={displayName}
          onChange={(e) => handleInputChange("displayName", e)}
        />
        <button type="submit">Sign up</button>
      </form>
    </div>
  );
};

export default Signup;
