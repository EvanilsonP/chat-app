let usuarios = [];
const moment = require('moment');
moment.locale('pt-br');

function usuarioEntrarSala(id, nome, sala, meuId) {
    const usuario = { id, nome, sala, meuId };
    usuarios.push(usuario);
    return usuario;
};

function usuarioSairSala(id) {
    const index = usuarios.findIndex(usuario => usuario.id === id);
    // Se não houver usuário
    if(index == -1) {
        return usuarios.splice(index, 1)[0];
    }
}

function mensagemFormatada(usuarioNome, mensagemParam, meuid) {
    const mensagem = mensagemParam ? mensagemParam : 'Olá! Acabei de entrar!';

    return { usuarioNome, mensagem, horario: moment().format('lll'), meuid };
};

function getUsuarioSala() {
    return usuarios;
};

function getUsuario(idUsuario) {
    return usuarios.find(usuario => usuario.id === idUsuario);
}

module.exports = { usuarioEntrarSala, usuarioSairSala, mensagemFormatada, getUsuarioSala, getUsuario };