import connection from "../connection";
export default async function selectUserById(id: string) {
  const user = await connection.raw(
    `SELECT * FROM cookenu_users WHERE id="${id}"`
  );
  return user[0][0];
}
