import { chooseUserTeam } from "./userInput";
import { generateRandomTeamOfPokemons } from "./team";
import { startTournament } from "./tournament";
import { Team, PokemonWithStatus, DuelResult } from "./types";
import readlineSync from 'readline-sync';


function announceWinner(result: DuelResult, team1: Team, team2: Team) {
    if (result.team1Wins === result.team2Wins) {
        console.log("\nRésultat final : Egalité avec chacune des équipes ayant remporté 3 duels.");
    } else if (result.winner) {
        console.log(`\nRésultat final : ${result.winner.name} gagne avec ${result.winner === team1 ? result.team1Wins : result.team2Wins} victoires contre ${result.winner === team1 ? result.team2Wins : result.team1Wins}`);
    } else {
        console.log("\nRésultat final : Egalité !");
    }
}


function displayTeam(team: Team) {
    console.log(`\nEquipe: ${team.name}`);
    console.table(team.pokemons.map(pokemon => ({
        id: pokemon.id,
        NomPokemon: pokemon.name,
        Hauteur: `${pokemon.height * 10} cm`,
        Poids: `${pokemon.weight} kg`,
        Types: pokemon.types.map(type => type.type.name).join(', ')
    })));
}

function diplayFinalTeams(team1: Team, team2: Team) {
    console.log(`\nEtat final des équipes après le tournoi :`);

    console.log(`\nEquipe : ${team1.name}`);
    console.table((team1.pokemons as PokemonWithStatus[]).map(pokemon => ({
        NomPokemon: pokemon.name,
        Status: pokemon.status  
    })));

    console.log(`\nEquipe : ${team2.name}`);
    console.table((team2.pokemons as PokemonWithStatus[]).map(pokemon => ({
        NomPokemon: pokemon.name,
        Status: pokemon.status  
    })));
}  




async function main() {
    console.log("\nBienvenue dans le tournoi Pokemon !\n");

    const choice = readlineSync.question("Créer une équipe manuellement (1) ou générer aléatoirement (2) ?:")

    let userTeam: Team;
    if (choice === "1"){
        userTeam = await chooseUserTeam("Team 1");
    } else {
        userTeam = await generateRandomTeamOfPokemons("Team 1");
    }

    const randomTeam = await generateRandomTeamOfPokemons("Team Adverse");

    displayTeam(userTeam);
    displayTeam(randomTeam);

    readlineSync.question("Appuie sur Enter pour lancer le tournoi");

    const result = startTournament(userTeam, randomTeam);

    diplayFinalTeams(userTeam, randomTeam);

    announceWinner(result, userTeam, randomTeam);
}

main();
