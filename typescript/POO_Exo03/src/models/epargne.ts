import { Compte } from "./compte";

export class Epargne extends Compte {
  private _DateDernierRetrait!: Date;

  get DateDernierRetrait(): Date {
    return this._DateDernierRetrait;
  }

  Retrait(montant: number): void {
    if (this.Solde - montant >= 0) {
      super.Retrait(montant);
      this._DateDernierRetrait = new Date();
    }
  }
}
