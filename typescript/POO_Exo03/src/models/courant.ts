import { Compte } from "./compte";

export class Courant extends Compte {
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
}
