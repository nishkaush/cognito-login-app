import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { sendPasswordResetCode, resetPassword } from "./../../Cognito/forgotpassword";

// import AuthContext from "./../../Routes";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const history = useHistory();
  const [showCodeInput, setShowCodeInput] = useState(false);
  const [confirmationCode, setConfirmationCode] = useState("");
  const [newPassword, setNewPassword] = useState("");
  // const auth_context = useContext(AuthContext);

  const handleInputChange = (type, e) => {
    if (type === "email") return setEmail(e.target.value);
    if (type === "confirmationCode") return setConfirmationCode(e.target.value);
    if (type === "newPassword") return setNewPassword(newPassword);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const result = await sendPasswordResetCode({ username: email });
    console.log("FORGOT PASSWORd", result);
    setShowCodeInput(true);
  };

  const handleFormSubmit2 = async (e) => {
    e.preventDefault();
    const result = await resetPassword({
      username: email,
      verificationCode: confirmationCode,
      newPassword,
    });
    console.log("RESET Password", result);
    history.push({ pathname: "/login", state: { passwordResetSuccess: true } });
  };

  const sendResetCodeForm = (
    <form onSubmit={handleFormSubmit}>
      <input
        type="email"
        required
        placeholder="enter email"
        value={email}
        onChange={(e) => handleInputChange("email", e)}
      />
      <button type="submit">Email me Reset Code</button>
    </form>
  );

  const resetPasswordForm = (
    <form
      style={{ display: "flex", alignItems: "center", flexDirection: "column" }}
      onSubmit={handleFormSubmit2}
    >
      <input
        type="text"
        required
        placeholder="enter code sent in email"
        value={confirmationCode}
        onChange={(e) => handleInputChange("confirmationCode", e)}
      />
      <input
        type="text"
        required
        placeholder="Enter new password"
        value={newPassword}
        onChange={(e) => handleInputChange("newPassword", e)}
      />
      <button type="submit">Reset Password</button>
    </form>
  );

  return (
    <div>
      <h1>Forgot Password Screen</h1>
      {showCodeInput ? resetPasswordForm : sendResetCodeForm}
      <br />
      <Link to="/">Back To Home</Link>
    </div>
  );
};

export default ForgotPassword;
