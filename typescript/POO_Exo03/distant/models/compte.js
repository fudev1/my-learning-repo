"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Compte = void 0;
class Compte {
    constructor() {
        this._Solde = 0;
    }
    // Prop's
    get Numero() {
        return this._Numero;
    }
    set Numero(numero) {
        this._Numero = numero;
    }
    get Solde() {
        return this._Solde;
    }
    set Solde(solde) {
        this._Solde = solde;
    }
    get Titulaire() {
        return this._Titulaire;
    }
    set Titulaire(titulaire) {
        this._Titulaire = titulaire;
    }
    // Méthodes
    Retrait(montant) {
        if (montant > 0) {
            this._Solde -= montant;
        }
    }
    Depot(montant) {
        if (montant > 0) {
            this._Solde += montant;
        }
    }
}
exports.Compte = Compte;
