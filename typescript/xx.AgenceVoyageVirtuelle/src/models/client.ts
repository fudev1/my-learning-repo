// Représente un client avec les informations de base


import { IClient } from "../interfaces/IClient";

export class Client implements IClient {
    
    // Attributs directement dans le constructeur
    constructor(
        private _Id: number,
        private _Firstname: string,
        private _Lastname: string, 
        private _Email: string, 
        private _Phone: number
    ) {}

    // Prop's
    get Id(): number {
        return this._Id;
    }

    get Firstname(): string {
        return this._Firstname;
    }

    get Lastname(): string {
        return this._Lastname;
    }

    get Email(): string {
        return this._Email;
    }

    get Phone(): number {
        return this._Phone;
    }
}
