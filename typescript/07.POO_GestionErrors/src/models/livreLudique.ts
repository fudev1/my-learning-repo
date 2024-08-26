import { Livre } from "./livre";

export class LivreLudique extends Livre {
  private _PublicCible!: string;

  constructor(
    titre: string,
    auteur: string,
    anneePublication: number | undefined = new Date().getFullYear(),
    publicCible: string,
    prix: number
  ) {
    super(titre, auteur, anneePublication, prix);
    this._PublicCible = publicCible;
  }

  private set PublicCible(publicCible: string) {
    this._PublicCible = publicCible;
  }

  get PublicCible(): string {
    return this._PublicCible;
  }

  AfficherLivre(): void {
    // Utilisation du préfixe super afin de récupéré la méthode du parent et la specialisation dans l'enfant
    super.AfficherLivre();
    console.log(` - Domaine : ${this._PublicCible}`);
    console.log("------------");
  }

  QuiSuisJe(): void {
    console.log("je suis l'instance d'un objet de type LivreLudique");
  }
}
