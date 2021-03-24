import React from "react";
import Etapa2 from './components/Etapa2'
import Etapa1 from './components/Etapa1'
import Etapa3 from './components/Etapa3'
import PaginaFinal from './components/PaginaFinal'

export default class Home extends React.Component {
  state = {
    telaAtual: "App"
  };

  irParaEtapa1 = () => {
    this.setState({ telaAtual: "Etapa1" });
  };

  irParaEtapa2 = () => {
    this.setState({ telaAtual: "Etapa2" });
  };

  irParaEtapa3 = () => {
    this.setState({ telaAtual: "Etapa2" });
  };

  irParaEtapaFinal = () => {
    this.setState({ telaAtual: "Etapa2" });
  };
  /*irParaMensagens = () => {
    this.setState({ telaAtual: "mensagens" });
  };
*/
  render() {
    const renderizaTela= () => {
      switch (this.state.telaAtual) {
        case "Etapa1":
          return <Etapa1 />;
        case "Etapa2":
          return <Etapa2/>;
        default:
          return <div>Erro! Página não encontrada</div>;
      }
    };
    return (
      <div>
        <h1>Home</h1>
        <button onClick={this.irParaEtapa1}>Etapa 1</button>
        {renderizaTela()}
      </div>
    );
  }
}







/*import React from 'react';
import './App.css';
import Etapa1 from './components/Etapa1'
import Etapa2 from './components/Etapa2'
import Etapa3 from './components/Etapa3'
import PaginaFinal from './components/PaginaFinal'
export default class App extends React.Component {
    state ={
    telaAtual:'App'
  }

 
  irParaEtapa1 =() =>{
    this.setState({telaAtual:'Etapa1'})
  }
  render(){

   
    const renderizaTela =()=>{
      switch(this.state.telaAtual){
        case 'Etapa1':
          return <Etapa1/>
        case 'Etapa2':
          return <Etapa2/>
        case 'Etapa3':
          return <Etapa3/>
        case 'PaginaFinal':
          return <PaginaFinal/>
        default: 
          return <div>Erro!</div>
        }
    
      } 
   

     
           return (
    <div className="container-geral">
      {renderizaTela}
    <button onClick={this.irParaEtapa1}>proxima</button>
    </div>
  );

}
}*/

