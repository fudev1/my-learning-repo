"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Courant = void 0;
const compte_1 = require("./compte");
class Courant extends compte_1.Compte {
    get LigneDeCredit() {
        return this._LigneDeCredit;
    }
    set LigneDeCredit(ligneDeCredit) {
        this._LigneDeCredit = ligneDeCredit;
    }
    Retrait(montant) {
        if (this.Solde - montant >= this._LigneDeCredit) {
            super.Retrait(montant);
        }
    }
}
exports.Courant = Courant;
