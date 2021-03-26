import React from "react"
import styled from "styled-components"

const FormContainer = styled.div`

`

export default class CreatePlayListPage extends React.Component{

    state ={
        inputName:""
    }

    onChangeInputName=(e)=>{
        this.setState({inputName:e.target.value})
    }


    render(){
        console.log(this.state.inputName);
        return(
            <FormContainer>
                <h3>Que tal Criar uma Playlist?</h3>
                <label>
                    Nome da PlayList
                    <input
                    onChange={this.onChangeInputName}
                    value={this.state.inputName}/>
                </label>
                    <button>Criar!</button>
            </FormContainer>
        )
    }


}