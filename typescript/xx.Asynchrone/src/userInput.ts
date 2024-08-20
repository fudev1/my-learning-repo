import { getPokemonInfo } from "./api";
import { Pokemon, Team } from "./types";
import readlineSync from "readline-sync"; 

// permettre à l'utilisateur de choisir ses pokémons par leur nom

export async function chooseUserTeam(teamName: string): Promise<Team> {
    const pokemons: Pokemon[] = [];

    while (pokemons.length < 6) {
        const name = readlineSync.question(`\n🔸 Entre le nom du Pokemon ${pokemons.length + 1} (ex: pikachu): `);
        try {
            const pokemon = await getPokemonInfo(name);
            pokemons.push(pokemon);
            console.log(`${name} a été ajouté à ton équipe !`)
        } catch (error) {
            console.log(`Erreur: Le Pokemon ${name} n'existe pas ou n'est pas disponible.`)
        }
    }

    return { name: teamName, pokemons }
}