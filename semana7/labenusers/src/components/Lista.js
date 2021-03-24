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
            
            
            <button>x</button></li> 

        })
       
        return(
            
            <div>
                <Titulo>Usuários Cadastrados </Titulo>
                    <ul>
                    {users} 
                    </ul>
            </div>
        )
    }
}