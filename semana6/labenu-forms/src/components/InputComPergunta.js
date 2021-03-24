import React from "react"

export default class InputComPergunta extends React.Component{
    render(){
        return(
        <div>
            <p>{this.props.pergunta}</p>
            <input
                value={this.props.input}
            />
        </div>   
        )
    }

} 