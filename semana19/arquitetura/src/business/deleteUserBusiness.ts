import deleteUser from "../data/deleteUser";
import selectUser from "../data/selectUser";
import selectUserById from "../data/selectUserById";
import { AuthenticationData, getTokenData } from "../services/authenticator";
export const deleteUserBusiness = async (
  token: string,
  id: string
): Promise<void> => {
  console.log(token, id);
  if (!token) {
    throw new Error("'token' must be passed");
  }
  const verifiedToken = getTokenData(token) as AuthenticationData;
  if (!verifiedToken) {
    throw new Error("Unouthorized");
  }

  if (verifiedToken.role !== "ADMIN") {
    throw new Error("Just admins can delete users");
  }

  const user = await selectUserById(id);

  if (!user) {
    throw new Error("User not found");
  }
  deleteUser(id);
};
