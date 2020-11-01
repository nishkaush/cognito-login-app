import React, { useState } from "react";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleInputChange = (e) => setEmail(e.target.value);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // take user to confirmation screen.
  };

  return (
    <div>
      <h1>Forgot Password Screen</h1>
      <form onSubmit={handleFormSubmit}>
        <input
          type="email"
          required
          placeholder="enter email"
          value={email}
          onChange={handleInputChange}
        />
        <button type="submit">Reset Password</button>
      </form>
    </div>
  );
};

export default ForgotPassword;
