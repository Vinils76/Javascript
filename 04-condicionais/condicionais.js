// Estruturas de Controle Condicional

//if/else, else if
let nome = "Antonio";
let idade = 65;

//Verificar a idade da pessoa

//Condicional Encadeada
let mensagem;
/*
if (idade >= 18) {
    mensagem = "Você é maior de idade";
} else {
    mensagem = "Você é menor de idade";
}

console.log(mensagem);
*/

if (idade >= 60) {
        mensagem = "é semi-novo";
} else if 
    (idade >= 18) {
        mensagem = "é adulto mas não idoso";
} else {
    //mensagem = "É menor de idade";
    if (idade >= 12 && idade < 18) {
        mensagem = "é adolescente";
} else {
        mensagem = "é Leite-ninho";
    }
}


console.log(nome, mensagem);
console.log("--------------")

let nota1 = 8
let nota2 = 3
let media = (nota1 + nota2)/2
console.log(media)
let resultado;

/*
if (media >= 7) {
    resultado = "Aprovado";
} else {
    resultado = "Reprovado";
}   

*/
// OPERADOR TERNÁRIO
//media >=7 ? resultado = "Aprovado" : resultado = "Reprovado"
resultado = media>=7 ? "Aprovado" : "Reprovado"

console.log(resultado)

console.log("--------------")

let opcao = 4;
let textoOpcao;

switch (opcao) {
    case 1:
        textoOpcao = "O que deseja saber?";
        break;

    case 2:
        textoOpcao = "Descreva o problema em poucas palavras";
        break;

    case 3:
        textoOpcao = "Certo, qual a sua dúvida";
        break;

    default:
        textoOpcao = "Irei te transferir para o nosso suporte";
        break;
}

console.log(`Você escolheu a opção ${opcao}`);
console.log(textoOpcao);

//operadores de comparação
let a = 10;
let b = "10";

console.log( a === b );

