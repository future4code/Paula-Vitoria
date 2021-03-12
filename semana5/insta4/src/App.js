import React from "react";
import "./App.css";
import Post from "./components/Post/Post";
import styled from 'styled-components';
class App extends React.Component {
  state = {

  
    posts: [
      {
        nomeUsuario: "Paulinha",
        fotoUsuario: "https://picsum.photos/50/50",
        fotoPost: "https://picsum.photos/200/150",
      },
      {
        nomeUsuario: "Elvis",
        fotoUsuario:"https://www.hypeness.com.br/1/2020/06/Bob-Esponja_Patrick-Estrela_LGBT_LGBTQ-Foto-Reprodu%C3%A7%C3%A3o-5-1.jpg",
        fotoPost: "https://www.hypeness.com.br/1/2020/12/d2079593-looney-tunes-550x500-1.jpg",
      },
      {
        nomeUsuario: "Felipe",
        fotoUsuario:
          "https://i.pinimg.com/originals/af/89/a1/af89a17f2516e654cb8c46dd8946e535.jpg",
        fotoPost:
          "https://png.pngtree.com/element_origin_min_pic/16/09/17/1657dcfa77d489e.jpg",
      },
    ],

    valorInputNome:"",
    valorInputFotoUsuario:"",
    valorInputFotoPost:"",
  };


  onChangeInputNome=(event)=>{
    this.setState({ valorInputNome: event.target.value });
  }

  onChangeInputFotoUsuario=(event)=>{
    this.setState({valorInputFotoUsuario:event.target.value});
  }

  onChangeInputFotoPost=(event)=>{
    this.setState({valorInputFotoPost:event.target.value});
  }

  
 adicionaPost = () => {
     
      const novoPost = {
        nomeUsuario: this.state.valorInputNome,
        fotoUsuario: this.state.valorInputFotoUsuario,
        fotoPost: this.state.valorInputFotoPost
      };

 
    let novaListaPosts = [novoPost,...this.state.posts]

    this.setState({posts:novaListaPosts, valorInputFotoPost:"", valorInputFotoUsuario:"",valorInputNome:""});

  };



  render() {

    const listaDePosts = this.state.posts.map((post) => {
      return (
        <Post
          nomeUsuario={post.nomeUsuario}
          fotoUsuario={post.fotoUsuario}
          fotoPost={post.fotoPost}
        />
      );
    });

  const SubTituloRosa = styled.h2`
  color:#ff6f9c;
  margin:10px;

`

    const TituloRosa = styled.h1`
    display:flex;
    align-items:center;
    justify-content:center;
     color:#ff6f9c;
    
    `
    const PostContainer = styled.div`
     display:flex;
     flex-direction:column;
     justify-content:center;
     align-items:center;
     
     
    `

    const ButtonAdiciona = styled.button`
      background-Color:#ff6f9c;
      border-radius:10px;
      margin-left: 10px;
    `

    const InputPost = styled.input`
    margin: 10px;
    `
    
    return (
      <div>

        <TituloRosa>Galeria de Posts</TituloRosa>
        <SubTituloRosa>Criar um novo Post</SubTituloRosa>
   
          <InputPost
            value={this.state.valorInputNome}
            onChange={this.onChangeInputNome}
            placeholder={"nome do usuário"}
          />

          <InputPost
          value={this.state.valorInputFotoUsuario}
          onChange={this.onChangeInputFotoUsuario}
          placeholder={"Foto do usuário"}
          />


          <InputPost
          value={this.state.valorInputFotoPost}
          onChange={this.onChangeInputFotoPost}
          placeholder={"Foto do Post"}
          />
       

          <ButtonAdiciona onClick={this.adicionaPost}>Adicionar Post </ButtonAdiciona>
          <hr/>
        <PostContainer>
          {listaDePosts}
        </PostContainer>
     
      </div>
    );
  }
}
export default App;