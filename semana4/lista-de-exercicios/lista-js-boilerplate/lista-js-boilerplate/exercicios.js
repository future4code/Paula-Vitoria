//Exercício 1
function inverteArray(array) {
   let arrayInvertido =[];
   for(let i = array.length-1; i>=0 ; i--){
      arrayInvertido.push(array[i])
   }
  return arrayInvertido;
}

//Exercício 2

function retornaNumerosParesElevadosADois (array) {
   let novoArray =[];
  for(numero of array){
     if(numero%2===0){
        novoArray.push(numero*numero);
      }
}
return novoArray;
}


//Exercício 3

function retornaNumerosPares (array) {
   let novoArray =[]
   for(numero of array){
      if(numero%2===0){
         novoArray.push(numero);

      }
   }
  return novoArray;
}


//Exercício 4

function retornaMaiorNumero(array) {
   let maior = array[0];
   for(let i =0; i<array.length; i++){
      if(array[i]> maior){
         maior = array[i];
      }
   }
   return maior;
}


//Exercício 5

function retornaQuantidadeElementos (array) {
   let quantidade = 0;
   for(elemento of array){
      quantidade++;
   }
   return quantidade;
}

//Exercício 6

function retornaExpressoesBooleanas() {
   const booleano1 = true;
   const booleano2 = false;
   const booleano3 = !booleano2;
   const booleano4 = !booleano3;

   //let controle = true;
   let booleanos = []

  const exp1 = booleano1 && booleano2 && !booleano4;
   booleanos.push(exp1);
   const exp2 = (booleano1 && booleano2) || !booleano3;
  booleanos.push(exp2); 
  const exp3 = (booleano2 || booleano3) && (booleano4 || booleano1);
  booleanos.push(exp3);
  const exp4 = !(booleano2 && booleano3) || !(booleano1 && booleano3);
  booleanos.push(exp4)
  const exp5 = !(booleano1) && !(booleano3) || (!booleano4 && booleano3 && booleano3)
  booleanos.push(exp5);

  return booleanos;
}



//Exercício 7

function retornaNNumerosPares(n) {
   const nPares = [];
 for(let numero = 0; nPares.length < n; numero++) {
  if(numero % 2 === 0) {
    nPares.push(numero)
  }
 }
 return nPares;
}




// Exercício 8

function checaTriangulo(a, b, c) {
   
   if(a===b && a===c && c===b){
      return 'Equilátero';
      
   }else if(a!==b && a!==c && b!==c){
       return'Escaleno';

   }else{
       return'Isósceles';
   }
}



// Exercício 9

function comparaDoisNumeros(num1, num2) {
   let menor;
   let obj = {
      maiorNumero:0,
      maiorDivisivelporMenor:true,
      diferenca:0,
   }


   if(num1 > num2){
      obj.maiorNumero = num1;
      menor=num2;
   }else{
      obj.maiorNumero = num2;
      menor= num1;
   }

   if(obj.maiorNumero%menor === 0){
      maiorDivisivelporMenor =  true;
   }else{
      maiorDivisivelporMenor =  false;
   }
  
   obj.diferenca = obj.maiorNumero - menor;

   return obj;


   
}


// Exercício 10

function segundoMaiorEMenor(array) {
   let arrayMaiorMenor = [];
   for(let i =0; i< array.length; i++){
      for(let j=0; j<array.length; j++){
         if(array[i] < array[j]){
            let aux = array[i];
            array[i] = array[j];
            array[j] = aux;
         }
      }
   }
   let segundoMaior = 0;
   let segundoMenor = 0;

   for(let i = 0 ; i< array.length; i++){
      segundoMaior = array[array.length -2];
      segundoMenor = array[1];
   }

arrayMaiorMenor.push(segundoMaior);
arrayMaiorMenor.push(segundoMenor);

return arrayMaiorMenor;
 }

//Exercício 11

function ordenaArray(array) {
   for(let i =0; i< array.length; i++){
      for(let j=0; j<array.length; j++){
         if(array[i] < array[j]){
            let aux = array[i];
            array[i] = array[j];
            array[j] = aux;
         }
      }
   }

return array;
   
}

// Exercício 12
function filmeFavorito() {
   const filme = {
      nome:"O Diabo Veste Prada",
      ano: 2006,
      diretor: "David Frankel",
      atores:["Meryl Streep", "Anne Hathaway","Emily Blunt","Stanley Tucci"]

   }

   return filme;
}

// Exercício 13

