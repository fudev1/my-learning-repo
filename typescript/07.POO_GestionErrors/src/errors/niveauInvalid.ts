export class NiveauInvalid extends Error {
  constructor(message: string = "Le niveau du livre n'est pas reconnu !") {
    super(message);
    this.name = "NiveauInvalid";
  }
}
