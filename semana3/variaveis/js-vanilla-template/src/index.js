/*EXERCICIOS DE INTERPRETAÇÃO*/

/*
1) 
Imprime 10, 
Imprime 10,5
respectivamente.

2)imprime 10,10,10

*/ 


//EXERCICIOS DE ESCRITA DE CÓDIGO
//1)

let nome;
let idade;

console.log(typeof nome);
console.log(typeof idade);

/*Esse tipo foi impresso porque declarei duas 
variáveis sem atribuir valor a elas.*/


nome= prompt("Digite seu nome");
idade= prompt("Digite sua idade");

console.log(typeof nome);
console.log(typeof idade);

/*Dessa vez, foi impresso na tela que as duas
variáveis são do tipo string, porém isso aconteceu
porque foi definido um valor para cada uma delas.*/

console.log("Olá " + nome + " você tem " +idade + " anos");

//2)

let endereco;
let cor;
let livro;
let comida
let nomeMae;

endereco=prompt("Qual seu endereço?");
cor=prompt("Qual sua cor favorita?");
livro=prompt("Qual seu livro preferido?");
comida=prompt("Qual comida você mais gosta?");
nomeMae=prompt("Qual o nome de sua mãe?");

console.log("1.Qual seu endereço?");
console.log("Resposta:",endereco);

console.log("2.Qual sua cor favorita?");
console.log("Resposta:",cor);

console.log("4.Qual comida você mais gosta?");
console.log("Resposta:",comida);

console.log("5.Qual o nome de sua mãe?");
console.log("Resposta:",nomeMae);


//3)
/*a*/
let comidas=["pizza","lasanha","caruru","calabresa frita","hamburguer"];
console.log(comidas);

/*b*/ 
console.log("Essas são as minhas comidas preferidas: \n"+ comidas[0] +"\n",comidas[1]+"\n",comidas[2]+"\n",comidas[3]+"\n",comidas[4]+"\n");

/*c*/
let comidaPreferida = prompt("Qual sua comida preferida?");
comidas[1]=comidaPreferida;
console.log("Essas são as minhas comidas preferidas: \n"+ comidas[0] +"\n",comidas[1]+"\n",comidas[2]+"\n",comidas[3]+"\n",comidas[4]+"\n");

//4)

let perguntas=["Você gosta de sair aos FDS?", "Você já viajou de avião?","Você tem filhos?"];

let resposta1=true;
let resposta2=false;
let resposta3=true;

let respostas=["Você gosta de sair aos FDS?",resposta1, "Você já viajou de avião?",resposta2,"Você tem filhos?",resposta3];

console.log(respostas);

