document.getElementById("enviar").addEventListener("click", function () {

    const login = document.getElementById("login").value;
    const senha = document.getElementById("senha").value;

    const usuarios =
        JSON.parse(localStorage.getItem("usuarios")) || [];

    const usuarioEncontrado = usuarios.find(usuario =>
        usuario.login === login &&
        usuario.senha === senha
    );

    const alertaSucesso = document.getElementById("alert-sucesso");
    const alertaErro = document.getElementById("alert-erro");
    alertaSucesso.classList.add("d-none");
    alertaErro.classList.add("d-none");

    if (usuarioEncontrado) {
        alertaSucesso.classList.remove("d-none");
    } else {
        alertaErro.classList.remove("d-none");
    }
});