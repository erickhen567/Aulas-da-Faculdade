var nTermos = parseInt(window.prompt("Qtd Termos"));
var soma = 0;
var termo = 1;

for (let i=1; i<=nTermos; i++){ //nTermos 2
    soma += termo; // 1
    termo = 10 * termo + 1; //1 + 11 + 111
}

document.writeln(soma);