let amigos = [];

let buttonAdd = document.querySelector('.button-add'); //utilizei addeventlistener pois é uma prática mais recomendada
buttonAdd.addEventListener('click', adicionarAmigo); //em comparação com o onclick
let buttonDraw = document.querySelector('.button-draw'); 
buttonDraw.addEventListener('click', sortearAmigo); 

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
    atualizarListaAmigos(amigos);
}

function atualizarListaAmigos(amigos){
    let lista = document.querySelector("#listaAmigos");
    lista.innerHTML = "";
    for (let contadora = 0; contadora < amigos.length; contadora++){
        lista.innerHTML += `<li>${amigos[contadora]}</li>`;
    }
} 

function sortearAmigo() {
    
    if (amigos.length < 1) {
        alert("A lista de sorteados está vazia, para sortear adicione amigos!");
        return; // Encerra a função se a lista estiver vazia
    }

    // Gera índice aleatório seguro
    const indiceSorteado = Math.floor(Math.random() * amigos.length);
    const amigoSecreto = amigos[indiceSorteado];
      amigos.splice(indiceSorteado, 1); // Depois de ser sorteado, não há porquê
    // deixar 

    // Atualiza a exibição do resultado
    const elementoResultado = document.querySelector('#resultado');
    resetarExibicao();
    
    
    elementoResultado.innerHTML = `
        <li class="resultado-sorteio">
            O sorteado foi: <strong>${amigoSecreto}</strong> 
        </li>
    `;
}


function resetarExibicao() {
    document.querySelector('#listaAmigos').innerHTML = '';
}