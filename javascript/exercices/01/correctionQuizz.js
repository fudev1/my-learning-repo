const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const questions = [
    {
        question: 'Quelle est la capitale de la Belgique',
        choices: ['Londres', 'Berlin', 'Bruxelles', 'Madrid'],
        correctAnswer: 2
    },
    {
        question: 'La poule ou l\'oeuf ?',
        choices: ['Poule', 'Oeuf', 42, 'Aucun des trois'],
        correctAnswer: 2
    },
    {
        question: 'De quel univers vient le capitaine Picard',
        choices: ['Pirates des caraïbes', 'Star Wars', 'Star Trek', 'Jumanji'],
        correctAnswer: 2
    },
    {
        question: 'Qui va gagner la prochaine coupe de monde ?',
        choices: ['Belgique', 'Portugal', 'Japon', 'Brésil'],
        correctAnswer: 1
    }
];

// Fonction de randomisation d'ordre des questions dans le tableau
const randomizeArray = (array) => {
    // Math.random() return un nombre aléatoire entre 0 et 1
    // En enlevant 0.5, on obtient un nombre entre -0.5 et 0.5
    // Quand on utilise la fonction sort() (qui sert à trier un tableau)
    // Elle va placer les éléments dans un ordre aléatoire
    // parce que la comparaison entre deux éléments donne un résultat aléatoire
    return array.sort(() => Math.random() - 0.5);
};

// Fonction qui va poser une question à l'utilisateur
const askQuestionToUser = (question, callback) => {
    // question.question représente l'object passé en paramètre + sa key question
    console.log(question.question);
    for (let i = 0; i < question.choices.length; i++) {
        console.log(`${i + 1}: ${question.choices[i]}`);
    }

    rl.question("Utilisez les touches de 1 à 4 pour répondre: ", (answer) => {
        callback(parseInt(answer)) // parseInt pour récupérer int et non un string
    });
};

// Fonction qui va vérifier la réponse utilisateur
const verifyUserAnwser = (question, userAnswer) => {
    return question.correctAnswer === userAnswer - 1; // Return true ou false
};

// Fonction d'initialisation de la partie
const startQuizz = (questionIndex = 0, score = 0) => {
    // Condition qui va vérifier l'état d'avancement de la partie
    if (questionIndex >= questions.length) {
        console.log(`Bravo ! Votre score est de : ${score}/${questions.length}`);
        rl.close();
        return;
    };

    askQuestionToUser(questions[questionIndex], (userAnswer) => {
        if (verifyUserAnwser(questions[questionIndex], userAnswer)) {
            console.log('Bonne réponse !');
            score++
        } else {
            console.log('Mauvaise réponse');
        }
        startQuizz(questionIndex + 1, score)
    });
};

randomizeArray(questions);
startQuizz();
