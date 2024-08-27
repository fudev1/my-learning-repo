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
    get id(): number {
        return this._Id;
    }

    get firstname(): string {
        return this._Firstname;
    }

    get lastname(): string {
        return this._Lastname;
    }

    get email(): string {
        return this._Email;
    }

    get phone(): number {
        return this._Phone;
    }
}
