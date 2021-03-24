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
        detail:{},
        
    }
   
   /* showDetail=(id)=>{
        axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`,
        {
            headers:{
            Authorization:"paula-lopes-cruz"
        }
        }
            ).then((res)=>{
                this.setState({detail:res.data});
            }).catch((err)=>{
                console.log("Falha ao retornar detalhes do usuário");
            })
         }*/

    
    render(){
        const users = this.props.usersList.map((user)=>{
            return <li onClick={() => {this.showDetail(user.id)}} key={user.id}>{user.name}
            <button onClick={()=>{this.props.deleteUser(user.id)}}>x</button></li> 

        })
       

        return(

            <div>
                <button onClick={this.props.renderRegister}>Ir para a página de Cadastro</button>
               <Titulo>Usuários Cadastrados </Titulo>
                   <ul>
                   {users} 
                   </ul>

                   {this.state.detail}
           </div>

           
            
            
        )
    }
}