/*let qualquerCoisa = document.getElementById("subtitulo-exemplo01");
console.log(qualquerCoisa);
qualquerCoisa.style.color = "red";
qualquerCoisa.innerHTML = "Qualquer Coisa";
*/
//EXEMPLO 01
const pagina = document.querySelector("body");
const titulo = pagina.querySelector("h1");
const msg = pagina.querySelector("#mensagem");
const sub01 = pagina.querySelector("#subtitulo-exemplo01");

sub01.addEventListener("mouseover", function() {
    msg.textContent = "Você passou o mouse sobre";
});

sub01.addEventListener("mouseout", function() {
    msg.textContent = "";
});

//EXEMPLO 02

const botao = pagina.querySelector("#noturno");
botao.addEventListener("click", function(){
    pagina.classList.toggle("modo-noturno")

if (botao.textContent == "Ativar"){
    botao.textContent = "desativar";
} else {
    botao.textContent = "Ativar";
}

});

//EXEMPLO 03

const formulario = pagina.querySelector("form");
const campoNome = formulario.querySelector("#nome");
const campoNota1 = formulario.querySelector("#nota1");
const campoNota2 = formulario.querySelector("#nota2");
const corpoTabela = pagina.querySelector("tbody");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    //capturando os dados dos usuarios

let nome = campoNome.value;
let nota1 = parseFloat(campoNota1.value);
let nota2 = parseFloat(campoNota2.value);

//calculando a media

let media = calculaMedia(nota1, nota2);

//Verificando a situação

let situacao = verificaSituacao(media);

//Montagem do resumo do aluno

montaResumo(nome, media, situacao);

});

function calculaMedia(nota1,nota2) {
    return (nota1 + nota2) / 2
};

function verificaSituacao(media) {
    if (media > 7) {
        return "aprovado";
    } else {
        return "reprovado";
    }
};

function montaResumo(nome, media, situacao) {
    //Criando o elemento dinamicamente
    let linha = document.createElement("tr");

    // Montar o conteúdo do elemento criado
    linha.innerHTML = `<td> ${nome} </td>
                        <td ${media} </td>
                        <td> ${situacao} </td>`;

    // Adicionar o elemento ao DOM (corpo da tabela)
    corpoTabela.appendChild(linha);

    // Resetando o formulário
    formulario.reset();

    // Levando o foco para o campo nome
    campoNome.focus();
};

































































/*function clique() {
    let nome = document.getElementById("nome").value;
    let resultado = document.getElementById("resultado")
    resultado.textContent = nome
}
*/

/*For (let i = 0; i < 100; i++ ){
    console.log(i);
};

document.write(i);
*/