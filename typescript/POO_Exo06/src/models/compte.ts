import { Personne } from "./personne";

export abstract class Compte {
  //Attributs
  private _Numero!: string;
  protected _Solde: number = 0;
  private _Titulaire!: Personne;

  constructor(numero: string, solde: number, titulaire: Personne) {
    this._Numero = numero;
    this._Solde = solde;
    this._Titulaire = titulaire;
  }

  // Prop's
  get Numero(): string {
    return this._Numero;
  }

  protected set Numero(numero: string) {
    this._Numero = numero;
  }

  get Solde(): number {
    return this._Solde;
  }

  protected set Solde(solde: number) {
    this._Solde = solde;
  }

  get Titulaire(): Personne {
    return this._Titulaire;
  }

  private set Titulaire(titulaire: Personne) {
    this._Titulaire = titulaire;
  }

  // Méthodes
  Retrait(montant: number): void {
    if (montant > 0) {
      this._Solde -= montant;
    }
  }

  Depot(montant: number): void {
    if (montant > 0) {
      this._Solde += montant;
    }
  }

  protected abstract CalculInteret(): number;

  Appliquerinteret(): void {
    this._Solde += this.CalculInteret();
  }
}