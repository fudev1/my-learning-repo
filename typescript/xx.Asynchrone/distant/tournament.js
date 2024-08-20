"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.startTournament = startTournament;
const battle_1 = require("./battle");
const readline_sync_1 = __importDefault(require("readline-sync"));
function startTournament(team1, team2) {
    let team1Wins = 0;
    let team2Wins = 0;
    const team1WithStatus = [];
    const team2WithStatus = [];
    for (let i = 0; i < team1.pokemons.length; i++) {
        const pokemon1 = team1.pokemons[i];
        const pokemon2 = team2.pokemons[i];
        console.log(`\nPokemon ${i + 1}: ${pokemon1.name} VS ${pokemon2.name}`);
        const winnerName = (0, battle_1.battle)(pokemon1, pokemon2);
        let pokemon1Status = "😏";
        let pokemon2Status = "😏";
        if (winnerName === pokemon1.name) {
            team1Wins++;
            pokemon2Status = "😵";
            console.log(`${pokemon1.name} remporte le duel !`);
        }
        else if (winnerName === pokemon2.name) {
            team2Wins++;
            pokemon1Status = "😵";
            console.log(`${pokemon2.name} remporte le duel !`);
        }
        else {
            console.log("Aucun des deux n'a gagné le duel, c'est une égalité !");
        }
        team1WithStatus.push(Object.assign(Object.assign({}, pokemon1), { status: pokemon1Status }));
        team2WithStatus.push(Object.assign(Object.assign({}, pokemon2), { status: pokemon2Status }));
        readline_sync_1.default.question("Appuie sur Enter pour passer au combat suivant...");
    }
    team1.pokemons = team1WithStatus;
    team2.pokemons = team2WithStatus;
    const winner = team1Wins > team2Wins ? team1 : team2;
    return { team1Wins, team2Wins, winner };
}
