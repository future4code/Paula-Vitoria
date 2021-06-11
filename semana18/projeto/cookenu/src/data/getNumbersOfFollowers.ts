import connection from "../connection";
export default async function getNumbersOfFollowers(
  idUser: string,
  idFollower: string
) {
  const getNumbersOfFolowers = await connection.raw(
    `SELECT  COUNT(*) as amount
    FROM cookenu_users_followers WHERE id_user ="${idUser}" 
    AND id_follower="${idFollower}"`
  );

  return getNumbersOfFolowers[0][0].amount;
}
