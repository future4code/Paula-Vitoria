import React from 'react'
import InputComPergunta from "./InputComPergunta"

export default class InformacoesGeraisEnsino extends React.Component{
    
    state = {
        telaAtual:'Etapa1'
      }
    render(){

       
        
        return(
            <div>
               <h3>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h3>
                <InputComPergunta
                pergunta="5. Por que você nã terminou o curso de graduação?"
                input={this.inputRespostas}
                />
            <div>
            <select>
                <option selected value="nenhum">Nenhum</option>
                <option value="tecnico">Curso técnico</option>
                <option value="ingles">Curso de Inglês</option>
            </select>
            </div>
                
                <button>Próxima Etapa</button>
            </div>   
        )
    }

} 