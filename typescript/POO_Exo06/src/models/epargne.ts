import { Compte } from "./compte";
import { Personne } from "./personne";

export class Epargne extends Compte {
  private static _TAUX: number = 0.045;
  private _DateDernierRetrait!: Date;

  constructor(numero: string, solde: number, titulaire: Personne) {
    super(numero, solde, titulaire);
  }

  get DateDernierRetrait(): Date {
    return this._DateDernierRetrait;
  }

  Retrait(montant: number): void {
    if (this.Solde - montant >= 0) {
      super.Retrait(montant);
      this._DateDernierRetrait = new Date();
    }
  }

  protected CalculInteret(): number {
    return this._Solde * Epargne._TAUX;
  }
}
