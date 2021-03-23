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
margin: 200px;

`

export default class Cadastro extends React.Component{

    render(){
        return (
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

               <button onClick = {this.props.createUser}>Salvar</button>
        </RegisterContainer>
        )
    }

}