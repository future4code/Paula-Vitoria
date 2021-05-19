//a)
/*function obterEstatisticas(numeros: number[]): object {
  const numerosOrdenados = numeros.sort((a, b) => a - b);

  let soma: number = 0;

  for (let num of numeros) {
    soma += num;
  }

  const estatisticas: object = {
    maior: numerosOrdenados[numeros.length - 1],
    menor: numerosOrdenados[0],
    media: soma / numeros.length,
  };

  return estatisticas;
}*/

//b)temos as seguintes variáveis:
/*numeros = tipo number 
soma =tipo number  
estatisticas = tipo object*/

//c
/*type amostra = {
  numeros: number[];
  obterEstatisticas: (numeros: number[]) => number[];
};
*/
