import { ICustomer } from "./iCustomer";
import { Personne } from "../models/personne";

export interface IBanker extends ICustomer {
  AppliquerInteret(): void;
  readonly Titulaire: Personne;
  readonly Nom: string;
}
