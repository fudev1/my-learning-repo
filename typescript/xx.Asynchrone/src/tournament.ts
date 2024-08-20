import { Team, DuelResult, PokemonWithStatus, PokemonStatus } from "./types";
import { battle } from "./battle";
import readlineSync from 'readline-sync';

export function startTournament(team1: Team, team2: Team): DuelResult {
    let team1Wins = 0;
    let team2Wins = 0;

    const team1WithStatus: PokemonWithStatus[] = [];
    const team2WithStatus: PokemonWithStatus[] = [];

    for (let i = 0; i < team1.pokemons.length; i++) {
        const pokemon1 = team1.pokemons[i];
        const pokemon2 = team2.pokemons[i];

        console.log(`\nPokemon ${i + 1}: ${pokemon1.name} VS ${pokemon2.name}`);
        const winnerName = battle(pokemon1, pokemon2);

        let pokemon1Status: PokemonStatus = "😏"
        let pokemon2Status: PokemonStatus = "😏"

        if (winnerName === pokemon1.name) {
            team1Wins++;
            pokemon2Status = "😵";
            console.log(`${pokemon1.name} remporte le duel !`);
        } else if (winnerName === pokemon2.name) {
            team2Wins++;
            pokemon1Status = "😵";
            console.log(`${pokemon2.name} remporte le duel !`);
        } else {
            console.log("Aucun des deux n'a gagné le duel, c'est une égalité !");
        }

        team1WithStatus.push({ ...pokemon1, status: pokemon1Status });
        team2WithStatus.push({ ...pokemon2, status: pokemon2Status });

        readlineSync.question("Appuie sur Enter pour passer au combat suivant...");
    }

    (team1.pokemons as PokemonWithStatus[]) = team1WithStatus;
    (team2.pokemons as PokemonWithStatus[]) = team2WithStatus;

    const winner = team1Wins > team2Wins ? team1 : team2;
    return { team1Wins, team2Wins, winner };
}
