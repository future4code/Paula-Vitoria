import React from "react"

export default class InputComOpcoes extends React.Component{
    render(){
        return(
        <div>
            <p>{this.props.pergunta}</p>
            <select>
                <option value={this.props.valor1}>{this.props.nome1}</option>
                <option value={this.props.valor2}>{this.props.nome2}</option>
                <option selected value={this.props.valor3}>{this.props.nome3}</option>
                <option value={this.props.valor4}>{this.props.nome4}</option>
            </select>
        </div>   
        )
    }
}
