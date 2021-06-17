import { loginDTO } from "../../model/user";
import { selectUserByEmail } from "../../data/selectUserByEmail";
import { compare } from "../../services/hashManager";
import { generateToken } from "../../services/authenticator";

export const loginBusiness = async (loginData: loginDTO) => {
  if (!loginData.email || !loginData.password) {
    throw new Error("'email' and 'password must be provided");
  }
  console.log(loginData.email, loginData.password);

  const user = await selectUserByEmail(loginData.email);

 if (!user) {
    throw new Error("Invalid credentials or user not found");
    }

  const passwordIsCorrect: boolean = await compare(
    loginData.password,
    user.password
  );

  if (!passwordIsCorrect) {
    throw new Error("Invalid credentials");
  }

  const token: string = generateToken({
    id: user.id,
  });
console.log(token)
  return token;
};
