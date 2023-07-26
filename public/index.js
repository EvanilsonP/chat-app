// Salvar dados no local storage quando for logar/acessar a página do chat
const setLocalStorage = (usuario) => localStorage.setItem("usuario", JSON.stringify(usuario));

function btnEntrar() {
    var inputNome = document.getElementById('nome').value;
    var idUsuario = (Math.random() * 1000).toString();

    // Salvando o nome e ID do usuário
    setLocalStorage({
        nome: inputNome,
        meuId: idUsuario
    });

    // Direcionar para a página do chat passando os parametros na URL
    window.location.href="chat.html?usuarionome="+ inputNome + "&meuid="+ idUsuario;
}