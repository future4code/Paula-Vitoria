import React from 'react';
import './App.css';
import Post from './components/Post/Post';

class App extends React.Component {
  render() {
    return (
      <div className={'app-container'}>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />

<Post
          nomeUsuario={'Elvis'}
          fotoUsuario={'https://www.hypeness.com.br/1/2020/06/Bob-Esponja_Patrick-Estrela_LGBT_LGBTQ-Foto-Reprodu%C3%A7%C3%A3o-5-1.jpg'}
          fotoPost={'https://www.hypeness.com.br/1/2020/12/d2079593-looney-tunes-550x500-1.jpg'}
        />

<Post
          nomeUsuario={'Felipe'}
          fotoUsuario={'https://i.pinimg.com/originals/af/89/a1/af89a17f2516e654cb8c46dd8946e535.jpg'}
          fotoPost={'https://png.pngtree.com/element_origin_min_pic/16/09/17/1657dcfa77d489e.jpg'}
        />
      </div>
    );
  }
}

export default App;
