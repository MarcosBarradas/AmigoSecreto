let amigos = [];

let buttonAdd = document.querySelector('.button-add'); //utilizei addeventlistener pois é uma prática mais recomendada
buttonAdd.addEventListener('click', adicionarAmigo); //em comparação com o onclick

function adicionarAmigo(e){
    e.preventDefault();

    let campoDeTexto = document.querySelector('#amigo');
    let nome = campoDeTexto.value.trim(); //trim para tirar espaço em branco                            

    if(nome === ''){
        alert("Por favor, insira um nome.");
    } else if (amigos.includes(nome)) {
        alert("Nome já existente na lista!");
    } else {
        amigos.push(nome);
    }
    
    campoDeTexto.value = "";
    console.log(amigos)
    atualizarListaAmigos(amigos);
}

function atualizarListaAmigos(amigos){
    let lista = document.querySelector("#listaAmigos");
    lista.innerHTML = "";
    for (let contadora = 0; contadora < amigos.length; contadora++){
        lista.innerHTML += `<li>${amigos[contadora]}</li>`;
    }
} 


