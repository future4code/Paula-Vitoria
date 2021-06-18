import connection from "../connection";
export default async function selectRecipes() {
  const recipes = await connection.raw(`
  SELECT * FROM cookenu_recipes;

  `);
  return recipes[0];
}
