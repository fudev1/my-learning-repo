import { getPokemonInfo } from "./api";
import { Pokemon, Team } from "./types";

// permettre à l'utilisateur de choisir ses pokémons par leur nom

export async function chooseUserTeam(teamName: string, pokemonNames: string[]): Promise<Team> {
    const pokemons: Pokemon[] = [];
    for (const name of pokemonNames) {
        const pokemon = await getPokemonInfo(name);
        pokemons.push(pokemon);
    }
    return { name: teamName, pokemons }
}