"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Livre = void 0;
class Livre {
    constructor() {
        this._AnneePublication = 1995;
    }
    // Prop's
    // (set) => titre en ecriture
    set Titre(titre) {
        this._Titre = titre;
    }
    // (get) => titre en lecture
    get Titre() {
        return this._Titre;
    }
    // (set)
    set AnneePublication(anneePublication) {
        this._AnneePublication = anneePublication;
    }
    // (get)
    get AnneePublication() {
        return this._AnneePublication;
    }
    // Méthodes => Comportements logique a notre class (la rendre plus dynamique et fonctionnel pour la logique métier)
    AfficherLivre() {
        console.log("------------");
        console.log(`Descrition : \n - ${this._Titre} \n - ${this.Auteur} \n - ${this._AnneePublication}`);
        console.log("------------");
    }
}
exports.Livre = Livre;
