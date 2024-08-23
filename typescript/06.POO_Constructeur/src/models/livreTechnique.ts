import { Livre } from "./livre";
// Extends pour établir la relation d'héritage avec le parent
export class LivreTechnique extends Livre {
  private _Domaine: string;
  private _Niveau: string;

  constructor(
    titre: string,
    auteur: string,
    anneePublication: number | undefined = new Date().getFullYear(),
    domaine: string,
    niveau: string
  ) {
    super(titre, auteur, anneePublication);
    this._Domaine = domaine;
    this._Niveau = niveau;
  }

  get Domaine(): string {
    return this._Domaine;
  }
  private set Domaine(domaine: string) {
    this._Domaine = domaine;
  }

  get Niveau(): string {
    return this._Niveau;
  }
  private set Niveau(niveau: string) {
    this._Niveau = niveau;
  }

  AfficherLivre(): void {
    // Utilisation du préfixe super afin de récupéré la méthode du parent et la specialisation dans l'enfant
    super.AfficherLivre();
    console.log(` - Domaine : ${this._Domaine}`);
    console.log(` - Niveau : ${this._Niveau}`);
    console.log("------------");
  }

  QuiSuisJe(): void {
    console.log("je suis l'instance d'un objet de type LivreTechique");
  }
}
