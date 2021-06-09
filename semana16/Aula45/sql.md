```sql
### Exercício 1
a) Além do float para declarar o salário porque é uma forma para declarar um número não inteiro em uma tabela, declaramos o id, o nome e o sexo
com VARCHAR, que é uma forma de declarar strings no banco de dados
com um número máximo de caracteres.
Declaramos, também, a data de aniversário com o tipo DATE, que é
a forma que usamos para representar uma data
com o formato(YYYY-MM-DD).

b) O comando SHOW DATABASES listou uma tabela com o nome do meu banco de dados criado e, acredito eu, que esse comando sirva também
para mostrar os nomes de outros bancos de dados que eu venha a criar.
O comando SHOW TABLES listou a tabela actor que foi criada.

c)O comando DESCRIBE ACTOR lista todos os dados da tabela criada,
ou seja, todos os campos, os tipos do campos, se o campo é null ou não, se é ou não
é primary key.
Queries usadas:
```

```
USE `cruz-2114846-paula-santos`;
```

```
CREATE TABLE Actor(
id VARCHAR(255) PRIMARY KEY,
name VARCHAR(255) NOT NULL,
salary FLOAT NOT NULL,
birth_date DATE NOT NULL,
gender VARCHAR(6) NOT NULL
);
```

```
SHOW DATABASES;
```

```
SHOW TABLES;
```

```
DESCRIBE Actor;
```

### Exercício 2

a) A query é:

```

INSERT INTO Actor(id, name, salary, birth_date, gender)
VALUES(
"002",
"Glória Pires",
1200000,
"1963-08-23",
"female"
);

```

b) Ao tentar rodar a query abaixo com um id que já foi criado
antes, recebi o seguinte erro como resposta:
Código de erro: 1062.
Entrada duplicada '002' para a chave 'PRIMARY'. Segue a query:

```

INSERT INTO Actor(id, name, salary, birth_date, gender)
VALUES(
"002",
"Ian Somehalder",
1200000,
"1963-08-23",
"male"
);

```

c)A resposta de erro foi:
"Código de erro: 1136.
A contagem de colunas não corresponde à contagem de valores na linha 1"
Nesse caso, faltou passar os valores dos parâmetros correspondentes aos dados que as tabelas exigem.
Segue a query corrigida:

```

INSERT INTO Actor (id, name, salary, birth_date,gender)
VALUES(
"003",
"Fernanda Montenegro",
300000,
"1929-10-19",
"female"
)

```

d)A resposta de erro foi:
"Código de erro: 1364. O campo 'nome' não tem um valor padrão"
Nesse caso, faltou passar o parâmetro de nome, exigido pela tabela e faltou passar o nome como VALUE na lista
de valores.
Segue a query corrigida:

```

INSERT INTO Actor (id,name, salary, birth_date, gender)
VALUES(
"004",
"Edson celulari",
400000,
"1949-04-18",
"male"
);

```

e)A resposta de erro foi:
"Código de erro: 1292.
Valor de data incorreto: '1950' para a coluna 'birth_date' na linha 1"
Nesse caso, o formato da data não estava entre aspas, para representar uma string.
Segue a query corrigida:

```

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
"005",
"Juliana Paes",
719333.33,
"1979-03-26",
"female"
);

```

f)Query criada:

```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
"006",
"Ian Somerhalder",
250000,
"1979-12-08",
"male"
);
```

### Exercício 3

a) Query usada:

```

SELECT \* FROM Actor WHERE gender="female"

```

b) Query usada:

```

SELECT salary from Actor WHERE name="Tony Ramos"

```

c) Ao escrever a query colocando o gender com valor invalid, recebi uma linha da tabela onde o gender
era igual a null e todas os outros dados eram null também. Acredito que isso tenha acontecido porque os
dados de gender são obrigatórios , não permitindo ao banco inserir dados com gender nulo.
Query usada:

```

Select * from Actor where gender = "invalid";

```

d)Query usada:

```

SELECT id, name, salary FROM Actor where salary <=500000

```

e)A resposta de erro foi a seguinte: 
Código de erro: 1054. Coluna desconhecida 'nome' na 'lista de campos'. 
No momento da criação da tabela, o campo que representa o nome do ator não foi especificado com a palavra "nome", mas sim com a palavra "name".
Query corrigida:

```

SELECT id, name from Actor WHERE id = "002"

```

### Exercício 4

a) A explicação da query é a seguinte: selecione todos os dados da tabela Actor onde o nome comece com
A ou J e o salário seja maior que R$3000.00

```

SELECT \* FROM Actor WHERE gender="female"

```

b)Quey usada na questão:

```

SELECT \* FROM Actor where name NOT LIKE "A%" AND salary > 300000 ;

```

c)Quey usada na questão:

```

SELECT \* FROM Actor WHERE name LIKE "%G%" or name LIKE "%g%";

```

d)Quey usada na questão:

```

SELECT * FROM Actor where (name LIKE "%A%" or name LIKE "%a%"
AND name LIKE "%G%" OR name LIKE "%g") AND salary BETWEEN 350000 AND 900000;

```

### Exercício 5

a) Query usada:

````
SELECT * FROM Actor WHERE gender="female"```

````

### Exercício 6

a) Query usada:

```
SELECT id, title, rating FROM Movie WHERE id = 2;
```

b) Query usada:

```
SELECT * FROM Movie WHERE title="Doce de mãe"
```

c) Query usada:

```
SELECT id, title, rating FROM Movie where rating >= 7;"
```

### Exercício 7

a) Query usada:

```
SELECT * FROM Movie WHERE title Like "%vida%";
```

b) Query usada:

```
SELECT * FROM Movie WHERE title LIKE "%mãe%" or synopsis LIKE "%São Paulo%"
```

c) Query usada:

```
SELECT * FROM Movie WHERE release_date < "2021-05-24"
```

d) Query usada:

```
SELECT * FROM Movie WHERE release_date < "2021-05-24" AND (title LIKE "%Você%" OR synopsis like "%Você%") AND rating >7
```
