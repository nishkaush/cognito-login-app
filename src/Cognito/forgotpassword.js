import { CognitoUser } from "amazon-cognito-identity-js";

import UserPool from "./index";

export const sendPasswordResetCode = async ({ username }) => {
  const cognitoUser = new CognitoUser({ Username: username, Pool: UserPool });

  return await new Promise((resolve, reject) => {
    cognitoUser.forgotPassword({
      onSuccess: (result) => resolve(result),
      onFailure: (err) => reject(err),
    });
  });
};

export const resetPassword = ({ username, verificationCode, newPassword }) => {
  const cognitoUser = new CognitoUser({ Username: username, Pool: UserPool });

  return new Promise((resolve, reject) => {
    cognitoUser.confirmPassword(verificationCode, newPassword, {
      onFailure(err) {
        reject(err);
      },
      onSuccess(data) {
        resolve(data);
      },
    });
  });
};
