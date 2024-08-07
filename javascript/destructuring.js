// Destructuring de tableaux
const arr = ['Joël', 'Patrick', 'Samy'];

// Lors du destructuring, nous déclarons une constante qui sera déclarée sous la forme
// d'un tableau. Le nom des constantes PEUT (pas obligatoire) être le même que les valeurs du tableau.
// Mais ce qui importe, c'est leur position dans le tableau de la constante de destructuring
const [premierIndex, deuxiemeIndex] = arr;

console.log(premierIndex, deuxiemeIndex);


// Destructuring d'objects
const user = {id: 1, nom: 'Renard', prenom: 'Stéphane', email: 'step.renard@gmail.com'};

// Lors du destructuring, nous déclarons une constante qui sera déclarée sous la forme
// d'un object. Le nom des constantes DOIT (obligatoire) être le même que le nom des clés de l'object.
// L'ordre n'importe pas du tout, tant que le nom des clés est respecté.
const {nom, email, id, prenom} = user;

console.log(nom, email, id, prenom);
