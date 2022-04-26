/*sintaxe 1 (tradcional)
Função literal/anônima */
let exemplo1 = function() {
    console.log("Função anônima / literal")
};
exemplo1(); //chamando a função






/* Sintaxe 2 (tradicional)
Função nomeada */
function exemplo2() {
    console.log("Função nomeada");
}
exemplo2(); //chamando a função






/* Sintaxe 3 (moderna)
Função seta/flecha (Arrow Function)*/

let exemplo3 = () => {
    console.log("Arrow Funtion");
}
exemplo3(); //chamando a função


let exemplo3b = () => console.log("Arrow Function B");
exemplo3b();



// Exemplos
function dobra(valor){
    return valor * 2;
}
console.log( dobra(10) );



let dobraB = (valor) => {
    return valor * 2;
}
console.log( dobraB(100) );


let dobraC= valor => valor * 100;
console.log( dobraC(20) );

console.log ("-----------------")

let preco = 1250;
let desconto = 77.88;
let precoFinal = preco - desconto;

let formataMoeda = valor => {
    return valor.toLocaleString("pt-br", {
        style: "currency",
        currency: "brl"
    })
}

console.log(formataMoeda(precoFinal))
