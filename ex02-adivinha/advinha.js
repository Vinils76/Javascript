let formulario = document.querySelector("form");
let numeroEscolhido = parseInt(Math.random() * 11);
formulario.addEventListener("submit", function(event) {
    
    event.preventDefault();

   
    let palpiteUsuario = parseInt(document.getElementById("palpite").value);
    let resultado = document.getElementById("resultado");

    if (palpiteUsuario == numeroEscolhido) {
        resultado.innerHTML = "Você acertou!";
    
    } else if (palpiteUsuario < 0 || palpiteUsuario > 10) {
        resultado.innerHTML = "Digite um número entre 0 e 10";
    
    } else {
        resultado.innerHTML = "erou";
    
    };

});

formulario.addEventListener("click", function() {

    let botao = document.getElementById("palpitar");

}