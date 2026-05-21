async function loadPage(page) {
  const response = await fetch(`public/${page}.html`);
  const html = await response.text();

  document.getElementById("app").innerHTML = html;
}

let arquivo = "tela_geral_home"
loadPage(arquivo);