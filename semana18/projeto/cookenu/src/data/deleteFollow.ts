import connection from "../connection";
export default async function selectRecipeById(
  idUser: string,
  idFollower: string
) {
  await connection.raw(
    `INSERT INTO cookenu_users_followers  VALUES ("${idUser}","${idFollower}")`
  );
}
