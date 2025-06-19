const questions = [
    {
        question: "Quando  a FMP foi fundada?",
        answers: [
            { id: 1, text: "28 de outubro de 2006", correct:false},
            { id: 2, text: "16 de outubro de 2006", correct:false},
            { id: 3, text: "29 de outubro de 2006", correct:false},
            { id: 4, text: "25 de outubro de 2005", correct:true},

        ],
    },
    {
        question: "Qual o endereço da Faculdade Municipal da Palhoça?",
        answers: [
            { id: 1, text: "Rua Antônio Vieira, nº 48, bairro Ponte do Imaruim, Palhoça/SC", correct:false},
            { id: 2, text: "Rua João Pereira dos Santos, nº 65, bairro Ponte do Imaruim, Palhoça/SC", correct:false},
            { id: 3, text: "Rua José Adão, nº 99, bairro Ponte do Imaruim, Palhoça/SC", correct:true},
            { id: 4, text: "Rua Armando Siegel, nº 72, bairro Ponte do Imaruim, Palhoça/SC", correct:false},

        ],
    },
    {
        question: "Quantos cursos a FMP oferece?",
        answers: [
            { id: 1, text: "6 cursos de graduação", correct:false},
            { id: 2, text: "4 cursos de graduação", correct:false},
            { id: 3, text: "5 cursos de graduação", correct:true},
            { id: 4, text: "3 cursos de graduação", correct:false},

        ],
    },
    {
        question: "Qual a data de início das atividades da educadora Marileia Silveira da Costa na FMP?",
        answers: [
            { id: 1, text: "2007", correct:true},
            { id: 2, text: "2008", correct:false},
            { id: 3, text: "2006", correct:false},
            { id: 4, text: "2009", correct:false},

        ],
    },
    {
        question: "Quando a FMP foi inaugurada?",
        answers: [
            { id: 1, text: "15 de fevereiro de 2006", correct:false},
            { id: 2, text: "25 de maio de 2006", correct:false},
            { id: 3, text: "18 de março de 2006", correct:false},
            { id: 4, text: "20 de abril de 2006", correct:true},

        ],
    },
    {
        question: "Qual porcentagem das vagas são oferecidas aos alunos oriundos de escolas pública e que residam no município de Palhoça e região?",
        answers: [
            { id: 1, text: "75%", correct:false},
            { id: 2, text: "90%", correct:true},
            { id: 3, text: "85%", correct:false},
            { id: 4, text: "80%", correct:false},

        ],
    },
    {
        question: "Quantos laboratórios tem na faculdade?",
        answers: [
            { id: 1, text: "3", correct:false},
            { id: 2, text: "4", correct:false},
            { id: 3, text: "5", correct:true},
            { id: 4, text: "6", correct:false},

        ],
    },
    {
        question: "Quem é a professora responsável pela administração da faculdade no ano de 2025?",
        answers: [
            { id: 1, text: "Profª Débora Raquel Schutz", correct:true},
            { id: 2, text: "Profª Mariane Estefano", correct:false},
            { id: 3, text: "Profª Francini Sheid Martins", correct:false},
            { id: 4, text: "Profª Vera Regina Lúcio", correct:false},

        ],
    },
    {
        question: "Qual a categoria e o sistema de ensino da faculdade?",
        answers: [
            { id: 1, text: "A instituição está classificada como Faculdade na categoria pública, cujo sistema de ensino é municipal", correct:true},
            { id: 2, text: "A instituição está classificada como Faculdade na categoria pública, cujo sistema de ensino é estadual", correct:false},
            { id: 3, text: "A instituição está classificada como Faculdade na categoria privada, cujo sistema de ensino é federal", correct:false},
            { id: 4, text: "A instituição está classificada como Faculdade na categoria privada, cujo sistema de ensino é municipal", correct:false},

        ],
    },
    {
        question: "Quais cursos são oferecidos no período matutino na FMP?",
        answers: [
            { id: 1, text: "ADS, Pedagogia e Processos Gerenciais", correct:false},
            { id: 2, text: "Administração, Pedagogia e ADS", correct:false},
            { id: 3, text: "Pedagogia, Administração e Processos Gerenciais", correct:false},
            { id: 4, text: "Todas as anteriores", correct:true},

        ],
    },
    {
        question: "Quais cursos são oferecidos no período noturno na FMP?",
        answers: [
            { id: 1, text: "Pedagogia e ADS", correct:false},
            { id: 2, text: "Administração e Pedagogia", correct:true},
            { id: 3, text: "Processos Gerenciais e ADS", correct:false},
            { id: 4, text: "Administração e Processos Gerenciais", correct:false},

        ],
    },
    {
        question: "Quantos tipos de graduação a faculdade oferece?",
        answers: [
            { id: 1, text: "2", correct:false},
            { id: 2, text: "3", correct:true},
            { id: 3, text: "4", correct:false},
            { id: 4, text: "5", correct:false},

        ],
    },
    {
        question: "Quais tipos de graduação a faculdade oferece?",
        answers: [
            { id: 1, text: "Bacharel e Tecnólogo", correct:false},
            { id: 2, text: "Tecnólogo e Licenciatura", correct:false},
            { id: 3, text: "Licenciatura e Bacharel", correct:false},
            { id: 4, text: "Todas as anteriores", correct:true},

        ],
    },
    {
        question: "Qual opção abaixo inclui 3 tipos de atividades complementares que estão incluídas na Área de Atividades Científico-Acadêmicas na FMP?",
        answers: [
            { id: 1, text: "Doação de sangue, Curso de idioma e Visita técnica ", correct:false},
            { id: 2, text: "Atividades de Extensão, Atividades Culturais, Publicações e Produções Acadêmicas", correct:false},
            { id: 3, text: "Oficina de Apoio à Aprendizagem, Participação em grupo de estudo formalizado na Instituição e Autoria e co-autoria em livros e/ou capítulos de livros ", correct:true},
            { id: 4, text: "Seminários e palestras, Monitoria e Desfile cívico ", correct:false},

        ],
    },
    {
        question: "Quem é o/a coordenador/a do curso de ADS?",
        answers: [
            { id: 1, text: "Prof. Rafael Novo da Rosa", correct:false},
            { id: 2, text: "Prof. Clodomir Coradini", correct:false},
            { id: 3, text: "Profª Simone Regina da Silva", correct:true},
            { id: 4, text: "Prof. Vinicius Pierri", correct:false},

        ],
    },
    {
        question: "Quem é o/a coordenador/a do curso de Pedagogia?",
        answers: [
            { id: 1, text: "Profª Deise Clea Leonel", correct:false},
            { id: 2, text: "Prof. Jackson Alexsandro Peres", correct:true},
            { id: 3, text: "Prof. Fabricio Antonio Antunes Soares", correct:false},
            { id: 4, text: "Profª Luzinete Carpin Niedzielnk", correct:false},

        ],
    },
    {
        question: "Quem é o/a coordenador/a do curso de Administração?",
        answers: [
            { id: 1, text: "Prof. Alexandre Lisboa da Silva", correct:true},
            { id: 2, text: "Prof. Antonio José Bicca", correct:false},
            { id: 3, text: "Profª Fabiana Elisa Boff Silveira", correct:false},
            { id: 4, text: "Profª Mariane Rosineide Estafano", correct:false},

        ],
    },
    {
        question: "Quem é o/a coordenador/a do curso de Processos Gerenciais?",
        answers: [
            { id: 1, text: "Profª Fabiana Witt", correct:false},
            { id: 2, text: "Prof. Antonio José Bicca", correct:false},
            { id: 3, text: "Prof. Marcelo Roberto da Silva", correct:false},
            { id: 4, text: "Profª Fernanda de Matos Sanchez", correct:true},

        ],
    },
    {
        question: "Quem é o/a professor/a responsável pelo programa de pesquisa 'ilab' da FMP?",
        answers: [
            { id: 1, text: "Prof. Clodomir Coradini", correct:false},
            { id: 2, text: "Profª Daniela Amorim ", correct:true},
            { id: 3, text: "Profª Simone Regina da Silva", correct:false},
            { id: 4, text: "Prof. Rafael Novo da Rosa", correct:false},

        ],
    },
    {
        question: "Onde foi realizada a 9ª edição do projeto fruto do conhecimento?",
        answers: [
            { id: 1, text: "Praça 7 de Setembro", correct:true},
            { id: 2, text: "Praça 11 de Novembro", correct:false},
            { id: 3, text: "Praça 15 de Março", correct:false},
            { id: 4, text: "Praça 8 de Agosto", correct:false},

        ],
    },
    {
        question: "Qual a duração do curso de ADS?",
        answers: [
            { id: 1, text: "2,5 anos", correct:true},
            { id: 2, text: "4 anos", correct:false},
            { id: 3, text: "3,5 anos", correct:false},
            { id: 4, text: "2 anos", correct:false},

        ],
    },
    {
        question: "Qual a duração do curso de Processos Gerenciais?",
        answers: [
            { id: 1, text: "2,5 anos", correct:false},
            { id: 2, text: "4 anos", correct:false},
            { id: 3, text: "3,5 anos", correct:false},
            { id: 4, text: "2 anos", correct:true},

        ],
    },
    {
        question: "Qual o horário de atendimento da biblioteca da FMP?",
        answers: [
            { id: 1, text: "07h às 12h e 13h ás 19h", correct:false},
            { id: 2, text: "08h às 12h e 14h às 20h", correct:false},
            { id: 3, text: "07h às 13h e 13h às 21h", correct:true},
            { id: 4, text: "08h às 13h e 14h às 20:30h", correct:false},

        ],
    },
    {
        question: "A partir de qual Lei a instituição passou a ser denominada: Faculdade Municipal de Palhoça - Educadora Marileia Silveira da Costa?",
        answers: [
            { id: 1, text: "Lei nº 5.234", correct:false},
            { id: 2, text: "Lei nº 6.575", correct:false},
            { id: 3, text: "Lei nº 3.857", correct:false},
            { id: 4, text: "Lei nº 4.670", correct:true},

        ],
    },
    {
        question: "Quando foi realizado o vestibular 2025-2 da FMP?",
        answers: [
            { id: 1, text: "7 de junho de 2025", correct:true},
            { id: 2, text: "8 de julho de 2025", correct:false},
            { id: 3, text: "6 de junho de 2025", correct:false},
            { id: 4, text: "9 de julho de 2025", correct:false},

        ],
    },
]

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Próxima";
    showQuestion();
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach((answer) => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.dataset.id = answer.id;
        button.classList.add("btn");
        button.addEventListener("click", selectAnswer);
        answerButtons.appendChild(button);
    });
}

function selectAnswer(e) {
    answers = questions[currentQuestionIndex].answers;
    const correctAnswer = answers.filter((answer) => answer.correct == true)[0];
    
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.id == correctAnswer.id;
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect")
    }
    Array.from(answerButtons.children).forEach((button) => {
        if(button.dataset.id == correctAnswer.id) {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore() {
    resetState();
    questionElement.innerHTML = `Você acertou ${score} de ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
})

startQuiz();