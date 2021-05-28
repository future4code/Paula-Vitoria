import { Request, Response } from "express";
import app from "./app";
import connection from "./connection";
app.get("/", (req, res) => {
  res.send("Hello, World");
});

/*connection
  .raw("SELECT * FROM Movie")
  .then((res) => {
    console.log(res);
  })
  .catch(console.log);*/

/*app.get("/actors", async (req: Request, res: Response) => {
  try {
 const result =   await connection.raw(`
    SELECT * FROM Movie
  
    
    
    `);

    res.status(201).send(console.log(result));
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});*/

/*app.put("/actor/:id", async (req, res) => {
  try {
    await connection("Actor")
      .update({
        name: req.body.name,
        salary: req.body.salary,
        birth_date: req.body.birthDate,
        gender: req.body.gender,
      })
      .where({ id: req.params.id });
    res.send("Success!");
  } catch (error) {
    console.log(error.message);
    res.status(500).send("An unexpected error occurred");
  }
});*/


const createUser = async(
  name:String,
  

)

