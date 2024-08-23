import { Compte } from "./compte";

export class Courant extends Compte {
  private static _TAUXPOSTIF: number = 0.03;
  private static _TAUXNEGATIF: number = 0.0975;

  private _LigneDeCredit!: number;

  get LigneDeCredit(): number {
    return this._LigneDeCredit;
  }
  set LigneDeCredit(ligneDeCredit: number) {
    this._LigneDeCredit = ligneDeCredit;
  }

  Retrait(montant: number): void {
    if (this.Solde - montant >= this._LigneDeCredit) {
      super.Retrait(montant);
    }
  }

  protected CalculInteret(): number {
    let interet: number;
    if (this.Solde >= 0) {
      interet = this._Solde * Courant._TAUXPOSTIF;
    } else {
      interet = this._Solde * Courant._TAUXNEGATIF;
    }
    return interet;
  }
}
