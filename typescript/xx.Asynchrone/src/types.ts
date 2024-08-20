export interface Pokemon {
    id: number;
    name: string;
    height: number;
    weight: number;
    types : Array<{slot : number, type :{name : string}}>
}

export type PokemonStatus = "😵" | "😏";

export interface PokemonWithStatus extends Pokemon {
    status: string;
}

export interface Team {
    name: string;
    pokemons: Pokemon[];
}

export interface DuelResult {
    team1Wins: number;
    team2Wins: number;
    winner: Team ;
}

