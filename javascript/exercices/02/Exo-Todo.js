const todos = [
    {id: 1, name: 'Ma todo 1', description: 'Ma todo 1 desc', completed: false},
    {id: 2, name: 'Ma todo 2', description: 'Ma todo 2 desc', completed: true},
    {id: 3, name: 'Ma todo 3', description: 'Ma todo 3 desc', completed: false},
    {id: 4, name: 'Ma todo 4', description: 'Ma todo 4 desc', completed: false},
];

let newTodos = [...todos, {id: 5, name: 'Ma todo 5', description: 'Ma todo 5 desc', completed: false}];

const handleCompleteTask = (id) => {
    return newTodos.map(todo => (todo.id === id ? {...todo, completed: true} : todo))
};

newTodos = handleCompleteTask(3);
console.log('Modification effectuée : ', newTodos);

const showCompletedTasks = (list) => {
    return list.filter(todo => todo.completed === true)
};
console.log('Seulement les terminées :', showCompletedTasks(newTodos));
