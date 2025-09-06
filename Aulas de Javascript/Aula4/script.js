//Definir os valores de combustíveis
const precoGasolina = 6.09;
const precoEtanol = 5.70;
const precoDiesel = 5.89;

function atualizaValor(){
    let tipo = document.getElementById("Combustivel").value;
    console.log(tipo);
    let precoPorLitro;
    switch (tipo) {
        case "Gasolina":
            precoPorLitro = precoGasolina;
            break;
        case "Etanol":
                precoPorLitro = precoEtanol;
                break;
        case "Diesel":
            precoPorLitro = precoDiesel;
            break;
        default:
            console.log("Escolha uma opção");
            return;
    }
    console.log(precoPorLitro);
    let Litros = document.getElementById("Litros").value;
    calcularAbastecimento(precoPorLitro, Litros);
}

function calcularAbastecimento(precoPorLitro, Litro){
    let valorTotal = precoPorLitro * Litro;
    document.getElementById("Resultado").textContent = formatarValor(valorTotal);

    if (Litro <=0){
        document.getElementById("Resultado").textContent = "Informe um valor positivo";
    }
}

function formatarValor(Valor){
    return "R$ " + Valor.toLocaleString("pt-br", {minimumFractionDigits: 2, maximumFractionDigits: 2})
}

///Chamar a função
let tipo = document.getElementById("Combustivel");
tipo.addEventListener("change", atualizaValor);

//Atualizar o valor de forma automática
let Litros = document.getElementById("Litros");
Litros.addEventListener("input", atualizaValor);