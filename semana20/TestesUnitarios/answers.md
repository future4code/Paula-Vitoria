### Exercício 3
c)A diferença é que a função que possui inversão de dependência recebe a função a qual ela depende para validar as 
entradas por parâmetro e não mais chama a função de validação diretamente dentro dela. 



### Exercício 4
a) Devemos criar um mock da função validateCharacter pois a utilizaremos para fazer testes na nossa função principal, que é a performAttack.O mock dessa função nos permite testar a função principal criando uma função de comportamento esperado pra substiruir a função de validação, pois seu uso pode "atrapalhar" a testagem da função principal, já que o objetivo dos testes unitários é testar partes de código isoladamente.  Vale ressaltar que podemos usar os mocks utilizando a função jest.fn do jest. Ele não é obrigatória durante a testagem mas nos dá a vantagem de ter acesso a funções adicionais de testagem do jest.
b)