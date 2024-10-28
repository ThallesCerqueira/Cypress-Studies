alert("Bem vindo ao jogo do número secreto");

let numeroSecreto = 15;
let chute = 0

while(chute != numeroSecreto) {

    chute = prompt("Escolha um número entre 1 e 30");

    if(numeroSecreto == chute) {
        alert(`Isso aí, você descobriu o número secreto, ${numeroSecreto}`);
    } else {
        if(chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(`O número secreto é maior que ${chute}`);
        }
    }

}