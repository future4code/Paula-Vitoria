import selectUsers from "../data/selectUsers";
import selectUser from "../data/selectUsers";
import { user } from "../model/user";
import { AuthenticationData, getTokenData } from "../services/authenticator";
export const getAllUsersBusiness = async (token: string): Promise<any[]> => {
  console.log(token);
  if (!token) {
    throw new Error("'token' must be passed");
  }
  const verifiedToken = getTokenData(token) as AuthenticationData;
  if (!verifiedToken) {
    throw new Error("Unouthorized");
  }

  const users: any = [];
  const data = await selectUsers();

  for (let user of data) {
    users.push(user);
  }

  return users;
};
