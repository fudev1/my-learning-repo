export class Personne {
  //Attributs
  private _Nom!: string;
  private _Prenom!: string;
  private _DateNaissance!: Date;

  constructor(nom: string, prenom: string, dateNaissance: Date) {
    this._Nom = nom;
    this._Prenom = prenom;
    this._DateNaissance = dateNaissance;
  }

  // Prop's
  get Nom(): string {
    return this._Nom;
  }

  private set Nom(nom: string) {
    this._Nom = nom;
  }

  get Prenom(): string {
    return this._Prenom;
  }

  private set Prenom(prenom: string) {
    this._Prenom = prenom;
  }

  get DateNaissance(): Date {
    return this._DateNaissance;
  }

  private set DateNaissance(dateNaissance: Date) {
    this._DateNaissance = dateNaissance;
  }
}
