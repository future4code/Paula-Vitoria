import insertUser from "../data/insertUser";
import { userData } from "../model/user";
import { generateId } from "../services/idGenerator";
import { hash } from "../services/hashManager";
import { generateToken } from "../services/authenticator";

export const signupBusiness = async (userData: userData): Promise<string> => {
  if (
    !userData.name ||
    !userData.email ||
    !userData.password ||
    !userData.role
  ) {
    throw new Error("'name','email', 'password' and 'role' are required");
  }

  const id: string = generateId();
  const cypherpassword = await hash(userData.password);

  const newUser = {
    ...userData,
    password: cypherpassword,
    id,
  };
  await insertUser(newUser);
  const token: string = generateToken({ id, role: userData.role });

  return token;
};
