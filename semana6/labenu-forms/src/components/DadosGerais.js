import React from "react"
import InputComOpcoes from "./InputComOpcoes"
import InputComPergunta from './InputComPergunta'

export default class DadosGerais extends React.Component{
    
    state = {
        inputRespostas:[]
    }
    render(){

       
        
        return(
            <div>
                <h3>ETAPA 1 - DADOS GERAIS</h3>
                <InputComPergunta
                pergunta="1. Qual o seu nome?"
                input={this.state.inputRespostas}
                />
                <InputComPergunta
                pergunta="2. Qual sua idade?"
                input={this.state.inputRespostas}
                />
                 <InputComPergunta
                pergunta="3. Qual seu email?"
                input={this.state.inputRespostas}
                />

                <InputComOpcoes
                pergunta="Qual a sua escolaridade?"
                valor1="emi" 
                valor2="emc"
                valor3="esi"
                valor4="esc"
                nome1="Ensino médio Incompleto"
                nome2="Ensino médio Completo"
                nome3="Ensino superior Incompleto"
                nome4="Ensino superior Completo"
                />
                <button>Próxima Etapa</button>
            </div>   
        )
    }

} 