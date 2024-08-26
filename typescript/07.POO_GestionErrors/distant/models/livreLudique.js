"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LivreLudique = void 0;
const livre_1 = require("./livre");
class LivreLudique extends livre_1.Livre {
    constructor(titre, auteur, anneePublication = new Date().getFullYear(), publicCible) {
        super(titre, auteur, anneePublication);
        this._PublicCible = publicCible;
    }
    set PublicCible(publicCible) {
        this._PublicCible = publicCible;
    }
    get PublicCible() {
        return this._PublicCible;
    }
    AfficherLivre() {
        // Utilisation du préfixe super afin de récupéré la méthode du parent et la specialisation dans l'enfant
        super.AfficherLivre();
        console.log(` - Domaine : ${this._PublicCible}`);
        console.log("------------");
    }
    QuiSuisJe() {
        console.log("je suis l'instance d'un objet de type LivreLudique");
    }
}
exports.LivreLudique = LivreLudique;
