import connection from "../connection";
export default async function selectRecipeById(id: string) {
  const recipe = await connection.raw(
    `SELECT * FROM cookenu_recipes WHERE id="${id}"`
  );
  return recipe[0][0];
}
