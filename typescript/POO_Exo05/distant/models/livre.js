"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Livre = void 0;
class Livre {
    // Prop's
    // (`set`) => Ecriture seule pour le titre
    // (équivalent à getter / setter en python)
    set Titre(titre) {
        this._Titre = titre;
    }
    get Titre() {
        return this._Titre;
    }
    // (`get`) => Lecture seule pour l'année de publication
    get AnneePublication() {
        return this._AnneePublication;
    }
}
exports.Livre = Livre;
