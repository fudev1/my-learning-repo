"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bibliotheque = void 0;
class Bibliotheque {
    constructor() {
        this._Livres = new Map();
    }
    // Prop's
    //...
    // Méthode
    // Ajouter un livre
    AjouterLivre(livre) {
        if (!this._Livres.has(livre.Titre)) {
            this._Livres.set(livre.Titre, livre);
        }
    }
    // Supprimer un livre
    SupprimerLivre(titre) {
        if (this._Livres.has(titre)) {
            this._Livres.delete(titre);
        }
    }
    // Obtenir un livre
    ObtenirLivre(titre) {
        return this._Livres.get(titre);
    }
    // Afficher livres
    AfficherLivres() {
        this._Livres.forEach((livre) => {
            livre.AfficherLivre();
            livre.QuiSuisJe();
        });
    }
}
exports.Bibliotheque = Bibliotheque;
