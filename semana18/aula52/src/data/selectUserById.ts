import connection from "../connection";
export async function selectUserById(id: string) {
  const resultQuery = await connection.raw(`
    SELECT * FROM user 
    WHERE id="${id}"
    `);
  return resultQuery[0][0];
}
