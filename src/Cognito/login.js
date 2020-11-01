import { AuthenticationDetails, CognitoUser } from "amazon-cognito-identity-js";
import UserPool from "./index";

const loginUser = async ({ email, password }) => {
  const userCreds = { Username: email, Password: password };

  const authDetails = new AuthenticationDetails(userCreds);
  const cognitoData = { Username: email, Pool: UserPool };

  const cognitoUser = new CognitoUser(cognitoData);

  return await new Promise((resolve, reject) => {
    cognitoUser.authenticateUser(authDetails, {
      onSuccess: (result) => {
        resolve({ result, cognitoUser });
      },
      onFailure: (err) => {
        reject(err);
      },
    });
  });
};

export default loginUser;
