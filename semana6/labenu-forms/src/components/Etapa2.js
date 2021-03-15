import React from 'react'
import InputComPergunta from "./InputComPergunta"

export default class InformacoesEnsinoSuperior extends React.Component{
    
    state = {
        telaAtual:'Etapa1'
      }
    render(){

       
        
        return(
            <div>
               <h3>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h3>
                <InputComPergunta
                pergunta="5. Qual curso?"
                input={this.inputRespostas}
                />

                <InputComPergunta
                pergunta="5. Qual a unidade de ensino?"
                input={this.inputRespostas}
                />
                <button>Próxima Etapa</button>
            </div>   
        )
    }

} 