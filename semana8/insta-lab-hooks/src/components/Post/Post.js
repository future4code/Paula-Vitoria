import React, { useState } from 'react'
import { PostContainer, PostHeader, UserPhoto, PostPhoto, PostFooter, CommentContainer } from './styles'

import IconeComContador from '../IconeComContador/IconeComContador'
import SecaoComentario from '../SecaoComentario/SecaoComentario'

import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'

const Post = (props) => {

  const [curtido, setCurtido] = useState(false);
  const [icone, setIcone] = useState(iconeCoracaoBranco);
  const [numeroCurtidas,setCurtidas] = useState(0);
  const [comentar, setComentado] = useState(false);
  const [numeroComentarios,setNumeroComentarios] = useState(0);
  const [listComents, setListComents] = useState([])
  
  const onClickCurtida = () => {
    if(curtido){
      setCurtido(false)
      setCurtidas(numeroCurtidas-1)
      setIcone(iconeCoracaoBranco)
    }else {
      setCurtido(true)
      setCurtidas(numeroCurtidas+1)
      setIcone(iconeCoracaoPreto)   
    }
  };

  const onClickComentario = () => {
    if(comentar){
      setComentado(false)
    }else{
      setComentado(true)
    }
  };

  const getSessaoComentario = () =>{
    if(comentar){
      return <SecaoComentario
      enviarComentario={enviarComentario}/>
    }else{
      return <div></div>
    }
  }

  const enviarComentario = (comentario) => {
    setNumeroComentarios(numeroComentarios + 1)
     let newListComents = [...listComents]
    newListComents.push(comentario)
    setListComents(newListComents);

  }
const renderListComents = listComents.map((coment)=>{
    return <p>{coment}</p>
  })

  
  return (
    <PostContainer>
      <PostHeader>
        <UserPhoto src={props.fotoUsuario} alt={'Imagem do usuario'}/>
        <p>{props.nomeUsuario}</p>
      </PostHeader>

      <PostPhoto src={props.fotoPost} alt={'Imagem do post'}/>

      <PostFooter>
        <IconeComContador
          icone={icone}
          onClickIcone={onClickCurtida}
          valorContador={numeroCurtidas}
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={onClickComentario}
          valorContador={numeroComentarios}
        />
      </PostFooter>
      {getSessaoComentario()}
      {renderListComents}
      
    </PostContainer>
  )
  }

export default Post