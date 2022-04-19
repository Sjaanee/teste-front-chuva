let secaoCompartilhar = document.getElementById("secao-compartilhar");
let formulario = document.getElementById("formulario");
let discussoes = document.getElementById("discussoes");

let pontos = document.getElementById("pontos");
let vermais = document.getElementById("ver-tudo");
let textotodo = document.getElementById("texto-todo");

let enviarTopico = document.getElementById("topico");
let topicoExpandido = document.getElementById("topico-expandido");

let footer = document.getElementById("footer");

function mostraFormulario1() {
  let tamanho = window.getComputedStyle(footer).top;
  let top = parseInt(tamanho) + 123;
  footer.style.top = `${top}px`;
  secaoCompartilhar.style.display = "none";
  formulario.style.display = "block";
}

function mostraFormulario2() {
  formulario.style.display = "block";
  enviarTopico.style.display = "none";
}

function verMais() {
  let tamanho = window.getComputedStyle(footer).top;
  let top = parseInt(tamanho) + 300;
  footer.style.top = `${top}px`;
  pontos.style.display = "none";
  textotodo.style.display = "inline";
  discussoes.style.top = "1115px";
  vermais.style.display = "none";
}

function enviaFormulario() {
  formulario.style.display = "none";
  enviartopico.style.display = "block";
}

function mostraRespostas() {
  let tamanho = window.getComputedStyle(footer).top;
  let top = parseInt(tamanho) + 600;
  footer.style.top = `${top}px`;
  topicoExpandido.style.display = "block";
}
