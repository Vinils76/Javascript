
/*alert("Olá, Mundo!");
/*alert é uma janela de alerta que carrega antes do conteúdo do site
e se abre um arquivo separado  */

console.log("Olá, mundo!");
//comando de saída para o console 

/*variáveis
Palavras-chave: var, let, const

var -> variável de escopo global (menos segura)
let -> variável de escopo de bloco (mais segura)
const -> const de escopo de bloco
*/

const nome = "Antonio"; //constante
let ano = 2022; // variável escopo local
var curso = "Técnico de informática para Internet" //variável global

/*
ano = 2025;
curso = "Como se tornar uma princesa"
nome = "" */

//recuperando valores
console.log(nome);
console.log(curso);
console.log(ano);

//concatenação

console.log("Eu sou o " +nome+ ",", "e em " +ano+ " estou estudando no curso " +curso+ ".");

//String Literal
console.log(`Eu sou o ${nome}, e em ${ano} estou estudando no curso ${curso}`);

let produto = "TV led";
let preco = 6500;
let quantidade = 3;
let total = preco * quantidade;

console.log(`Temos atualmente no estoque o produto ${produto} na quantidade de ${quantidade} unidades, ao custo de ${preco}R$ (cada) e valor total de ${total} R$`)


