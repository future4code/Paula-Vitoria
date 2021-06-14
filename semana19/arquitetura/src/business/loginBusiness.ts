import { generateToken } from "../services/authenticator";
import selectUser from "../data/selectUser";
import { compare } from "bcryptjs";
export const loginBusiness = async (
  email: string,
  password: string
): Promise<string> => {
  if (!email || !password) {
    throw new Error("'email'and 'password' must be passed");
  }

  const user = await selectUser(email);

  const validPassword: boolean = await compare(password, user.password);

  if (!validPassword) {
    throw new Error("Invalids Credentials");
  }

  const token: string = generateToken({
    id: user.id,
    role: user.role,
  });

  return token;
};
