

export interface IDestination {
    readonly id: number;
    readonly name: string;
    readonly description: string;
    readonly latitude: number;
    readonly longitude: number;
    readonly attractions: string[];
    readonly hotels: { name: string, rating: number }[];
}