import UserPool from "./index";

const signupUser = async ({ displayName, email, password }) => {
  return await new Promise((resolve, reject) => {
    UserPool.signUp(
      email,
      password,
      [{ Name: "preferred_username", Value: displayName }],
      null,
      (err, result) => (err ? reject(err) : resolve(result))
    );
  });
};
export default signupUser;
