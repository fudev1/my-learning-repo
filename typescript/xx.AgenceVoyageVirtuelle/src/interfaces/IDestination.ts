// `readonly` : permet de définir que la propriété est en lecture seule
// Utile pour les données qui ne changent pas après la création de l'objet

// Interface (what) définit quelles propriétés doivent exister dans un objet (et leur type)
// Class (how) définit comment ces propriétés doivent être manipulées, gérées.


export interface IDestination {
    readonly Id: number;
    readonly Name: string;
    readonly Description: string;
    readonly Latitude: number;
    readonly Longitude: number;
    readonly Attractions: string[];
    readonly Hotels: { name: string, rating: number }[];
}