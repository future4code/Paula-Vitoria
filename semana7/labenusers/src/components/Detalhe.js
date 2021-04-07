import React from "react";
import Lista from "./Lista"


export default class Detalhe extends React.Component{

    render(){
        
        
        return(
        <div>
            <div>
                Nome:<span>{this.props.nome}</span>
            </div>
            <div>
                Email:<span>{this.props.email}</span>
            </div>
            <button onClick={()=>{this.props.deleteUser(this.props.idUser)}}>Deletar</button>
            <button>Voltar</button>

        </div>
        )
    }

}