/*EXERCÍCIO 1
O código pede para que o usuário forneca um número para teste.
Depois disso, ele converte esse número, que é do tipo string, para o tipo number.
Então, se o resto da divisão desse número por 2 for igual, em tipo e valor, a 0 
o programa imprime "Passou no teste", já se o resto da divisão por 2 for diferente de 0, em tipo e valor,
o programa imprime "Não passou no teste". 
Ele imprime "Passou no teste" para números do tipo par e "Não passou no teste para números do tipo ímpar."
*/ 

/*
EXERCÍCIO 2
a)O código serve para fornecer ao usuário o preço de uma fruta escolhida por ele.
b)é impresso no terminal: "O preço da fruta Maçã é R$ 2.25
c)"O preço da fruta Pêra é R$ 5"
*/

/*EXERCÍCIO 3
a)A primeira linha está recebendo do usuário um valor em string
e tá convertendo esse valor pra um tipo Number
b)Se o usuário digitar o número 10 será mostrado "Esse número passou no teste"
 caso ele digitasse -10, o console não imprimiria nada.
C)Sim, haverá um erro no console chamado "mensagem is not defined". O que ocorre é que quando temos 
dois blocos de códigos aninhados, o escopo de codigo maior, considerado escopo pai, permite que o
escopo de código menor, considerado escopo filho, acesse suas variáveis, porém o contrário não
é permitido. Nesse caso, a variavel "mensagem" foi declarada dentro do escopo filho, e o escopo pai
tentou acessá-la para mostrar na tela, o q não foi possível, ja que o pai não tem acesso as variaveis do filho.
*/



/*EXERCÍCIO DE ESCRITA DE CÓDIGO */

/*EXERCÍCIO 4 

let idade= Number(prompt("Digite sua idade"));
if(idade >= 18){
    console.log("Você pode dirigir");
}else{
    console.log("Você não pode dirigir");
}

*/

/*EXERCÍCIO 5 */

/*const turno = prompt("Digite seu turno. M (matutino), V (Vespertino), N (noturno)");

    if(turno === "M"){
        console.log("Bom dia");
    }else if(turno ==="V"){
        console.log("Boa tarde");
    }else if(turno === "N"){
         console.log("Boa noite");

    }else{
        console.log("Digite somente as opções disponíveis");
    }
*/

/*EXERCÍCIO 6  

const turno = prompt("Digite seu turno. M (matutino), V (Vespertino), N (noturno)");
switch(turno){
case "M": 
console.log("Bom dia");
    break;
case "V":
    console.log("Boa tarde");
    break;
case "N":
    console.log("Boa noite");
    break;
    
    default:
        console.log("Digite somente as opções disponíveis");
}

*/

/*EXERCÍCIO 7 

const genero = prompt("Qual o gênero do filme que será assistido?");
const precoDoIngresso = Number(prompt("Digite o preço do ingresso"));

if(genero === "Fantasia" && precoDoIngresso <  15.00){
    console.log("Bom filme!");
}else{
    console.log("Escolha outro filme :(");
}

*/


/*DESAFIOS*/

/*DESAFIO 1 

const genero = prompt("Qual o gênero do filme que será assistido?");
const precoDoIngresso = Number(prompt("Digite o preço do ingresso"));
const snack = prompt("Qual snack você quer comprar?");
if(genero === "Fantasia" && precoDoIngresso <  15.00){
    console.log("Bom filme! ...com " + snack);
}else{
    console.log("Escolha outro filme :(");
}
*/

