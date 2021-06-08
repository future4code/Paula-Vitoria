### Exercício 1

a)O que são os round e salt? Que valores são recomendados para o round? Que valor você usou? Por quê?
round está relacionado ao cost(custo numérico) que está relacionado à segurança da senha. Porém, vale lembrar que
quanto maior o cost,maior o tempo de execução do algoritmo. O melhor cost a ser usado vai depender do sistema, porém
há um padrão na maioria das libs do round ser 12.
Salt é uma string aleatória com 22 caracteres adicionada na senha antes de criar o hash. Isso deixa a string mais segura
de ataques do tipo rainbow table, onde os hackers conseguem ver um padrão nas senhas, identificar esse padrão e perceber
quais as senhas mais comuns e, após isso, criam uma tabela de conversão senha-hash.

b) Na pasta services/hashManager temos:

```
import { genSaltSync, hashSync, compareSync } from "bcryptjs";
//função que gera o  hash
export const createHash = (plainText: string): string => {
  const salt: string = genSaltSync(12);
  const hash: string = hashSync(plainText, salt);
  return hash;
};
```
c) Na pasta services/hashManager temos:
```
export const compareHash = (plainText: string, cypherText: string): boolean => {
  return compareSync(plainText, cypherText);
};


```

### Exercício 2

a)Primeiramente, devemos modificar a parte do cadastro, para que a senha já seja guardada no banco de dados encriptada
e ninguém que manipule o banco tenha acesso a ela.

b) Primeiro endpoint:

```


```

c) Segundo endpoint:

```


```

### Exercício 3



### Exercício 4

 



