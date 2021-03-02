/*
EXERCICIOS DE INTERPRETAÇÃO DE CÓDIGO
EXERCÍCIO 1

a.Serão impressos os números 10 e 50.
b.Se fossem retirados os console.log, nã conseguiriamos ver o que a função está retornando, 
desse modo, não sairia nada no console.
*/

/*EXERCÍCIO 2

a.A saída será Darvas e Caio, as posições 0 e 1 do valor.
b.Seria impresso os nomes Amanda e Caio
*/
/*EXERCÍCIO 3
a. A função recebe um array e percorre o array, a cada iteração do for, 
é feito o teste para saber se o resto da divisão do número que está na posição correspondente é zero.
Se for, é calculado esse número elevado a dois e depois colocado esse valor no arrayFinal.
Um nome para esse array poderia ser calcularPotencia;
*/

/*EXERCICIOS DE ESCRITA DE CODIGO */

//EXERCICIO 4
const sobreMim = () => {
  console.log("Eu sou Paula, tenho 28 anos, moro em Salvador e sou estudante.");
}
sobreMim();


//EXERCICIO 5
//a.
let somar = (num1,num2) =>{
  return num1 + num2;
}

let resultado = somar(2,2);
console.log(resultado);

//b.
let maiorNumero = (num1, num2) =>{
  if(num1 >= num2){
    return true;
    
}else{
  return false;
}
}

console.log(maiorNumero(1,2));

//c
let imprimir =(mensagem) =>{
  for(let i =0; i<10 ;i++){
    console.log(mensagem);
  }

}

imprimir("Jesus te ama");*/


/*EXERCICIO 6 */
//a.
const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22];

imprimirQuantidade=(array)=>{
  return array.length;
}
let quantidade = imprimirQuantidade(array);
console.log(quantidade);

//b
let isPar = (numero) =>{
  if(numero%2 === 0){
  return  "é par";
  }else{
    return "não é par";
  }

}

let par = isPar(12);
console.log(par);



//c
let qtdPares = (numeros)=>{
  let cont=0;
  for(numero of numeros){
    if(numero%2 === 0){
      cont++;
    }
  }
  return cont;
}
numeros = [1,2,3,4,5,6,7,8]
let pares = qtdPares(numeros);
console.log(pares);

//d
let qtdPares = (numeros)=>{
  let cont=0;
  for(numero of numeros){
    if(isPar(numero)){
      cont++;
    }
  }
  return cont;
}
numeros = [1,2,3,4,5,6,7,8]
let pares = qtdPares(numeros);
console.log(pares);

let isPar = (numero) =>{
  if(numero%2 === 0){
  return  "é par";
  }else{
    return "não é par";
  }

}

/*DESAFIOS*/

//EXERCÍCÍO 1 
let retornaValor = (valor)=>{
  console.log(valor);

}

let retornaSoma = (valor1,valor2) => {
  let resultado = 0;
  resultado = valor1 + valor2;
  retornaValor(resultado);

}

retornaSoma(8,2);


/*EXERCÍCIO 2*/ 

const numeros = [0, 8, 23, 16, 10, 15, 41, 12, 13]
//a
const retornarPares = (array)=>{
  let pares = [];
  for(valor of array){
    if(valor % 2 === 0){
      pares.push(valor);
    }
  }
 return pares;
  
}

let multiplicar=() => {
  let valores = retornarPares(numeros);
  for(valor of valores){
    console.log(valor*2);
  }
}

multiplicar();


//b
let retornarMaiorNumero = (array) =>{
  let maior = array[0];
  for(let i =0; i<array.length; i++){
    if(array[i] > maior){
      maior = array[i];
    }
  }
  console.log("Maior numero " + maior);
}
valores = [12,48,7,21];
retornarMaiorNumero(valores);//chamada da função

//c
let retornarMaiorNumero = (array) =>{
  let maior = array[0];
  for(let i =0; i<array.length; i++){
    if(array[i] > maior){
      maior = array[i];
      indice = i;
    
    }
  }
  console.log("Maior índice é "+indice);
}
valores = [12,48,78,21];
retornarMaiorNumero(valores);



//d
let inverter = (array) =>{
  let invertido = [];
    for(let j = array.length-1 ;j >=0 ;j--){
    invertido.push(array[j]);
   
}
console.log(invertido);
}
numeros = [1,2,3,4,5,6]
inverter(numeros);











