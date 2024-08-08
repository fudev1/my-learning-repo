const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 8001;

// Connexion à la base de données MongoDB
mongoose.connect('mongodb://root:test123*@localhost:27017/', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connexion à la base de données réussie');
}).catch(error => {
    console.error('Erreur de connexion à la base de données :', error);
});

// Configurer EJS comme moteur de templates
app.set('view engine', 'ejs');
app.use(express.static('public'))


const db = mongoose.connection;
db.once('open', () => {
    console.log('Connexion à la base de données ouverte');

    // Ici tu peux ajouter d'autres opérations après la connexion réussie
    // par exemple, tu pourrais configurer tes routes Express ou démarrer le serveur

    // Importer le router pour les citations

    app.use('/citations', citationsRouter);
    app.use('/version', versionRouter);

    app.listen(port, () => {
        console.log(`Serveur démarré sur le port ${port}`);
    });
});






