import React from "react";
import styled from "styled-components";

const RegisterContainer = styled.div`
border: 1px solid black;
display:flex;
flex-direction:column;
width: 250px;
height:200px;
align-items:center;
justify-content:center;
margin-top: 100px;
margin-left: 550px;

`

const Button = styled.button `
margin-top: 50px;
`

export default class Cadastro extends React.Component{

    render(){
        return (
            <div>
            <button onClick={this.props.renderList}>Ir para a página de Lista</button>
            <RegisterContainer> 
                
                <label>
                    Nome:
                    <input
                    value={this.props.inputName}
                    onChange = {this.props.onChangeInputName}/>
                </label>
               
               <label>
                   Email:
               <input
                    value={this.props.inputEmail}
                    onChange = {this.props.onChangeInputEmail}
               />
               </label>

               <Button onClick = {this.props.createUser}>Salvar</Button>
        </RegisterContainer>
        </div>
        )
    }

}