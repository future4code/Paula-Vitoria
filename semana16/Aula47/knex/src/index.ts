import app from "./app";
import { connection } from "./connection";
connection
  .raw("SHOW TABLES")
  .then((res) => {
    console.log(res);
  })
  .catch(console.log);

app.get("/", (req, res) => {
  res.send("Hello World");
});

/*app.get("/actor", async (req, res) => {
  try {
    const result = await connection.raw(`
    SELECT * FROM Actor
    `);
    res.send(result);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("An unexpected error occurred");
  }
});*/

/*app.get("/actor", async (req, res) => {
  try {
    console.log(req);
    const result = await connection.raw(`
        SELECT name FROM Actor WHERE 
        name = ${req.body.name}
        `);

    res.send(result);
  } catch (err) {
    console.log(err.message);
    res.status(500).send("An unexpected error occurred");
  }
});*/

const searchActor = async (name: string): Promise<any> => {
  const result = await connection.raw(`
      SELECT * FROM Actor WHERE name = "${name}"
    `);
  return result;
};

app.get("/users/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id;

    console.log(await getActorById(id));
    res.end();
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Unexpected error");
  }
});
