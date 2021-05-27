###Exercício 1

a)Chave estrangeira é uma propriedade que relaciona uma tabela com outra. A relação se dá a partir do momento
em que ela, estando em uma tabela, se relaciona com a primary key de outra tabela.

b) Queries usadas para criar as três avaliações:

```
INSERT INTO Rating(id, comment, rate, movie_id)
VALUES(
"001",
"Filme muito interessante. História muito legal!",
8,
"003"
);
```

```
INSERT INTO Rating(id, comment, rate, movie_id)
VALUES(
"002",
"Filme tocante e interessante",
"10",
"002"
);
```

```
INSERT INTO Rating(id, comment, rate, movie_id)
VALUES(
"003",
"Filme muito engraçado",
9.5,
"004"

);

```

c)Código de erro: 1452. Não é possível adicionar ou atualizar uma linha filha: uma restrição de chave estrangeira falha.
Ou seja, não é possível adicionar um valor a uma chave estrangeira que não existe.

d)Query usada para apagar a coluna da tabela Movie:

```
ALTER TABLE Movie
DROP COLUMN rating;
```

e)Código de erro: 1451. Não é possível excluir ou atualizar uma linha pai: uma restrição de chave estrangeira. Ou seja, não é possível apagar um filme cuja chave primária está associada a uma chave estrangeira em outra tabela.

###Exercício 2

a) Essa tabela representa o elenco do filme.
Ela se relaciona com as tabelas Movie e Actor através de duas chaves estrangeiras que são:movie_id e actor_id;

b) Queries usadas para criar as relaçõe:

```
INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
"002",
"002"
);
```

```
INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
"002",
"001"
);
```

```
INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
"004",
"003"
);
```

```
INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
"003",
"005"
);
```

```
insert into MovieCast(movie_id, actor_id)
VALUES(
"003"
);
```

```
INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
"003",
"001"
);

```

```
INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
"004",
"004"
);
```

c)Erro: Não é possível adicionar ou atualizar uma linha filha: uma restrição de chave estrangeira falha. Em outras palavras, isso significa que não é possível atualizar ou adicionar uma foreign key que não foi criada, inexistente.
