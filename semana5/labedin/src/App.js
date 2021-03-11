import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';
import Paula from "./components/img/Paula.jpg"


function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={Paula}
          nome="Paula Lopes" 
          descricao="Oi, eu sou Paula. Sou estudante na Labenu e estou cursando o 4º semestre do curso de Análise e desenvolvimento de Sistemas. Tenho conhecimentos em git, github, html, css e javascript. Além disso, atualmente estudo react."
        />
       <div className ="page-section-address" >
    
        <CardPequeno
          imagem="https://i.pinimg.com/474x/ee/c9/7f/eec97f7f050b0101897a0028a5bc1106.jpg"
          nome="Email:"
          descricao=" paula.dev@gmail.com"
        />
        <CardPequeno
          imagem="https://i.pinimg.com/474x/21/be/ee/21beee4b4099dc5e9416a3fda05f34c5.jpg"
          nome="Endereço:"
          descricao=" Rua dos devs de sucesso, número 404, porta 3000"
        />
        </div>

        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      
        </div>
      
        
       

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://upload.wikimedia.org/wikipedia/commons/d/d6/Inema-logo.jpg" 
          nome="INEMA" 
          descricao="Estagiei por 1 ano. Era responsável pela manutenção no sistema de Monitoramento, feito em JAVA, utilizando tecnologias como SpringMVC e JSF(Primefaces)." 
        />
        
        <CardGrande 
          imagem="https://images.educamaisbrasil.com.br/content/superior/instituicao/logo/g/ifba.png" 
          nome="IFBA" 
          descricao="Estagiei por 3 meses. Fui responsável pelo desenvolvimento do levantamento de requisitos do sistema de empréstimo de chaves do laboratório. Além disso, montei o diagrama de entidade-relacionamento e tranpus para o SQL, utilizando o banco de dados MYSQL." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minha competências</h2>
        <CardPequeno
        imagem="http://blog.linehost.com.br/wp-content/uploads/2015/06/HTML5-Present-Past-and-Future.jpg"
        nome="HTML"
        />
        <CardPequeno
        imagem="https://d33wubrfki0l68.cloudfront.net/a8512e53a902f0758d105e4d6eccd5cb7d038bdf/9defd/static/b934233c97b5715fa7a2c9d5ac299b7c/6aca1/2019-10-02-css.jpg"
        nome="CSS"
        />
        <CardPequeno
        imagem="https://3.bp.blogspot.com/-PshpioeGXa4/W9Madr31sWI/AAAAAAAAFTA/PHfIde8sr2sh3EG3WbLyZw3dIT6ipO8VgCLcBGAs/s1600/javascript.png"
        nome="Javascript"
        />
        <CardPequeno
        imagem="https://cdn.auth0.com/blog/react-js/react.png"
        nome="React"
        />
      </div>

      <div className="page-section-container">
        <h2>Conquistas</h2>
        <CardGrande
        imagem="https://th.bing.com/th/id/OIP.xzUjD8CtrTH8ti67LhuZmgHaHa?w=190&h=190&c=7&o=5&pid=1.7"
        nome="Inglês Intermediário"
        descricao="Cursando inglês no NUPEL(Núcleo Permanente de Pesquisa e Extensão em Letras) na UFBA, 
        com previsão de conclusão em dezembro de 2021.
  "
        />
        

      </div>


      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
