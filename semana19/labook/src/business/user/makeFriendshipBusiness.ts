import { getTokenData } from "../../services/authenticator";
import { insertUserFriendship } from "../../data/user/insertUserFriendship";
import { getFriendShipRelation } from "../../data/user/getFriendshipRelation";

export const makeFriendshipBusiness = async (
  idFriend: string,
  token: string
) => {
  const verifiedToken = getTokenData(token);

  if (!idFriend) {
    throw new Error("Id of friend must be passed");
  }
  if (!verifiedToken) {
    throw new Error("Invalid Token");
  }
  const existsRelationship = await getFriendShipRelation(
    verifiedToken.id,
    idFriend
  );

  if (existsRelationship.length > 0) {
    throw new Error("You already is friend of this user");
  }
  await insertUserFriendship(verifiedToken.id, idFriend);

  return true;
};
