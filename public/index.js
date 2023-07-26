// Salvar dados no local storage quando for logar/acessar a página do chat
const setLocalStorage = (usuario) => localStorage.setItem("usuario", JSON.stringify(usuario));

function btnEntrar() {
    const inputNome = document.getElementById('nome').value;
    const IdUsuario = (Math.random() * 1000).toString();

    // Salvando o nome e ID do usuário
    setLocalStorage({
        nome: inputNome,
        meuId: IdUsuario
    });

    // Direcionar para a página do chat passando os parametros na URL
    window.location.href="chat.html?usuarionome=" + inputNome + "&meuid=" + IdUsuario;
};