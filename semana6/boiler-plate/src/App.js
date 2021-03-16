import React from 'react'
import styled from 'styled-components'
import './styles.css'

const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
`

const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({completa}) => (completa ? 'line-through' : 'none')};
`

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`

class App extends React.Component {
    state = {
      tarefas: [
        {
          id: Date.now(), // Explicação abaixo
          texto: 'Texto da tarefa',
          completa: false // Indica se a tarefa está completa (true ou false)
        }
    
    ],
      inputValue: '',
      filtro: 'pendentes'
    }

  componentDidUpdate() {
    const jsonTarefa = JSON.stringify(this.state.tarefas)
    localStorage.setItem("tarefas", jsonTarefa);
  };

  componentDidMount() {
   const tarefaString = localStorage.getItem("tarefas");
    const objetoTarefa = JSON.parse(tarefaString)
    console.log(objetoTarefa);
  };

  onChangeInput = (event) => {
    this.setState({inputValue:event.target.value})
  
  }

  criaTarefa = () => {
   const novaTarefa = {
      id:Date.now(),
      texto:this.state.inputValue,
      completa:this.state.filter
    
    }

   const novaListaDeTarefas =  [...this.state.tarefas, novaTarefa]

    this.setState({tarefas:novaListaDeTarefas, inputValue:""});

  }

  removerTarefa =(id)=>{
    console.log("removi");
    const novaListaDeTarefas = this.state.tarefas.filter((tarefa)=>{
      return tarefa.id !== id

    })

    this.setState({tarefas:novaListaDeTarefas});
}

  selectTarefa = (id) => {
    const novaListaTarefas = this.state.tarefas.map((tarefa)=>{
      if(id === tarefa.id){
        const novaTarefa = {
          ...tarefa, 
          completa:!tarefa.completa
        }
        return novaTarefa;
      }else{
        return tarefa;
      }

    })

    this.setState({tarefas:novaListaTarefas});

  }


  apagarTodasTarefas=()=>{
    this.setState({tarefas:[]})
  }

  onChangeFilter = (event) => {
    this.setState({filtro:event.target.value});

  }

  render() {
    const listaFiltrada = this.state.tarefas.filter(tarefa => {
      switch (this.state.filtro) {
        case 'pendentes':
          return !tarefa.completa
        case 'completas':
          return tarefa.completa
        default:
          return true
      }
    })

    return (
      <div className="App">
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input value={this.state.inputValue} onChange={this.onChangeInput}/>
          <button onClick={this.criaTarefa}>Adicionar</button>
        </InputsContainer>
        <br/>

        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filter} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
          <input placeholder="Filtrar pelo nome" value={this.state.inputValue} onChange={this.onChangeInput}/>
        </InputsContainer>
        <TarefaList>
          {listaFiltrada.map(tarefa => {
            return (
              <div>
              <Tarefa
                completa={tarefa.completa}
                onClick={() => this.selectTarefa(tarefa.id)}
              >
                {tarefa.texto} 
        
              </Tarefa>
              <button onClick={()=>this.removerTarefa(tarefa.id)}>remover</button>
              </div>
              
            )
          })}
        </TarefaList>
        <button onClick = {this.apagarTodasTarefas}>Apagar todas</button>
        
      </div>
    )
  }
}

export default App
