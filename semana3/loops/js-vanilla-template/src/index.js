/*EXERCÍCIO 1

O valor impresso no console será 10
*/

/*EXERCÍCIO 2
a)Todos os números maiores de 18, ou seja:
19,21,23,25,27,30

b)O for of por si só não é suficiente para permir o acesso ao indice dos elementos. Porém
é possível fazer isso utilizando uma variável auxiliar que começa em zero e que itera toda vez
que o for of percorre o valor de um vetor.
*/

/*EXERCICIO DE ESCRITA DE CÓDIGO */

let arrayOriginal = [1, 2, 3, 4, 5, 6, 7];
//a)
for(numero of arrayOriginal){
    console.log(numero);

}

//b)
for(numero of arrayOriginal){
    console.log(numero/10);
}

//c
for(numero of arrayOriginal){
    if(numero%2 === 0)
console.log(numero);

}

//d
for(let i=0; i<arrayOriginal.length; i++){
    console.log("O elemento de índex " +i+ " é:" + arrayOriginal[i]);
}
console.log(arrayOriginal);


//e

let maior=arrayOriginal[0];
let menor=arrayOriginal[0];
    for(let i=0; i<arrayOriginal.length; i++ ){
        if(arrayOriginal[i] > maior){
            maior = arrayOriginal[i];
        }
        if(arrayOriginal[i] < menor){
            menor = arrayOriginal[i];
        }
}

console.log("Maior valor", maior);
console.log("Menor valor", menor);


/*DESAFIOS*/
//DESAFIO 1

let tentativas=0;
let chute = 0;
let numeroEscolhido = 0;

numeroEscolhido = prompt("Digite o numero desejado");
console.log("Vamos jogar!");//ok

while(chute != numeroEscolhido){
chute = prompt("Chute os números até acertar!");

tentativas++;

console.log("O número chutado foi:" + chute);

    if(chute < numeroEscolhido){
       console.log("Errou. O número escolhido é maior")
    }
    else if(chute > numeroEscolhido){
       console.log("Errou.O número escolhido é menor");

    }else{
      console.log("Acertou!");
        console.log("O número de tentativas foi: ", tentativas);
    }


}



//DESAFIO 2
let tentativas = 0;
let chute = 0;
let numeroEscolhido = 0;
let sorteio;

numeroEscolhido = Math.trunc(Math.random() * 100);
console.log("Vamos jogar!"); //ok

while (chute != numeroEscolhido) {
  chute = prompt("Chute os números de 1 a 100 até acertar!");

  tentativas++;

  console.log("O número chutado foi:" + chute);

  if (chute < numeroEscolhido) {
    console.log("Errou. O número escolhido é maior");
  } else if (chute > numeroEscolhido) {
    console.log("Errou.O número escolhido é menor");
  } else {
    console.log("Acertou!");
    console.log("O número de tentativas foi: ", tentativas);
  }
}
/*Não foi difícil fazer a alteração pois eu já tinha usado a função random antes.
O que eu fiz foi o seguinte: em vez de atribuir à variavel um valor digitado
pelo usuário, atribui um valor sorteado através da função random multiplicado por 100, para que
o valor se transformasse em decimal e pudesse reter o intervalo de 0 a 100.
*/
