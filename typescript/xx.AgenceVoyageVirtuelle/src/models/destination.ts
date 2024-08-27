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

    get Id(): number {
        return this._Id;
    }

    get Name(): string {
        return this._Nom;
    }

    get Description(): string {
        return this._Description;
    }

    get Latitude(): number {
        return this._Latitude;
    }

    get Longitude(): number {
        return this._Longitude;
    }

    // Copie défensive (spread)
    get Attractions(): string[] {
        return [...this._Attractions] 
        // Tableau de chaine de caractères 
        // L'opérateur spread [...] crée une nouvelle copie superficielle du tableau
        // Suffisant car les chaines sont immuables en ts
    }

    // Copie défensive (map):
    get Hotels(): { name: string, rating: number }[] {
        return this._Hotels.map(hotel => ({...hotel}))
        // Tableau d'objets (name + rating)
        // Si on copie avec un spead, on aurait les mêmes objets
        // un spread garde les mêmes références en adresse mémoire
        // Donc modifier un objet dans la copie modifiera aussi l'objet original
        // Pour éviter cela on peut utiliser map
    }   



    public displayDetailsDestination(): void {
        console.log(`\nDestination ${this.Id} : ${this.Name}`);
        console.log(`Description : ${this.Description}`);
        console.log(`Coordonnées : lat = ${this.Latitude}, long = ${this.Longitude}`);
        console.log(`Attractions:`)
        this.Attractions.forEach(Attraction => console.log(`- ${Attraction}`));
        console.log(`Hôtels :`);
        this.Hotels.forEach(Hotel => console.log(`- ${Hotel.name} (${Hotel.rating} / 5 étoiles)`));
    }

}


