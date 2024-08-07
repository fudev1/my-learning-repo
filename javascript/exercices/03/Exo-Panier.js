let articles = [
    {id: 1, name: 'Article 1', price: 42, quantity: 1},
    {id: 2, name: 'Article 2', price: 2, quantity: 5},
    {id: 3, name: 'Article 3', price: 6, quantity: 3},
    {id: 4, name: 'Article 4', price: 27.8, quantity: 2},
];

const addArticle = (article) => {
    articles.push(article)
};

const updateQuantity = (id, quantity) => {
    return articles.map(article => article.id === id ? {...article, quantity: quantity} : article)
};

const applyReduction = (list) => {
    return list.map(article => {
        if (article.price > 25) {
            // parseFloat sert ici à repasser notre number devenu string en number
            // toFixed() sert ici a limiter le nombre de décimales au nombre passé en param
            article.price = parseFloat((article.price * 0.9).toFixed(2))
        }
        return article;
    })
}

const calculateTotal = (list) => {
    return list.reduce((total, article) => total + (article.quantity * article.price), 0)
};

const newArticle = {id: 5, name: 'Article 5', price: 3.8, quantity: 42};
addArticle(newArticle);
console.log('Ajout d\'article :', articles);

articles = updateQuantity(2, 2);
console.log('Modification de quantité :', articles);

applyReduction(articles);
console.log('Après réduction :', articles);
console.log('Total :', calculateTotal(articles));




// const test = (a, b) => { return a + b}
// const test2 = (a, b) => a + b

// const test3 = articles.map(article => article.price * 2)
// const test4 = articles.map(article => {
//     return article.price * 2
// })