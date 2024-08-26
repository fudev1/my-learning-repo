import { ILivre } from "../interfaces/ILivre";
import { PrixInvalidError } from "../errors/prixInvalidError";
import { AnneePublicationInvalid } from "../errors/anneePublicationInvalid";

export abstract class Livre implements ILivre {
  // Attributs
  private _Titre: string; // Doit être iniutialisé au plus tard au premier appel
  public Auteur?: string | undefined | null; // Mon éléments est nullable
  private _AnneePublication: number | undefined = 1995;
  private _Prix: number;

  constructor(
    titre: string,
    auteur: string,
    anneePublication: number | undefined = new Date().getFullYear(),
    prix: number
  ) {
    // Vérification dju prix, il ne doit pas être négatif
    if (prix < 0) {
      throw new PrixInvalidError();
    }
    const anneeActuelle: number = new Date().getFullYear();

    // Vérification de l'année de publication, elle doit être réaliste
    if (anneePublication < 1800) {
      throw new AnneePublicationInvalid(
        " L'année de publication ne peut être inférieur a 1800"
      );
    } else if (anneePublication > anneeActuelle) {
      throw new AnneePublicationInvalid(
        "L'année de publciation ne peut être ultérieur a m'année en cours "
      );
    }

    this._AnneePublication = anneePublication;
    this._Titre = titre;
    this.Auteur = auteur;
    this._Prix = prix;
  }

  // Prop's

  // (set) => titre en ecriture
  private set Titre(titre: string) {
    this._Titre = titre;
  }

  // (get) => titre en lecture
  get Titre(): string {
    return this._Titre;
  }

  // (set)
  private set AnneePublication(anneePublication: number | undefined) {
    this._AnneePublication = anneePublication;
  }

  // (get)
  get AnneePublication(): number | undefined {
    return this._AnneePublication;
  }

  private set Prix(prix: number) {
    this._Prix = prix;
  }

  // (get)
  get Prix(): number {
    return this._Prix;
  }

  // Méthodes => Comportements logique a notre class (la rendre plus dynamique et fonctionnel pour la logique métier)
  AfficherLivre(): void {
    console.log("------------");
    console.log(
      `Descrition : \n - ${this._Titre} \n - ${this.Auteur} \n - ${this._AnneePublication}`
    );
    console.log("------------");
  }

  abstract QuiSuisJe(): void;
}
