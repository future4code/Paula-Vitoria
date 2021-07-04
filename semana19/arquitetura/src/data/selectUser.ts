import connection from "./connection";

export default async function selectUser(email: string) {
  const user = await connection.raw(
    `SELECT * FROM User_Arq WHERE email="${email}"`
  );
  return user[0][0];
}
