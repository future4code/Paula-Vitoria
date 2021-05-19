type pokemon {
	name: string,
        types: string,
	healthPoints: number
}

const pokemon1: pokemon = {
  name: "Charmander",
  types: "Fire",
  healthPoints: 28
}

const pokemon2: pokemon = {
  name: "Bulbasaur",
  types: "Grass/Poison",
  healthPoints: 31
}

const pokemon3: pokemon = {
  name: "Squirtle",
  types: "Water",
  healthPoints: 35
}
/*a)rodar o comando: tsc <nome_do_arquivo> 
b)se estivesse numa pasta diferente, o comando seria diferente também. Nesse caso, teriamos que acessar a pasta src 
antes de dar o comando
c) Para transpilar multiplos arquivos de uma vez só, basta criar o arquivo de configuração do typescript(o tsconfig.json)
através do comando "tsc --init".
Depois, é só configurarmos ele para isso. Então, no terminal, basta digitar o comando "tsc" que um novo arquivo será gerado 
automaticamente.
d)O que chamou a minha atenção foi a questão da versão do javascript. Logo quando eu criei o arquivo, a versão
do ecmascript era 5 e eu tive que atualizar para a 6. 
*/