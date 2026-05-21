document.addEventListener("click", async (e) => {

    // abrir modal
    if (e.target.closest("#openModal")) {

        const res = await fetch("../public/tela_cadastro_usuarios.html");
        const html = await res.text();

        document.getElementById("modalContainer").innerHTML = html;
    }

    // fechar modal
    if (e.target.closest("#closeModal")) {

        document.getElementById("modalContainer").innerHTML = "";
    }

});