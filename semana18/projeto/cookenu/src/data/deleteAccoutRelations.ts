import connection from "../connection";
export default async function deleteAccountRelations(idAccount: string) {
  await connection.raw(`DELETE FROM cookenu_users WHERE id = "${idAccount}"`);
}
