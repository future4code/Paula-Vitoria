/*a*/
/*Para acessarmos os parâmetros, criamos variáveis que conterão a seguinte sintaxa: process.argv[índice] 
De acordo com a ordem que os parametros são passados, podemos acessar eles através dessa sintaxe. Vale lembrar
que os indices 0 e 1 do process.argv ja vêm preenchidos pelo node, ou seja, só podemos utilizar os parametros do
indice 2 em diante, que são livres.*/

/*QUESTAO B*/
/*const name = process.argv[2];
const age = process.argv[3];
console.log(`Olá, ${name}! Você tem ${age} anos.`);*/

/*QUESTÃO C*/
const name = process.argv[2];
const age = Number(process.argv[3]);
const newAge = age + 7;
red = "\u001b[31m";
reset = "\u001b[0m";
let result;
var fs = require("fs");

if (!name || !age) {
  console.log("Digite um nome e uma idade!");
} else {
  result = `Olá, ${red} ${name}! ${reset} Você tem ${red} ${age} ${reset} anos. Em sete anos você terá ${red} ${newAge}`;
  console.log(result);
}

exitResult = JSON.stringify(result);
fs.appendFile("DataInformation.txt", exitResult + "\n", function (err) {
  if (err) {
    throw err;
  }
  console.log("saved!");
});
