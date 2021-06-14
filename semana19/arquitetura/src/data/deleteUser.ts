import connection from "./connection";
export default async function deleteUser(id: string) {
  await connection.raw(`DELETE FROM  User_Arq WHERE id="${id}"`);
}
