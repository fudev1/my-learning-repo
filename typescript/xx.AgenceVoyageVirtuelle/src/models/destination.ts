// L'utilisation d'attributs `private` dépend du contexte de l'objet : 
// SI implémenter l'interface `IDestination` sans ajouter de logique ALORS pas besoin 
// SI ajouter de la logique supplémentaire ALORS peut être utile

// le ! signifie que l'attribut est obligatoire et doit être initialisé dans le constructeur
// le ? signifie que l'attribut est optionnel et peut être initialisé dans le constructeur

// Ici le ! est un "assertion d'affectation définitive"
// Dit à TS "ne tkt pas, cette propriété sera initialisée dans le constructeur avant d'être utilisée"

import { IDestination } from "../interfaces/IDestination";

export class Destination implements IDestination {

    // Attributs en privé ET en lecture seule

    private readonly _Id!: number;
    private readonly _Nom!: string;
    private readonly _Description! : string;
    private readonly _Latitude!: number;
    private readonly _Longitude!: number;
    private readonly _Attractions!: string[];
    private readonly _Hotels!: { name: string, rating: number }[];

    constructor(id: number, nom: string, description: string, latitude: number, longitude: number, attractions: string[], hotels: { name: string, rating: number }[]) {
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

    get id(): number {
        return this._Id;
    }

    get name(): string {
        return this._Nom;
    }

    get description(): string {
        return this._Description;
    }

    get latitude(): number {
        return this._Latitude;
    }

    get longitude(): number {
        return this._Longitude;
    }

    // Copie défensive (spread)
    get attractions(): string[] {
        return [...this._Attractions] 
        // Tableau de chaine de caractères 
        // L'opérateur spread [...] crée une nouvelle copie superficielle du tableau
        // Suffisant car les chaines sont immuables en ts
    }

    // Copie défensive (map):
    get hotels(): { name: string, rating: number }[] {
        return this._Hotels.map(hotel => ({...hotel}))
        // Tableau d'objets (name + rating)
        // Si on copie avec un spead, on aurait les mêmes objets
        // un spread garde les mêmes références en adresse mémoire
        // Donc modifier un objet dans la copie modifiera aussi l'objet original
        // Pour éviter cela on peut utiliser map
    }   



    public displayDetailsDestination(): void {
        console.log(`\nDestination ${this.id} : ${this.name}`);
        console.log(`Description : ${this.description}`);
        console.log(`Coordonnées : lat = ${this.latitude}, long = ${this.longitude}`);
        console.log(`Attractions:`)
        this.attractions.forEach(attraction => console.log(`- ${attraction}`));
        console.log(`Hôtels :`);
        this.hotels.forEach(hotel => console.log(`- ${hotel.name} (${hotel.rating} / 5 étoiles)`));
    }

}


