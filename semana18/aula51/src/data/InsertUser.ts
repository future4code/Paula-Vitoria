import connection from "../connection";
export const insertUser = async (
  id: string,
  email: string,
  password: string
) => {
  await connection.raw(`
  INSERT INTO user
    VALUES("${id}" , "${email}", "${password}")
    
   `);
};
