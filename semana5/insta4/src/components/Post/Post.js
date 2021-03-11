import React from 'react'
import './Post.css'
import {IconeComContador} from '../IconeComContador/IconeComContador'
import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'
import {SecaoComentario} from '../SecaoComentario/SecaoComentario'
import iconeEstrelaPreta from '../../img/star_border-24px.svg'
import iconeEstrelaBranca from '../../img/star-24px.svg'
import iconeShare from '../../img/share-24px.svg'
import facebook from '../../img/facebook-24px.svg'
import twitter from '../../img/twitter.svg'

class Post extends React.Component {
  state = {
    curtido: false,
    numeroCurtidas: 0,
    comentando: false,
    numeroComentarios: 0,
    salvo:false,
    compartilhado: false,

}

  onClickSalvar= ()=>{
    if(this.state.salvo === false){
      this.setState({salvo:true});
    }else{
      this.setState({salvo:false});
    }
  }

  onClickCompartilhar= () =>{
    this.setState({compartilhado:true});
}

  handleValorInput = (event) =>{
    this.setState({valorInput: event.target.value});

  }

  onClickCurtida = () => {
    let curtidas = 0;
    
    if(this.state.curtido === false){
      this.setState({curtido:true});
      curtidas = curtidas + 1 ;
      this.setState({numeroCurtidas:curtidas});
    }else{
      this.setState({curtido:false});
      curtidas = 1;
      curtidas = curtidas - 1;
      this.setState({numeroCurtidas:curtidas});
    }
  }

  onClickComentario = () => {
    this.setState({
      comentando: !this.state.comentando
    })
  }

  aoEnviarComentario = () => {
    this.setState({
      comentando: false,
      numeroComentarios: this.state.numeroComentarios + 1
    })
  }

  render() {

    let iconeSalvo;
    let iconeCurtida;
    let iconeCompartilhar = iconeShare;

    if(this.state.salvo){
      iconeSalvo = iconeEstrelaBranca;
    }else{
      iconeSalvo = iconeEstrelaPreta;
    }

    if(this.state.curtido) {
      iconeCurtida = iconeCoracaoPreto
    } else {
      iconeCurtida = iconeCoracaoBranco
    }

    let componenteComentario


    if(this.state.comentando) {
      componenteComentario = <SecaoComentario aoEnviar={this.aoEnviarComentario}/>
    }

    



    return <div className={'post-container'}>
      <div className={'post-header'}>
        <img className={'user-photo'} src={this.props.fotoUsuario} alt={'Imagem do usuario'}/>
        <p>{this.props.nomeUsuario}</p>
      </div>

      <img className={'post-photo'} src={this.props.fotoPost} alt={'Imagem do post'}/>

      <div className={'post-footer'}>
        <IconeComContador
          icone={iconeCurtida}
          onClickIcone={this.onClickCurtida}
          valorContador={this.state.numeroCurtidas}
        />

        <IconeComContador
          icone={iconeSalvo}
          onClickIcone={this.onClickSalvar}/>

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={this.onClickComentario}
          valorContador={this.state.numeroComentarios}
        />

        <IconeComContador
          icone={iconeCompartilhar}
          onClickIcone={this.onClickCompartilhar}
        
        />


      </div>
      {componenteComentario}
   
    </div>
  }
}

export default Post