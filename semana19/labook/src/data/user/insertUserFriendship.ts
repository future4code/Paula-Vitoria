import { connection } from "../connection";

export const insertUserFriendship = async (
  idUser: string,
  idFriend: string
): Promise<void> => {
  await connection.raw(
    `INSERT INTO friendship  VALUES ("${idUser}","${idFriend}")`
  );
};
