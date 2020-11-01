import React from "react";
import { Link, useLocation } from "react-router-dom";

const EmailVerification = () => {
  const {
    state: { email },
  } = useLocation();

  return email ? (
    <div>
      <h1>Email Verification Sent</h1>
      <p>We have sent a verification link to your email address - {email}</p>
      <p>To continue using your account, please verify it by clicking on the link in the email.</p>
      <Link to="/">Back To Home</Link>
    </div>
  ) : null;
};

export default EmailVerification;
