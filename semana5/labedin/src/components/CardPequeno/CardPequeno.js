import React from 'react';
import './CardPequeno.css'


function CardPequeno(props){
    return(
        <div className="card-pequeno-container"> 
            <img src={props.imagem}/>
            <div className = "container-dados-adress">
                <h4>{props.nome}</h4>
                <p>{props.descricao}</p>
            </div>    
        </div>
    )

}

export default CardPequeno;

/*import React from 'react';
import './ImagemButton.css'

function ImagemButton(props) {
    return (
        <div className="image-button-container">
            <img src={ props.imagem }/>
            <p>{ props.texto }</p>
        </div>

    )
}

export default ImagemButton;*/