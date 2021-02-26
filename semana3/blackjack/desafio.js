/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

console.log("Bem vindo ao jogo do BlackJack!");

let confirmado = confirm("Quer iniciar uma nova rodada?");//true

if (!confirmado) {
  console.log("O jogo acabou");
} else {
  let pontuacaoUsuario = 0;
  let pontuacaoComputador = 0;
  let carta1Usuario = comprarCarta();
  let carta2Usuario = comprarCarta();
  let carta1Computador = comprarCarta();
  let carta2Computador = comprarCarta();
  pontuacaoUsuario= carta1Usuario.valor + carta2Usuario.valor;
  pontuacaoComputador=carta1Computador.valor + carta2Computador.valor;
  
if (
    (carta1Usuario.valor === 11 && carta2Usuario.valor === 11) ||
    (carta1Computador.valor === 11 && carta2Computador.valor === 11)
  ) {
   
    carta1Usuario = comprarCarta();
    carta2Usuario = comprarCarta();
    carta1Computador = comprarCarta();
    carta2Computador = comprarCarta();
   //só entra nessa if se as duas cartas dos dois tipos forem As
}//if ///AQUI EM CIMA NAO TEM NADA DE ERRADO

confirmado = true;
 while(confirmado !== false){
    if (pontuacaoUsuario <= 21){
      confirmado = confirm(
        "Suas cartas são " +
          carta1Usuario.texto +
          " e " +
          carta2Usuario.texto +
          " A carta revelada do computador é " +
          carta2Computador.texto +
          "\n" +
          "Deseja Comprar mais uma carta?");
     
      

      let novaCarta = 0;
      novaCarta = comprarCarta();
      console.log("Nova carta a ser somada: " + novaCarta.valor);
      pontuacaoUsuario += novaCarta.valor;
      console.log("PontuacaoUsuarioTotal: " + pontuacaoUsuario);

      console.log(
        "Usuario - cartas: " +
          carta1Usuario.texto +
          " " +
          carta2Usuario.texto +
          " - pontuação " +
          pontuacaoUsuario.valor
      );
      console.log(
        "Computador - cartas: " +
          carta1Computador.texto +
          " " +
          carta2Computador.texto +
          " - pontuação " +
          pontuacaoComputador.valor
      );

      if (pontuacaoUsuario > pontuacaoComputador) {
        console.log("Usuário Ganhou!");
      } else if (pontuacaoUsuario < pontuacaoComputador) {
        console.log("Computador Ganhou!");
      } else {
        console.log("Empate!");
      }
   }
  }//else*/

}