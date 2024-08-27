// `readonly` : permet de définir que la propriété est en lecture seule
// Utile pour les données qui ne changent pas après la création de l'objet

// Interface (what) définit quelles propriétés doivent exister dans un objet (et leur type)
// Class (how) définit comment ces propriétés doivent être manipulées, gérées.


export interface IDestination {
    readonly id: number;
    readonly name: string;
    readonly description: string;
    readonly latitude: number;
    readonly longitude: number;
    readonly attractions: string[];
    readonly hotels: { name: string, rating: number }[];
}