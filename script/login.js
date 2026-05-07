document.getElementById("enviar").addEventListener("click", function () {

    const login = document.getElementById("login").value;
    const senha = document.getElementById("senha").value;

    const usuarios =
        JSON.parse(localStorage.getItem("usuarios")) || [];

    const usuarioEncontrado = usuarios.find(usuario =>
        usuario.login === login &&
        usuario.senha === senha
    );

    if (usuarioEncontrado) {
        alert("Login realizado!");
        window.location.href = "home.html";
    } else {
        alert("Usuário ou senha inválidos!");
    }
});