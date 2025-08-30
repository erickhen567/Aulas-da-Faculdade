//DOM - Document Object Model
//Eventos: propriedade e addvEventList
let botao1 = document.getElementById("botao1");
console.log(botao1);
//Eventos: (Mouse)
botao1.onclick = function(){
    //lógica de negócio
    console.log("Clique Simples");
    
}
let botao2 = document.getElementById("botao2");
botao2.ondblclick = function(){
    console.log("Dois Cliques");
}
botao2.onmouseover = function(){
    console.log("Registrou Entrada");
    botao2.style.backgroundColor = "cyan";
}
botao2.onmouseout = function (){
    console.log("Registrou Saída");
    botao2.style.backgroundColor = "";
}
//Eventos: (Teclado)
let campoEntrada = document.getElementById("Input");
let Texto = document.getElementById("Texto");
    console.log(campoEntrada)
campoEntrada.onkeydown = function(event){
    if(event.key == "Enter"){
        console.log("Pressionou a Tecla Enter");
        console.log(campoEntrada.value);
        Texto.innerText = campoEntrada.value;
        campoEntrada.value = "";
    }
}

let botao3 = document.getElementById("botao3");
botao3.addEventListener("click", function(){
    Texto.textContent = "";
});

//Atividades (DOM - Interatividade na Página)