// Définir l'interface ICustomer
// Limiter l'accès à consulter la propriété Solde
// Utiliser les méthodes Retrait et Depot
export interface ICustomer {
  readonly Solde: number;
  Retrait(montant: number): void; // série d'instructions sans retour
  Depot(montant: number): void;
}
