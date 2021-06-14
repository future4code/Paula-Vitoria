import connection from "../connection";
export default async function selectUserByEmail(email: string) {
  const user = await connection.raw(
    `SELECT * FROM cookenu_users WHERE email="${email}"`
  );
  return user[0][0];
}
