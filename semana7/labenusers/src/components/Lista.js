import React from "react"
import styled from "styled-components"

const Titulo = styled.h3 `
display:flex;
justify-content:center;
align-items:center;
    
    `

export default class Lista extends React.Component{

    

    render(){

       
        const users = this.props.usersList.map((user)=>{
            return <li key={user.id}>{user.name}
            
            
            <button onClick={()=>{this.props.deleteUser(user.id)}}>x</button></li> 

        })
       
        return(
            
            <div>
                 <button onClick={this.props.renderRegister}>Ir para a página de Cadastro</button>
                <Titulo>Usuários Cadastrados </Titulo>
                    <ul>
                    {users} 
                    </ul>
            </div>
        )
    }
}