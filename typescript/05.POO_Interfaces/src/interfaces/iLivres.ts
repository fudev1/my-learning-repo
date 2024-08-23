export interface ILivre {
  readonly Titre: string;
  readonly Auteur?: string;
  readonly AnneePublication: number | undefined;

  AfficherLivre(): void;
  QuiSuisJe(): void;
}