/*DESAFIO 2*/
/*
 const nomeCompleto = prompt("Digite seu nome completo");
 let tipoDeJogo= prompt("Digite o tipo de jogo desejado");
 let etapaDoJogo = prompt("Digite a etapa do jogo");
 const categoria = prompt("Digite a categoria desejada: 1, 2, 3 ou 4");
 const quantidadeDeIngressos = prompt("Indique a quantidade de Ingressos");
let valorDoIngresso=0;
let valorTotal = 0;
let cotacao = 4.10;


if(tipoDeJogo === "DO"){
    tipoDeJogo="Doméstico";
    if(categoria === "1"){
       
        switch (etapaDoJogo) {
            case "SF":
                valorDoIngresso = 1320.00;
                etapaDoJogo ="Semi-Final";
              
                break;
            case "DT":
                valorDoIngresso = 660.00;
                etapaDoJogo ="Decisão de terceiro lugar";
                
                break;
             case "FI":
                 valorDoIngresso = 1980.00;
                 etapaDoJogo ="Final";
               
                 break;   
            default:
                
                break;
        }
    }

    
    else if (categoria === "2"){
        switch (etapaDoJogo) {
            case "SF":
                valorDoIngresso = 880.00;
                console.log(valorDoIngresso);
                break;
            case "DT":
                valorDoIngresso = 440.00;
                break;
             case "FI":
                 valorDoIngresso = 1320.00;
                 break;   
            default:
          
                break;
        }
    }else if(categoria === "3"){
        switch (etapaDoJogo) {
            case "SF":
                valorDoIngresso = 550.00;
                console.log(valorDoIngresso);
                break;
            case "DT":
                valorDoIngresso = 330.00;
                break;
             case "FI":
                 valorDoIngresso = 880.00;
                 break;   
            default:
              
                break;
        }

    }
    else if(categoria === "4"){
        switch (etapaDoJogo) {
            case "SF":
                valorDoIngresso = 220.00;
                console.log(valorDoIngresso);
                break;
            case "DT":
                valorDoIngresso =170.00;
                console.log(valorDoIngresso);
                break;
             case "FI":
                 valorDoIngresso = 320.00;
                 console.log(valorDoIngresso);
                 break;   
            default:
               
                break;
        }

    }
}
else if(tipoDeJogo === "IN"){

    tipoDeJogo="Internacional";
    if(categoria === "1"){
       
        switch (etapaDoJogo) {
            case "SF":
                valorDoIngresso = 1320.00/cotacao;
                etapaDoJogo ="Semi-Final";
              
                break;
            case "DT":
                valorDoIngresso = 660.00/cotacao;
                etapaDoJogo ="Decisão de terceiro lugar";
                
                break;
             case "FI":
                 valorDoIngresso = 1980.00/cotacao;
                 etapaDoJogo ="Final";
               
                 break;   
            default:
                
                break;
        }
    }

    
    else if (categoria === "2"){
        switch (etapaDoJogo) {
            case "SF":
                valorDoIngresso = 880.00/cotacao;
                console.log(valorDoIngresso);
                break;
            case "DT":
                valorDoIngresso = 440.00/cotacao;
                break;
             case "FI":
                 valorDoIngresso = 1320.00/cotacao;
                 break;   
            default:
          
                break;
        }
    }else if(categoria === "3"){
        switch (etapaDoJogo) {
            case "SF":
                valorDoIngresso = 550.00/cotacao;
                console.log(valorDoIngresso);
                break;
            case "DT":
                valorDoIngresso = 330.00/cotacao;
                break;
             case "FI":
                 valorDoIngresso = 880.00/cotacao;
                 break;   
            default:
              
                break;
        }

    }
    else if(categoria === "4"){
        switch (etapaDoJogo) {
            case "SF":
                valorDoIngresso = 220.00/cotacao;
                console.log(valorDoIngresso);
                break;
            case "DT":
                valorDoIngresso =170.00/cotacao;
                console.log(valorDoIngresso);
                break;
             case "FI":
                 valorDoIngresso = 320.00/cotacao;
                 console.log(valorDoIngresso);
                 break;   
            default:
               
                break;
        }

    }


}


valorTotal = valorDoIngresso * quantidadeDeIngressos;
console.log("--Dados da Compra--");
console.log("Nome do cliente: "+nomeCompleto);
console.log("Tipo do jogo: "+tipoDeJogo);
console.log("Etapa do jogo: "+etapaDoJogo);
console.log("Categoria: "+categoria);
console.log("Quantidade de Ingressos: "+quantidadeDeIngressos);
console.log("---Valores---");
console.log("Valor do ingresso: " +valorDoIngresso);
console.log("Valor total: " +valorTotal);

*/

 







