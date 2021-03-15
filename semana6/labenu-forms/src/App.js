import logo from './logo.svg';
import './App.css';
import DadosGerais from './components/DadosGerais'
import InformacoesEnsinoSuperior from './components/InformacoesEnsinoSuperior'

function App() {
  return (
    <div className="container-geral">
      <DadosGerais/>
      <InformacoesEnsinoSuperior/>
    </div>
  );
}

export default App;
