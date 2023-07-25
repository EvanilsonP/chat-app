const inputTexto = document.getElementById('enviarMensagem');

inputTexto.addEventListener('keyup', function(e) {
    const key = e.key === 'Enter';

    if(key && this.value) {
        adicionarNovaMensagem(this.value);
        this.value = '';
    }
});

function criarElementoHTML(nomeElemento, classeElemento) {
    const elemento = document.createElement(nomeElemento);

    for(const classe of classeElemento) {
        elemento.classList.add(classe);
    }

    return elemento;
}

function realizarScrollChat() {
    const elemento = document.getElementById('chat');
    elemento.scrollTop = elemento.scrollHeight;
};

function adicionarNovaMensagem(mensagem) {
    const quadroMensagens = document.getElementById('quadro-mensagens');
    const li = criarElementoHTML('li', ['clearfix']);
    const span = criarElementoHTML('span', ['message-data-time']);
    const divMensagem = criarElementoHTML('div', ['message', 'my-message']);
    const divDetalhes = criarElementoHTML('div', ['message-data']);

    span.innerHTML = "Nome teste, July 22";
    divMensagem.innerHTML = mensagem;

    divDetalhes.appendChild(span);
    li.appendChild(divDetalhes);
    li.appendChild(divMensagem);
    quadroMensagens.appendChild(li);
    realizarScrollChat();
};