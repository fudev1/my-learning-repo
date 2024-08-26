"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Personne = void 0;
class Personne {
    constructor(nom, prenom, dateNaissance) {
        this._Nom = nom;
        this._Prenom = prenom;
        this._DateNaissance = dateNaissance;
    }
    // Prop's
    get Nom() {
        return this._Nom;
    }
    set Nom(nom) {
        this._Nom = nom;
    }
    get Prenom() {
        return this._Prenom;
    }
    set Prenom(prenom) {
        this._Prenom = prenom;
    }
    get DateNaissance() {
        return this._DateNaissance;
    }
    set DateNaissance(dateNaissance) {
        this._DateNaissance = dateNaissance;
    }
}
exports.Personne = Personne;
