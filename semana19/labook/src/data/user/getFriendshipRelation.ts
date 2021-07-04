import { connection } from "../connection";

export const getFriendShipRelation = async (
  idUser: string,
  idFriend: string
): Promise<any> => {
  const relation = await connection.raw(
    `SELECT  *  FROM friendship WHERE id_user = "${idUser}" AND id_friend = "${idFriend}"`
  );
  return relation[0];
};
