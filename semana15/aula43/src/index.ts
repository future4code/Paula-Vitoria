import express, { Express, Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import { countries, country } from "./countries";

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

app.get("/countries/search", (req: Request, res: Response) => {
  const name = req.query.name as string;
  const capital = req.query.capital as string;
  const continent = req.query.continent as string;

  let result: country[] = countries;

  if (name) {
    result = result.filter((country) => country.name.includes(name));
  }
  if (capital) {
    result = result.filter((country) => country.name.includes(capital));
  }
  if (continent) {
    result = result.filter((country) => country.continent.includes(continent));
  }

  if (result.length) {
    res.status(200);
    res.send(result);
  } else {
    res.status(404).send("Not Found");
  }
});

app.put("/countries/edit/:id", (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const name = req.body.name;
  const capital = req.body.capital;

  countries.map((country) => {
    if (country.id === id) {
      country.name = name;
      country.capital = capital;
    }
  });
  res.status(200);
  res.send("Deu certo!");
});
app.get("/countries/:id", (req: Request, res: Response) => {
  try {
    if (isNaN(Number(req.params.id))) {
      throw new Error("Id must be a number");
    }
    const id = Number(req.params.id);
    const result = countries.find((country) => country.id === id);
    if (!result) {
      throw new Error("Could not country with specified id");
    }
    res.status(200);
    res.send(result);
    console.log(result);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});
const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost: ${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});
