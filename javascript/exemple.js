function performOperation(people, operation) {
    const currentYear = new Date().getFullYear();

    switch(operation) {
        case 'getAdults':
            return people.filter(person => currentYear - person.birthYear > 18).map(person => person.name);
        case 'calculateAges':
            return people.map(person => (
                {...person, age: currentYear - person.birthYear}
            ));
        case 'displayDetails':
            return people.map(person => `${person.name} a ${currentYear - person.birthYear} ans`);
        default:
            return 'Invalid operation';
    }
};

let people = [
    {
        name: 'Strimelle',
        birthYear: 2000
    },
    {
        name: 'Kimstaris',
        birthYear: 2010
    },
    {
        name: 'Chaineux',
        birthYear: 1980
    }
];

console.log(performOperation(people, 'getAdults'));
console.log(performOperation(people, 'calculateAges'));
console.log(performOperation(people, 'displayDetails'));



