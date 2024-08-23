"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Epargne = void 0;
const compte_1 = require("./compte");
class Epargne extends compte_1.Compte {
    get DateDernierRetrait() {
        return this._DateDernierRetrait;
    }
    Retrait(montant) {
        if (this.Solde - montant >= 0) {
            super.Retrait(montant);
            this._DateDernierRetrait = new Date();
        }
    }
}
exports.Epargne = Epargne;
