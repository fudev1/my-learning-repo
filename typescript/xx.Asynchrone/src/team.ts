import { getPokemonInfo } from "./api";
import { Pokemon, Team } from "./types";

const POKEMON_NUMBER = 6;
const MAX_POKEMON_ID = 1000;

// Générer une équipe de pokémons aléatoires

export async function generateRandomTeamOfPokemons(teamName: string): Promise<Team> {
    const pokemons: Pokemon[] = [];
    for (let i = 0; i < POKEMON_NUMBER; i++) {
        const randomId = Math.floor(Math.random() * (MAX_POKEMON_ID) + 1);
        const randomPokemon = await getPokemonInfo(randomId.toString());
        pokemons.push(randomPokemon)
    }
    return { name: teamName, pokemons }
}