function imprimeChamada() {
   const filme = {
      nome:"O Diabo Veste Prada",
      ano: 2006,
      diretor: "David Frankel",
      atores:["Meryl Streep", "Anne Hathaway","Emily Blunt","Stanley Tucci"]
   }

   return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores[0]}, ${filme.atores[1]}, ${filme.atores[2]}, ${filme.atores[3]}.`
}

// Exercício 14

function criaRetangulo(lado1, lado2) {
   const retangulo={
      largura:lado1,
      altura:lado2,
      perimetro:(lado1*2) + (lado2*2),
      area:lado1 * lado2,
   }
return retangulo;

}

// Exercício 15

function anonimizaPessoa(pessoa) {
   pessoa.nome="ANÔNIMO";
   return pessoa;
}

// Exercício 16

const arrayDePessoas = [
  { nome: "Pedro", idade: 20 },
  { nome: "João", idade: 10 },
  { nome: "Paula", idade: 12 },
  { nome: "Artur", idade: 89 } 
]

// Exercício 16, letra A

function maioresDe18(arrayDePessoas) {
  
   callback = (pessoa)=>{
     if(pessoa.idade > 18){
        return true;
     }else{
        return false;
     }
   }
   
  const soMaioresDe18 = arrayDePessoas.filter(callback)

   return soMaioresDe18;
}

// Exercício 16, letra B

function menoresDe18(arrayDePessoas) {
  const callback = (pessoa) =>{
   if(pessoa.idade < 18){
      return true;
   }else{
      return false;
   }
  }

  const soMenoresDe18 = arrayDePessoas.filter(callback);
  return soMenoresDe18;
}

// Exercício 17, letra A

function multiplicaArrayPor2(array) {
   const callback = (numero) =>{
      return numero*2 ;
   }
const multiplicadoPor2 = array.map(callback)
 
  return multiplicadoPor2;
}



// Exercício 17, letra B

function multiplicaArrayPor2S(array) {
  const callback = (numero)=>{
     return String(numero * 2);
  }

  const multiplicadoPor2S = array.map(callback);
  return multiplicadoPor2S
}

// Exercício 17, letra C

function verificaParidade(array) {
   const callback = (numero) => {
      if(numero%2 === 0){
         return `${numero} é par`
      }else{
         return `${numero} é ímpar`
      }
   }

   const verificaParidade= (array.map(callback));
   
   return verificaParidade;
   }


// Exercício 18

const pessoas = [
  { nome: "Paula", idade: 12, altura: 1.8},
  { nome: "João", idade: 20, altura: 1.3},
  { nome: "Pedro", idade: 15, altura: 1.9},
  { nome: "Luciano", idade: 22, altura: 1.8},
  { nome: "Artur", idade: 10, altura: 1.2},
  { nome: "Soter", idade: 70, altura: 1.9}
]

//Exercício 18, letra A

function retornaPessoasAutorizadas() {
   const callback = (pessoa) =>{
      if(pessoa.altura >= 1.5 && pessoa.idade > 14 && pessoa.idade < 60){
         return true;
      }else{
         return false;
      }
   }

   const soPessoasAutorizadas = pessoas.filter(callback);
   return soPessoasAutorizadas;
}


// Exercício 18, letra B

function retornaPessoasNaoAutorizadas() {

  
   const callback =(pessoa) =>{
         if(pessoa.altura<1.5){
            return true;
         }
         if(pessoa.idade < 14 || pessoa.idade>60){
            return true;
         }else{
            return false;
         }
   }

   const soPessoasNaoAutorizadas = pessoas.filter(callback);
   return soPessoasNaoAutorizadas;
}

//Exercício 19

const consultas = [
   { nome: "João", genero: "masculino", cancelada: false, dataDaConsulta: "01/10/2019" },
   { nome: "Pedro", genero: "masculino", cancelada: true, dataDaConsulta: "02/10/2019" },
   { nome: "Paula", genero: "feminino", cancelada: false, dataDaConsulta: "03/11/2019" },
   { nome: "Márcia", genero: "feminino", cancelada: true, dataDaConsulta: "04/11/2019" }
 ]
function retornaEmailConsulta() {
      const callback=(consulta)=>{
      if(consulta.cancelada === false && consulta.genero==="feminino"){
         return `Olá, Sra. ${consulta.nome}. Estamos enviando esta mensagem para
         lembrá-la da sua consulta no dia ${consulta.dataDaConsulta}. Por favor, acuse
         o recebimento deste e-mail.`

      }else if(consulta.cancelada === false && consulta.genero==="masculino"){
         return `Olá, Sr. ${consulta.nome}. Estamos enviando esta mensagem para
         lembrá-lo da sua consulta no dia ${consulta.dataDaConsulta}. Por favor, acuse
         o recebimento deste e-mail.`
      }else if(consulta.cancelada === true && consulta.genero==="feminino"){
         return `Olá, Sra. ${consulta.nome}. Infelizmente, sua consulta marcada para o dia
         ${consulta.dataDaConsulta} foi cancelada. Se quiser, pode entrar em contato conosco 
         para remarcá-la.`
         
      }else{
         return `Olá, Sr. ${consulta.nome}. Infelizmente, sua consulta marcada para o dia
         ${consulta.dataDaConsulta} foi cancelada. Se quiser, pode entrar em contato conosco 
         para remarcá-la.`
      }
   }
   const soConsultasFiltradas = consultas.map(callback);
   return soConsultasFiltradas;

}

//Exercício 20

const contas = [
  { cliente: 'João', saldoTotal: 1000, compras: [100, 200, 300] },
  { cliente: 'Paula', saldoTotal: 7500, compras: [200, 1040] },
  { cliente: 'Pedro', saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
  { cliente: 'Luciano', saldoTotal: 100, compras: [100, 200, 1700] },
  { cliente: 'Artur', saldoTotal: 1800, compras: [200, 300] },
  { cliente: 'Soter', saldoTotal: 1200, compras: [] }
]

function atualizaSaldo() {
   totalCompra = 0;

  const callback = (conta) =>{
   contas.compras.forEach(valorDaCompra)
      totalCompra +=valorDaCompra;

   
  }

  }


