import { authenticationData } from "../../model/user";
import { generateId } from "../../services/idGenerator";
import { connection } from "../../data/connection";
import { getTokenData } from "../../services/authenticator";
import { signupDTO } from "../../model/user";
import { hash } from "../../services/hashManager";
import { generateToken } from "../../services/authenticator";
import { user } from "../../model/user";

export const signupBusiness = async (user: signupDTO) => {
  if (!user.name || !user.email || !user.password) {
    throw new Error("'name', 'email' and 'password' must be provided");
  }

  const id: string = generateId();

  const cypherPassword = await hash(user.password);
  const userData: user = {
    name: user.name,
    email: user.email,
    password: cypherPassword,
    id: id,
  };

  await connection("labook_users").insert(userData);

  const token: string = generateToken({ id });

  return token;
};
