import React from "react"
import './App.css';
import Cadastro from './components/Cadastro';
import Lista from "./components/Lista"
import axios from "axios"


export default class App extends React.Component{


  state = {
    usersList:[],
    inputEmail:"",
    inputName:"",
    isOnRegister:true,
  }
  
  componentDidMount(){
    this.getUsers();

  }


  showRegister=()=>{
    this.setState({isOnRegister:true})
  }

  showList=()=>{
    this.setState({isOnRegister:false})
  }


  onChangeInputName = (event) =>{
    this.setState({inputName:event.target.value});
  }
  
  onChangeInputEmail = (event)=> {
    this.setState({inputEmail:event.target.value});
  }

  createUser=()=>{

    const body = {
      name:this.state.inputName,
      email:this.state.inputEmail
    }
    
    axios.
    post("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
    ,
      body, 
      {
      headers: {
        Authorization:"paula-lopes-cruz"
        }

      }
      ).then((res) =>{
        this.setState({inputName:"", inputEmail:""} );
        this.getUsers();
        alert("Usuário Criado com Sucesso!");
      }).catch((err) => {
        alert("Digite os valores nos campos corretamente!");

      })

  }

  getUsers = () =>{

    axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
      {
        headers:{
          Authorization:"paula-lopes-cruz"
        }
      }
      ).then((res)=> {
        this.setState({usersList:res.data});
        
        
      }).catch((err)=>{
        console.log("Deu erro");
      })

  }
  deleteUser = (id) =>{

    axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`
      ,
      {
        headers:{
          Authorization:"paula-lopes-cruz"
        }
      }
      ).then((res)=> {
      this.getUsers();
      console.log("Usuário Excluído com sucesso!")
        
        
      }).catch((err)=>{
        console.log("Desculpe. Não pudemos excluir. Tente novamente!");
      })

  }


  render(){

    const rendersCorrectScreen=()=>{
      if(this.state.isOnRegister === true){
        return  <Cadastro
      
        inputEmail={this.state.inputEmail}
        onChangeInputEmail = {this.onChangeInputEmail}
        inputName={this.state.inputName}
        onChangeInputName={this.onChangeInputName}
        createUser = {this.createUser}
        renderList= {this.showList}
        />
      }else{
       
       return <Lista
      
      usersList={this.state.usersList} 
      deleteUser={this.deleteUser}
      renderRegister= {this.showRegister}
      />

        
      }
    }
    
 

    
  return (
    <div>
     
      {rendersCorrectScreen()}
  
     </div>
  );
}
}

