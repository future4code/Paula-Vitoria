import connection from "../connection";
export default async function deleteRecipeById(idRecipe: string) {
  await connection.raw(`DELETE from cookenu_recipes WHERE id ="${idRecipe}"`);
}
