import React from "react";

export default class Detalhe extends React.Component{
    render(){
        
        
        return(
            <div>
                <label>
                    Nome:<p>{this.props.nome}</p>
                </label>
                <label>
                    Email:<p>{this.props.email}</p>
                </label>
                <button>Deletar</button>
                <button>Voltar</button>

            </div>


        )
    }

}