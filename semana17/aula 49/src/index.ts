import express, { Express, Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import getUserByName from "./endpoints/getUserByName";

const app: Express = express();
app.use(express.json());
app.use(cors());


/*b) Crie mais uma cópia do endpoint acima, 
e agora permita que haja filtragem por **tipo** de user. 
O tipo de user deve ser passado por **path params.***/

//exercicio 1a

app.get("/users/search", getUserByName);
//exercicio 1b

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});
