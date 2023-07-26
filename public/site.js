const inputTexto = document.getElementById('enviarMensagem');
const getLocalStorage = () => JSON.parse(localStorage.getItem('usuario')) ?? [];
const socket = io();
const { usuarionome, meuid } = Qs.parse(location.search, { ignoreQueryPrefix: true });
socket.emit('entrarSala', { usuarionome, meuid });

inputTexto.addEventListener('keyup', function(e) {
    const key = e.key === 'Enter';

    if(key && this.value) {
        // adicionarNovaMensagem(this.value);
        socket.emit('mensagemChat', this.value);
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
    const usuarioStorage = getLocalStorage();
    const minhaMensagem = false;

    if(mensagem.meuid) {
        minhaMensagem = mensagem.meuid === usuarioStorage.meuid;
    }

    var divMensagem = '';
    var divDetalhes = '';

    const quadroMensagens = document.getElementById('quadro-mensagens');
    const li = criarElementoHTML('li', ['clearfix']);
    const span = criarElementoHTML('span', ['message-data-time']);

    if(minhaMensagem) {
        divMensagem = criarElementoHTML('div', ['message', 'other-message', 'float-right']);
        divDetalhes = criarElementoHTML('div', ['message-data', 'text-right'])
    } else {
        var divMensagem = criarElementoHTML('div', ['message', 'my-message']);
        var divDetalhes = criarElementoHTML('div', ['message-data']);
    }

    span.innerHTML = (minhaMensagem ? 'eu' : mensagem.usuarioNome) + ', ' + mensagem.horario;
    divMensagem.innerHTML = mensagem.mensagem;

    divDetalhes.appendChild(span);
    li.appendChild(divDetalhes);
    li.appendChild(divMensagem);
    quadroMensagens.appendChild(li);
    realizarScrollChat();
};

socket.on('novaMensagem', (mensagem) => {
    adicionarNovaMensagem(mensagem);
});

function criarListaUsuarios(usuarioNome) {
    
    var listaUsuarios = document.getElementById("listaUsuarios");
    var liUsuario = criarElementoHtml("li", ["clearfix"]);
    var divDescricaoUsuario = criarElementoHtml('div', ["about"]);
    var divNomeUsuario = criarElementoHtml('div', ["name"]);
    var divStatusUsuario = criarElementoHtml('div', ["status"]);
    var iconeStatus = criarElementoHtml("i" , ["fa", "fa-circle", "online"]);

    iconeStatus.innerHTML = "online";
    divNomeUsuario.innerHTML = usuarioNome;

    divStatusUsuario.appendChild(iconeStatus);
    divDescricaoUsuario.appendChild(divNomeUsuario);
    divDescricaoUsuario.appendChild(divStatusUsuario);
    liUsuario.appendChild(divDescricaoUsuario);
    listaUsuarios.appendChild(liUsuario);
};