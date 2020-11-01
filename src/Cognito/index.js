import { CognitoUserPool } from "amazon-cognito-identity-js";

const userPool = new CognitoUserPool({
  UserPoolId: "ap-southeast-2_TGyJx25A3",
  ClientId: "5j017spkmmi2knfr6fl2ojhpv5",
});

export default userPool;
