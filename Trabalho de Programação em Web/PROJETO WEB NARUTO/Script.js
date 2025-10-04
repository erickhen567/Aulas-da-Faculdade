const characters = [
    {
        name: "Minato", 
        description: "O Quarto Hokage, conhecido por sua rapidez e inteligência estratégica.",
        image: "minato.jpg", 
        score: 0 
    },
    {
        name: "Hashirama",
        description: "O Primeiro Hokage, dono de um grande poder e o fundador da Vila da Folha.",
        image: "hashirama.jpg",
        score: 0
    },
    {
        name: "Naruto",
        description: "O Nove-Caudas e futuro Hokage, com determinação imbatível e espírito guerreiro.",
        image: "naruto.jpg",
        score: 0
    },
    {
        name: "Pain",
        description: "Líder do Akatsuki, com um poder devastador e uma visão de mundo amarga.",
        image: "pain.jpg",
        score: 0
    },
    {
        name: "Sakura",
        description: "Uma ninja médica poderosa, com grande inteligência e força em combate.",
        image: "sakura.jpg",
        score: 0
    }
];


const questions = [
    {
        question: "1) Qual é o seu passatempo favorito?", 
        options: [
            { text: "Ler livros de magia", scores: [3, 2, 1, 0, 1] },
            { text: "Jogar esportes (quadribol)", scores: [1, 3, 2, 0, 1] },
            { text: "Criar feitiços", scores: [2, 1, 3, 0, 2] },
            { text: "Treinar combate físico", scores: [1, 2, 1, 3, 2] },
            { text: "Meditar e buscar equilíbrio", scores: [0, 1, 2, 3, 2] }
        ]
    },
    {
        question: "2) Qual é a sua atitude em situações de perigo?", 
        options: [
            { text: "Enfrento de frente, sem hesitar", scores: [3, 2, 1, 0, 2] },
            { text: "Busco uma estratégia antes de agir", scores: [1, 3, 2, 0, 2] },
            { text: "Fico cauteloso, esperando o momento certo", scores: [2, 1, 3, 0, 1] },
            { text: "Evito o confronto a todo custo", scores: [1, 2, 1, 3, 2] },
            { text: "Procuro ajudar os outros antes de mim", scores: [0, 1, 2, 3, 3] }
        ]
    },
    {
        question: "3) Qual seria sua estratégia em uma batalha?", 
        options: [
            { text: "Ataques rápidos e imprevisíveis", scores: [3, 1, 2, 0, 1] },
            { text: "Defesa sólida e ataques calculados", scores: [2, 3, 1, 0, 1] },
            { text: "Controle mental e manipulação do oponente", scores: [1, 2, 3, 0, 2] },
            { text: "Força bruta e resistência física", scores: [1, 2, 1, 3, 2] },
            { text: "Usar o ambiente a meu favor", scores: [0, 1, 2, 3, 2] }
        ]
    },
    {
        question: "4) Como você lida com perdas?", 
        options: [
            { text: "Eu luto para mudar a situação", scores: [3, 1, 2, 0, 2] },
            { text: "Eu tento entender o motivo e seguir em frente", scores: [2, 3, 1, 0, 2] },
            { text: "Eu fico abalado, mas depois me reerguo", scores: [1, 2, 3, 0, 1] },
            { text: "Eu aceito o destino e tento aprender com ele", scores: [0, 1, 2, 3, 2] },
            { text: "Eu busco fazer justiça, não importa o que aconteça", scores: [2, 1, 1, 3, 2] }
        ]
    },
    {
        question: "5) Qual é o seu maior objetivo na vida?", 
        options: [
            { text: "Ser o líder de todos", scores: [3, 1, 2, 0, 1] },
            { text: "Proteger os meus amigos e família", scores: [2, 3, 1, 0, 2] },
            { text: "Alcançar o poder para mudar o mundo", scores: [1, 2, 3, 0, 2] },
            { text: "Descobrir e controlar os meus próprios limites", scores: [0, 1, 2, 3, 2] },
            { text: "Buscar a verdade e a paz interior", scores: [0, 1, 1, 3, 3] }
        ]
    }
];


function renderQuiz() {
    const form = document.getElementById('quizForm');
    form.innerHTML = ''; 
    questions.forEach((q, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('question');
        
        const questionText = document.createElement('p');
        questionText.textContent = q.question;
        questionDiv.appendChild(questionText);
        
        q.options.forEach((option, i) => {
            const optionLabel = document.createElement('label');
            const optionInput = document.createElement('input');
            optionInput.type = 'radio';
            optionInput.name = 'question' + index; 
            optionInput.value = i;
            optionLabel.appendChild(optionInput);
            optionLabel.appendChild(document.createTextNode(option.text)); 
            questionDiv.appendChild(optionLabel); 
        });

        form.appendChild(questionDiv); 
    });
    
    const submitButton = document.getElementById('submitQuiz');
    submitButton.style.display = 'inline-block'; 
}


function calculateResult() {
    const form = document.getElementById('quizForm');
    const inputs = form.querySelectorAll('input:checked'); 
    
    
    if (inputs.length !== questions.length) {
        alert("Responda a pergunta para prosseguir"); 
        return; 
    }

    
    characters.forEach(character => character.score = 0);

    
    inputs.forEach((input, index) => {
        const selectedOptionIndex = input.value; 
        const question = questions[index]; 
        question.options[selectedOptionIndex].scores.forEach((score, i) => {
            characters[i].score += score; 
        });
    });

    
    const highestScoreCharacter = characters.reduce((prev, current) => (prev.score > current.score) ? prev : current);

    
    document.getElementById('characterName').textContent = highestScoreCharacter.name;
    document.getElementById('characterDesc').textContent = highestScoreCharacter.description;
    document.getElementById('characterImage').src = highestScoreCharacter.image;
    document.getElementById('score').textContent = highestScoreCharacter.score;

    
    document.getElementById('result').style.display = 'block';
    document.getElementById('quiz').style.display = 'none';
}


document.getElementById('startButton').addEventListener('click', () => {
    document.getElementById('intro').style.display = 'none'; 
    document.getElementById('quiz').style.display = 'block'; 
    renderQuiz(); 
});


document.getElementById('submitQuiz').addEventListener('click', calculateResult);


document.getElementById('restartButton').addEventListener('click', () => {
    characters.forEach(character => character.score = 0); 
    document.getElementById('result').style.display = 'none'; 
    document.getElementById('intro').style.display = 'block';
});
