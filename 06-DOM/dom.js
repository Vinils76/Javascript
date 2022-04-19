/* Métodos/Funções de acesso e seleção

getElementById() -> seleciona um elemneto pelo ID

querySeletor() -> seleciona um elemnto de acordo com um seletor

querySelectorAll -> seleciona Vários elementos de acordo com um seletor
*/ 

//selecionando pelo ID
const titulo = document.getElementById("titulo-principal");
console.log(titulo);

//selecionando pela TAG
const pagina = document.querySelector("body");
console.log(pagina)

//selecionando todas as TAGS H2
const subtitulo = document.querySelectorAll("h2");
console.log(subtitulo);

/* Modificando elementos */

titulo.textContent = "Olá Mundo"; // textcontent muda o texto
//document.getElementById("titulo-principal") - mesma coisa q o de cima

subtitulo[1].textContent = "FullStack"

const legenda = document.querySelector("figcaption");
legenda.innerHTML = "<b>Legenda da Imagem</b>"
//innerHTML - além de mudar só conteúdo de texto, modifica também com tags html

//CSS via JS
titulo.style.textAlign = "center" 
titulo.style.color = "purple"