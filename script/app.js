async function loadPage(page) {
  const response = await fetch(`public/${page}.html`);

  const html = await response.text();

  document.getElementById("app").innerHTML = html;
}


document.querySelectorAll("nav a").forEach(link => {

  link.addEventListener("click", (event) => {
    event.preventDefault();

    const page = link.dataset.page;

    loadPage(page);
  });

});


loadPage("tela_geral_home");