//Estruturas de controle de repetição
/*

while (enquanto)
do/while (faça/enquanto)
for(para uma determinada quantidade de vez)
*/

//Exemplo 1: while

let i = 1;
while ( i < 20 ) {
    console.log(`O valor de i é de ${i}`);
    i++;
}

console.log("---------------------")

//Exemplo 2: do/while

let j = 0;

do {
    console.log(`J é ${j}`);
    j++
} while (j < 10);

console.log("---------------------")

//Exemplo 2: for

for ( let k = 1; k <= 10; k++){
    console.log(`K vale ${k}`);
}

console.log("---------------------")

//Exemplo 4: loop iterando sobre os dados de array
let alunos = [
    "Chiquinha", "Chaves", "Madruga", "Kiko maravilhoso"
];

//cache do tamanho do array
let tamanho = alunos.length;

for ( let i = 0; i < tamanho; i++) {
    console.log(alunos[i]);
}


