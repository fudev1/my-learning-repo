"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
class Client {
    // Attributs directement dans le constructeur
    constructor(_Id, _Firstname, _Lastname, _Email, _Phone) {
        this._Id = _Id;
        this._Firstname = _Firstname;
        this._Lastname = _Lastname;
        this._Email = _Email;
        this._Phone = _Phone;
    }
    // Prop's
    get Id() {
        return this._Id;
    }
    get Firstname() {
        return this._Firstname;
    }
    get Lastname() {
        return this._Lastname;
    }
    get Email() {
        return this._Email;
    }
    get Phone() {
        return this._Phone;
    }
}
exports.Client = Client;
