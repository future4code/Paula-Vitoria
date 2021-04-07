import React, {useState,useEffect} from "react";
import axios from "axios";

const PokeCard = () => {

    // valor do estado que guarda infos e foto do pokemon
    const [pokemon,setPokemon] = useState({});


  // método que roda após a montagem do componente
  useEffect (()=>{
    pegaPokemon(this.props.pokemon);
})
  // método que roda após a atualização do componente.
  // Um dos casos de atualização do componente é a
  // mudança da props que está sendo passado pra ele

  useEffect(()=>{
    //if (prevProps.pokemon !== this.props.pokemon) {
      setPokemon(this.props.pokemon);
    },[])



    // aqui, é feita uma verificação da props anterior com a props atual.
    // Caso a props anterior seja diferente da props atual,
    // a função pegaPokemon é chamada.
  

  // função que bate na poke API com um nome específico de pokemon
  // Isso permite que consigamos pegar as infos dos pokemons.
  // Nos métodos de ciclo de vida, ela é chamada passando como
  // parâmetro o nome de pokemon que está chegando como props.
 const pegaPokemon = pokeName => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
      .then(response => {
        // guarda as infos do pokemon no estado
        setPokemon(response.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  
   const poke = this.state.pokemon;

    return (
      <div>
        <p>{poke.name}</p>
        <p>{poke.weight} Kg</p>
        {poke.types && <p>{poke.types[0].type.name}</p>}
        {poke.sprites && (
          <img src={poke.sprites.front_default} alt={poke.name} />
        )}
      </div>
    );
  
}

export default PokeCard;
