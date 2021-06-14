import connection from "../connection";
export default async function updateRecipe(
  title: string,
  description: string,
  id_user: string,
  id: string
) {
  await connection.raw(`
    UPDATE cookenu_recipes
    SET title = "${title}", description = "${description}"
WHERE id_user = "${id_user}" AND id="${id}"
  `);
}
