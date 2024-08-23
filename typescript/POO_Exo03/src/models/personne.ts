export class Personne {
  //Attributs
  private _Nom!: string;
  private _Prenom!: string;
  private _DateNaissance!: Date;

  // Prop's
  get Nom(): string {
    return this._Nom;
  }

  set Nom(nom: string) {
    this._Nom = nom;
  }

  get Prenom(): string {
    return this._Prenom;
  }

  set Prenom(prenom: string) {
    this._Prenom = prenom;
  }

  get DateNaissance(): Date {
    return this._DateNaissance;
  }

  set DateNaissance(dateNaissance: Date) {
    this._DateNaissance = dateNaissance;
  }
}
