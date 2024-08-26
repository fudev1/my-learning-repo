export class AnneePublicationInvalid extends Error {
  constructor(message: string = "Année de publication invalide") {
    super(message);
    this.name = "AnneePublicationInvalid";
  }
}
