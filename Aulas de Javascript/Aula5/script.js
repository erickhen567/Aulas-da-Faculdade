//Função de Seta (=>)
//Sem Parâmetros
const saudacao = () => console.log("Olá");
saudacao();

//Apenas com um  Parâmetro
const dobrar = numero => numero * 2;
console.log(dobrar(2));

//Mais de um Parâmetro
const somar = (a, b) => a + b ;
console.log(somar(2,5));

//Refatoramento
function verificarIdade(idade){
    if(idade>=18){
        return true;
    } else {
        return false;
    }
}
console.log(verificarIdade(23));

//Função de Seta
const verificarIdade2 = numero => numero>=18;

//Objetos (POO)
const pessoa = {
    //Propriedades
    nome: "Jon Doe",
    idade: 22
};
console.log(pessoa.nome);
console.log(pessoa.idade);
console.log(pessoa);

//p1, p2, p3, p_n...
class Pessoa {
    //Construtor
    constructor(nome, idade){
        //This
        this.nome = nome;
        this.idade = idade;

    }

    //Métodos (Comportamento)
     imprimirNome(){
        return `Nome: ${this.nome}`;
    }
}
let nome = "teste";
const p1 = new Pessoa("Leon", 23);
const p2 = new Pessoa("Kratos", 40);
console.log(p1.imprimirNome());

//Criar a classe "Estudante herda da classe Pessoa"
class Estudante extends Pessoa {
    constructor(nome, idade, curso){
        //Super
        super(nome, idade)
        this.curso = curso;
    }
}
const est = new Estudante("Erick", 22, "ADS");

//Arrays
//Definição: Estrutura de Dados (Armazena diferentes tipos)
let carrinhoCompras = []
carrinhoCompras.push("PS5"); //Adicionado no Final
carrinhoCompras.push("Resident Evil 4 - Remake");
carrinhoCompras.push("Controle Dualsense");
carrinhoCompras.unshift("PS4 Pro"); //Adicionado no Inicio
carrinhoCompras.splice(1,0,"Blu-Ray"); //Adicionado em uma posição específica

//Remover os itens do carrinho
carrinhoCompras.pop(); //Remove o último item
carrinhoCompras.shift(); //Remove o primeiro item
carrinhoCompras.slice(1,1); //Remove um elemento específico

//Buscar
console.log(carrinhoCompras.includes("PS4 Pro")); //true or False

//Imprimir o carrinho
console.log(carrinhoCompras);