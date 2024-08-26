"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Banque = void 0;
class Banque {
    constructor(nom) {
        this._Comptes = new Map();
        this._Nom = nom;
    }
    // Prop's
    get Nom() {
        return this._Nom;
    }
    set Nom(nom) {
        this._Nom = nom;
    }
    // Méthodes
    ObtenirCompte(numero) {
        if (this._Comptes.has(numero)) {
            return this._Comptes.get(numero);
        }
    }
    // Ajouter
    Ajouter(compte) {
        if (!this._Comptes.has(compte.Numero)) {
            this._Comptes.set(compte.Numero, compte);
        }
    }
    // Supprimer
    Supprimer(numero) {
        if (this._Comptes.has(numero)) {
            this._Comptes.delete(numero);
        }
    }
    // AvoirDesComptes
    AvoirDesComptes(titulaire) {
        let avoir = 0;
        this._Comptes.forEach((value, key) => {
            if (value.Titulaire.Nom === titulaire.Nom) {
                avoir += value.Solde;
            }
        });
        return avoir;
    }
}
exports.Banque = Banque;
