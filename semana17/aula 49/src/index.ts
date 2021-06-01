import express, { Express, Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import getUserByName from "./endpoints/getUserByName";
import getUserByType from "./endpoints/getUserByType"
import getUserByNameOrType from "./endpoints/getUserByNameOrType"
import getUserByPagination from "./endpoints/getUserByPagination"

const app: Express = express();
app.use(express.json());
app.use(cors());


/*b) Crie mais uma cópia do endpoint acima, 
e agora permita que haja filtragem por **tipo** de user. 
O tipo de user deve ser passado por **path params.***/

//exercicio 1a

app.get("/users/search", getUserByName);
//exercicio 1b
app.get("/users/:type", getUserByType);

//exercicio 2 
app.get("/users/", getUserByNameOrType);

//exercicio 3

app.get("/users/pages", getUserByPagination);




/*Faça uma cópia do endpoint original, e adicione a ele a funcionalidade de ordenação
que possa receber nome ou tipo de user.
A ordenação padrão deve ser crescente, 
e caso o usuário não passe nenhum parâmetro, a ordenação deve ser por email.*/

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});
