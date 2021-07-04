import connection from "../connection";
export const insertUser = async (
  id: string,
  email: string,
  password: string,
  role:string
) => {
  await connection.raw(`
  INSERT INTO user
    VALUES("${id}" , "${email}", "${password}","${role}")
    
   `);
};
