import React from "react"

export default class Lista extends React.Component{

    render(){

       
        const users = this.props.usersList.map((user)=>{
            return <li>{user.name}<button onClick = {this.props.deleteUser(user.id)}>x</button></li> 

        })
       
        return(
            
            <div>
                <h3>Usuários Cadastrados </h3>
                    <ul>
                    {users} 
                    </ul>
            </div>
        )
    }
}