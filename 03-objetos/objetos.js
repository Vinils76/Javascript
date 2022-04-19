//exemplo 1: objeto básico
let livro = {
    //propriedade: valor
    titulo: "Lord of Rings", ano: 1954, volumes: 3, autor: "J.R.R. Tolkien"
};

console.log(livro);
console.log(`My favorite book is ${livro.titulo}, witch one was released in ${livro.ano}.`)

//Exemplo 2: objeto contendo array e outro objeto

//propriedades
let pessoa = {
    
    nome: "Certo alguém",
    idade: 39,
    sexo: "masculino",
    telefones: ["2222-3333", "5555-6666"],
    cidade: "São Paulo",
    medidas: {
        peso: 90,
        altura: 1.82
    }
};

console.log(pessoa.medidas.altura);
console.log(pessoa.telefones[0]);
console.log(`${pessoa.nome} é uma pessoa incrível, contrate através do ${pessoa.telefones[1]}.`)

//Exemplo 3: Array de objeto
let livros = [
 {   
    titulo: "Senhor dos Anéis",
    autor: "J.R.R Tolkien"
 },
 {
     titulo: "Ghost Rider",
     autor: "Neil Peart"
 },
 {
     titulo: "Game of Thrones",
     autor: "George R.R Martin"
 }
];

console.log(`O meu Livro favorito é ${livros[0].titulo} do autor ${livros[0].autor}`)
