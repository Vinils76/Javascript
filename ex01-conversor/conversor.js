/* 
//SOLUÇÃO 1
//Declarando a função que é chamada quando clicamos no botão converter do html
function converteDolar() {

    //pegando o valor digitado no campo valorDolar do html
    let valorDolar = document.getElementById("valorDolar").value;

    //converte o valor digitado considerando o valor dólar
    let converteReal = valorDolar * 4.97;

    //imprime o resultado da conversão na tela
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `O valor convertido em reais é R$ ${converteReal}`;

    resultado.style.color = "green";
}
*/

//SOLUÇÃO 2
/* 
function converteDolar() {

    //pegando o valor digitado no campo valorDolar do html
    let valorDolar = document.getElementById("valorDolar").value;

    //converte o valor digitado considerando o valor dólar
    let cotacaoDolar = document.getElementById("cotacaoDolar").value;
    let converteReal = valorDolar * cotacaoDolar;

    //imprime o resultado da conversão na tela
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `O valor convertido em reais é R$ ${converteReal}`;

    resultado.style.color = "green";
}
*/

//SOLUÇÃO 3

let formulario = document.querySelector("form")

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    let cotacao = parseFloat(document.getElementById("cotacao").value );
    let valor = parseFloat(document.getElementById("valor").value ); 
    let converte = (valor * cotacao).toFixed(2);

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `O valor convertido em reais é ${converte}`



});