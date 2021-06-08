import connection from "../connection";

export async function selectUserByEmail(email: string) {
  const resultQuery = await connection.raw(`
    SELECT * FROM user WHERE email="${email}"
    `);
  return resultQuery[0][0];
}
