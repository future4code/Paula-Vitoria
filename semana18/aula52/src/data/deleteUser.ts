import connection from "../connection";
export async function deleteUser(id: string) {
  await connection.raw(`
    DELETE FROM user 
    WHERE id=${id}
    `);
}
