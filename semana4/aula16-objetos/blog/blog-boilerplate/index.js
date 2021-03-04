const tituloDoPost = document.getElementById("titulo-post");
const autorDoPost = document.getElementById("autor-post");
const conteudoDoPost = document.getElementById("conteudo-post");
const containerDeConteudo = document.getElementById("container-de-posts");
const imagemDoPost = document.getElementById("imagem-post");
let arrayDeDados = [];


const adicionaValor = () =>{

    
const dadosDoPost ={
    titulo:tituloDoPost.value,
    autor:autorDoPost.value,
    conteudo:conteudoDoPost.value,
}

localStorage.setItem(titulo);
localStorage.setItem(autor);
localStorage.setItem(conteudo);
if(dadosDoPost.titulo!== "" && dadosDoPost.autor!=="" && dadosDoPost.conteudo!==""){
    arrayDeDados.push(dadosDoPost);
    mostrarDados(dadosDoPost.titulo);
    if(imagemDoPost.value.includes(".png") || imagemDoPost.value.includes(".jpg") && imagemDoPost.value.includes("https")){
        adicionarImagem();
    }
    mostrarDados(dadosDoPost.autor);
    mostrarDados(dadosDoPost.conteudo);
    mostrarDados("\n");
    

    
}else{
    alert("Preencha todos os dados!");

}

}

const mostrarDados = (dados) =>{
containerDeConteudo.innerHTML += `<div>${dados}<div>`
}

const adicionarImagem=()=>{
    containerDeConteudo.innerHTML +=`<img src=${imagemDoPost.value}></img>`
}

const testeLocalStorage =()=>{
    localStorage.getItem();
}

console.log("Teste:");
console.log(testeLocalStorage());



