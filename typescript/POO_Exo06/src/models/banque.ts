import { Compte } from "./compte";
import { Personne } from "./personne";

export class Banque {
  //Attributs
  private _Nom!: string;
  private _Comptes: Map<string, Compte> = new Map();

  constructor(nom: string) {
    this._Nom = nom;
    this._Comptes = new Map<string, Compte>();
  }

  // Prop's
  get Nom(): string {
    return this._Nom;
  }

  private set Nom(nom: string) {
    this._Nom = nom;
  }

  // Méthodes
  ObtenirCompte(numero: string): Compte | undefined {
    if (this._Comptes.has(numero)) {
      return this._Comptes.get(numero);
    }
  }

  // Ajouter
  Ajouter(compte: Compte): void {
    if (!this._Comptes.has(compte.Numero)) {
      this._Comptes.set(compte.Numero, compte);
    }
  }

  // Supprimer
  Supprimer(numero: string): void {
    if (this._Comptes.has(numero)) {
      this._Comptes.delete(numero);
    }
  }

  // AvoirDesComptes
  AvoirDesComptes(titulaire: Personne): number {
    let avoir: number = 0;
    this._Comptes.forEach((value, key) => {
      if (value.Titulaire.Nom === titulaire.Nom) {
        avoir += value.Solde;
      }
    });
    return avoir;
  }
}
