###Exercício 1

a)Esse comando irá excluir a coluna salary da tabela Actor.

b)Esse comando irá redeclarar a coluna gender para o nome sex com o tipo varchar.

c)Esse comando irá manter o nome coluna gender porem redeclara-la como varchar

d)A query usada é:

```
ALTER TABLE Actor CHANGE gender gender varchar(100);
```

###Exercício 2
a)Query usada:

```
ALTER TABLE Actor CHANGE gender gender varchar(100);
UPDATE Actor SET
name="Moacyr Franco",
birth_date="1978-08-15"
WHERE id ="003"
```

b)Query usada:

```
UPDATE Actor
SET name="Juliana Paes"
WHERE name="JULIANA PAES";
```

c)Query usada:

```
UPDATE Actor
SET
name="Camila Pitanga",
salary=500000,
birth_date = "1989-02-12",
gender = "female"
WHERE id ="005";
SELECT * FROM Actor;"
```

###Exercício 3
a)Query usada:

```
DELETE FROM Actor where name="Fernanda Montenegro"
```

b)Query usada:

```
DELETE FROM Actor WHERE
gender="male"
AND salary > 1000000
```

###Exercício 4
a)Query usada:

```
SELECT MAX(salary) from Actor;
```

b)Query usada:

```
SELECT MIN(salary) from Actor WHERE gender = "male"
```

c)Query usada:

```
SELECT COUNT(*) from Actor WHERE gender = "male"
```

d)Query usada:

```
SELECT SUM(salary) from Actor;
```

###Exercício 5
a)O comando traz a quantidade de atores e atrizes da tabela tendo como referência seu sexo.

b)Query usada:

```
SELECT id,  name FROM Actor ORDER BY name DESC;
```

c)Query usada:

```
SELECT * FROM Actor ORDER BY salary;
```

d)Query usada:

```
SELECT *FROM Actor ORDER BY salary DESC LIMIT 3;
```

e)Query usada:

```
SELECT AVG(salary) from Actor GROUP BY gender;
```

###Exercício 5
a)Query usada:

```
ALTER TABLE Movie
ADD playing_limit_date DATE;
```

b)Query usada:

```
ALTER TABLE Movie
CHANGE rating rating FLOAT;
```

c)Queries usadas:

```
UPDATE Movie
SET playing_limit_date= "2021-05-27"
Where id ="002";

```

```
UPDATE Movie
SET playing_limit_date= "2021-04-27"
Where id ="001";
```

d) O programa não acusou erro, porém não afetou nenhuma linha e o comando não foi efetuado.
