"use strict";
// L'utilisation d'attributs `private` dépend du contexte de l'objet : 
// SI implémenter l'interface `IDestination` sans ajouter de logique ALORS pas besoin 
// SI ajouter de la logique supplémentaire ALORS peut être utile
Object.defineProperty(exports, "__esModule", { value: true });
exports.Destination = void 0;
class Destination {
    constructor(id, nom, description, latitude, longitude, attractions, hotels) {
        this._Id = id;
        this._Nom = nom;
        this._Description = description;
        this._Latitude = latitude;
        this._Longitude = longitude;
        this._Attractions = attractions;
        this._Hotels = hotels;
    }
    // Prop's
    // Chaque Attribut a un Getter correspondant 
    // (permet un accès en lecture seule depuis l'extérieur de la classe)
    get id() {
        return this._Id;
    }
    get name() {
        return this._Nom;
    }
    get description() {
        return this._Description;
    }
    get latitude() {
        return this._Latitude;
    }
    get longitude() {
        return this._Longitude;
    }
    // Copie défensive (spread)
    get attractions() {
        return [...this._Attractions];
        // Tableau de chaine de caractères 
        // L'opérateur spread [...] crée une nouvelle copie superficielle du tableau
        // Suffisant car les chaines sont immuables en ts
    }
    // Copie défensive (map):
    get hotels() {
        return this._Hotels.map(hotel => (Object.assign({}, hotel)));
        // Tableau d'objets (name + rating)
        // Si on copie avec un spead, on aurait les mêmes objets
        // un spread garde les mêmes références en adresse mémoire
        // Donc modifier un objet dans la copie modifiera aussi l'objet original
        // Pour éviter cela on peut utiliser map
    }
    displayDetailsDestination() {
        console.log(`\nDestination ${this.id} : ${this.name}`);
        console.log(`Description : ${this.description}`);
        console.log(`Coordonnées : lat = ${this.latitude}, long = ${this.longitude}`);
        console.log(`Attractions:`);
        this.attractions.forEach(attraction => console.log(`- ${attraction}`));
        console.log(`Hôtels :`);
        this.hotels.forEach(hotel => console.log(`- ${hotel.name} (${hotel.rating} / 5 étoiles)`));
    }
}
exports.Destination = Destination;
