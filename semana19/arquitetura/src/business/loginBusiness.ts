import insertUser from "../data/insertUser";
import { userAuthenticator, userData } from "../model/user";
import { generateId } from "../services/idGenerator";
import { hash } from "../services/hashManager";
import { generateToken } from "../services/authenticator";
import selectUser from "../data/selectUser";
export const loginBusiness = async (
  userAuthenticator: userAuthenticator
): Promise<string> => {
  if (!userAuthenticator.email || !userAuthenticator.password) {
    throw new Error("'email'and 'password' must be passed");
  }

  const user = await selectUser(userAuthenticator.email);

  const token: string = generateToken({ id: user.id, role: userAuthenticator.role });

  return token;
};
