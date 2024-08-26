export class PrixInvalidError extends Error {
  constructor(message: string = "Prix invalide") {
    super(message);
    this.name = "PrixInvalidError";
  }
}
