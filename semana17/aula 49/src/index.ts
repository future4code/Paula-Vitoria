import express, { Express, Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import getUserByName from "./endpoints/getUserByName";
import getUserByType from "./endpoints/getUserByType";
import getUserByNameOrType from "./endpoints/getUserByNameOrType";
import getUserByPagination from "./endpoints/getUserByPagination";
import getUserByPaginationTypeOrder from "./endpoints/getUserByPaginationTypeOrder";

const app: Express = express();
app.use(express.json());
app.use(cors());

//exercicio 1a
app.get("/users/search", getUserByName);

//exercicio 2
app.get("/users/", getUserByNameOrType);

//exercicio 3
app.get("/users/pages", getUserByPagination);

//exercicio 4
app.get("/users/pages/order", getUserByPaginationTypeOrder);
//exercicio 1b
app.get("/users/:type", getUserByType);

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});
