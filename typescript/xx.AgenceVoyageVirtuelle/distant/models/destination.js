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
    get Id() {
        return this._Id;
    }
    get Name() {
        return this._Nom;
    }
    get Description() {
        return this._Description;
    }
    get Latitude() {
        return this._Latitude;
    }
    get Longitude() {
        return this._Longitude;
    }
    // Copie défensive (spread)
    get Attractions() {
        return [...this._Attractions];
        // Tableau de chaine de caractères 
        // L'opérateur spread [...] crée une nouvelle copie superficielle du tableau
        // Suffisant car les chaines sont immuables en ts
    }
    // Copie défensive (map):
    get Hotels() {
        return this._Hotels.map(hotel => (Object.assign({}, hotel)));
        // Tableau d'objets (name + rating)
        // Si on copie avec un spead, on aurait les mêmes objets
        // un spread garde les mêmes références en adresse mémoire
        // Donc modifier un objet dans la copie modifiera aussi l'objet original
        // Pour éviter cela on peut utiliser map
    }
    displayDetailsDestination() {
        console.log(`\nDestination ${this.Id} : ${this.Name}`);
        console.log(`Description : ${this.Description}`);
        console.log(`Coordonnées : lat = ${this.Latitude}, long = ${this.Longitude}`);
        console.log(`Attractions:`);
        this.Attractions.forEach(Attraction => console.log(`- ${Attraction}`));
        console.log(`Hôtels :`);
        this.Hotels.forEach(Hotel => console.log(`- ${Hotel.name} (${Hotel.rating} / 5 étoiles)`));
    }
}
exports.Destination = Destination;
