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
    // Verifica se há participantes suficientes, pois não há sentido em sortear uma pessoa
    const minimoParticipantes = 2;
    
    if (amigos.length < minimoParticipantes) {
        alert("É necessário ter pelo menos dois amigos cadastrados para realizar o sorteio!");
        return; // Encerra a função se só tiver um sorteado
    }

    // Gera índice aleatório seguro
    const indiceSorteado = Math.floor(Math.random() * amigos.length);
    const amigoSecreto = amigos[indiceSorteado];

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
    amigos = []
}