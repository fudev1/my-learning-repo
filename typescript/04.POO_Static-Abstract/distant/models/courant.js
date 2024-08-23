"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Courant = void 0;
class Courant {
    constructor() {
        this._Solde = 0;
    }
    // Prop's
    get Numero() {
        return this._Numero;
    }
    set Numero(solde) {
        this._Numero = solde;
    }
    get Solde() {
        return this._Solde;
    }
    set Solde(solde) {
        this._Solde = solde;
    }
    get LigneDeCredit() {
        return this._LigneDeCredit;
    }
    set LigneDeCredit(ligneDeCredit) {
        this._LigneDeCredit = ligneDeCredit;
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
            this.Solde -= montant;
        }
    }
    Depot(montant) {
        if (montant > 0) {
            this.Solde += montant;
        }
    }
}
exports.Courant = Courant;
