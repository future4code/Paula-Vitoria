import React from "react"
import styled from "styled-components"
import Detalhe from "./Detalhe"
import axios from "axios"

const Titulo = styled.h3 `
display:flex;
justify-content:center;
align-items:center;
` 
export default class Lista extends React.Component{

    state={
        detail:[],
        listScreen:false
    }

    showDetail=(id)=>{
        axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`,
        {
            headers:{
            Authorization:"paula-lopes-cruz"
        }
        }
            ).then((res)=>{
                this.setState({detail:res.data});
                this.setState({listScreen:true});
            }).catch((err)=>{
                console.log("Falha ao retornar detalhes do usuário");
            })
         }

    

         renderScreen = () =>{
             if(this.state.listScreen){
                 console.log(this.state.detail.id);
                 return <Detalhe
                            nome={this.state.detail.name}
                            email={this.state.detail.email}
                            deleteUser={this.props.deleteUser}
                            idUser={this.state.detail.id}
                            />
                        


    
         }
        }
    
    render(){

        
        const users = this.props.usersList.map((user)=>{
            return <li key={user.id} onClick={()=>{this.showDetail(user.id)}}>{user.name}
            <button onClick={()=>{this.props.deleteUser(user.id)}}>x</button></li> 

        })
       
        
        return(

            <div>
                <button onClick={this.props.renderRegister}>Ir para a página de Cadastro</button>
               <Titulo>Usuários Cadastrados </Titulo>
                   <ul>
                   {users} 
                   </ul>
                   {this.renderScreen()}
                   
                

           </div>

           
            
            
        )
    }
}