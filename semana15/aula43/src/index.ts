import express, { Express, Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import { countries } from "./countries";

const app: Express = express();
app.use(express.json());
app.use(cors());

app.get("/countries/all", (req: Request, res: Response) => {
  const result = countries.map((country) => {
    return {
      id: country.id,
      name: country.name,
    };
  });

  res.send(result);
});

//app.get("/countries/")

app.get("/countries/search", (req: Request, res: Response) => {
  const name = req.query.name as string;
  const capital = req.query.capital as string;
  const continent = req.query.continent as string;
  
});

app.get("/countries/:id", (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const result = countries.find((country) => country.id === id);
  res.send(result);
  console.log(result);
});
const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost: ${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});
