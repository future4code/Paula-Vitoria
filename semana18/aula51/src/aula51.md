### Exercício 1

a) Acredito que usar strings nos dão uma gama maior de combinações a serem geradas para criarmos um determinado id.
Usar strings nos permite combinar tanto letras quanto números e, consequentemente, gerar valores mais escaláveis.

b) Na pasta services/ temos:
```
import { v4 } from "uuid";

export function generateId(): string {
  return v4();
}
```

### Exercício 2 

a) Na primeira linha é declarada a variável userTableName, que representa o nome da tabela em que vou adicionar o novo usuário. Logo depois, temos um bloco de código que configura a conexão com o banco de dados. Em seguida, temos mais outro bloco de código que é uma função assincrona que se comunica com o banco que cria um novo usuário, recebendo como parametro seu id, email e senha e, logo após, insere esse usuário na tabela user, a mesma que foi referenciada na linha 1.

b) A query utilizada para criar a tabela de usuário foi a seguinte:

```
CREATE TABLE user(
id VARCHAR(255) NOT NULL,
email VARCHAR(255) NOT NULL,
passsword VARCHAR(255) NOT NULL
);
```
c) A função para a criação de usuários no banco é a seguinte:

```
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
};`

```

### Exercício 3
a) ela garante que o valor que está presente na variavel é uma string e que deve ser preenchida.
b) A função que gera um token é a seguinte, presente na arquivo authentication.ts:
```
import * as jwt from "jsonwebtoken";
type authenticationData = { id: string };

export function generateToken(payload: authenticationData): string {
  return jwt.sign(payload, process.env.JWT_KEY as string, { expiresIn: "1y" });
}

export function getTokenData(token: string): authenticationData {
  const result: authenticationData = jwt.verify(
    token,
    process.env.JWT_KEY as string
  ) as authenticationData;

  return result;
}

```

### Exercício 4
//

