"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const userInput_1 = require("./userInput");
const team_1 = require("./team");
const tournament_1 = require("./tournament");
const readline_sync_1 = __importDefault(require("readline-sync"));
function announceWinner(result, team1, team2) {
    if (result.team1Wins === result.team2Wins) {
        console.log("\nRésultat final : Egalité avec chacune des équipes ayant remporté 3 duels.");
    }
    else if (result.winner) {
        console.log(`\nRésultat final : ${result.winner.name} gagne avec ${result.winner === team1 ? result.team1Wins : result.team2Wins} victoires contre ${result.winner === team1 ? result.team2Wins : result.team1Wins}`);
    }
    else {
        console.log("\nRésultat final : Egalité !");
    }
}
function displayTeam(team) {
    console.log(`\nEquipe: ${team.name}`);
    console.table(team.pokemons.map(pokemon => ({
        id: pokemon.id,
        NomPokemon: pokemon.name,
        Hauteur: `${pokemon.height * 10} cm`,
        Poids: `${pokemon.weight} kg`,
        Types: pokemon.types.map(type => type.type.name).join(', ')
    })));
}
function diplayFinalTeams(team1, team2) {
    console.log(`\nEtat final des équipes après le tournoi :`);
    console.log(`\nEquipe : ${team1.name}`);
    console.table(team1.pokemons.map(pokemon => ({
        NomPokemon: pokemon.name,
        Status: pokemon.status
    })));
    console.log(`\nEquipe : ${team2.name}`);
    console.table(team2.pokemons.map(pokemon => ({
        NomPokemon: pokemon.name,
        Status: pokemon.status
    })));
}
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("\nBienvenue dans le tournoi Pokemon !\n");
        const choice = readline_sync_1.default.question("Créer une équipe manuellement (1) ou générer aléatoirement (2) ?:");
        let userTeam;
        if (choice === "1") {
            userTeam = yield (0, userInput_1.chooseUserTeam)("Team 1");
        }
        else {
            userTeam = yield (0, team_1.generateRandomTeamOfPokemons)("Team 1");
        }
        const randomTeam = yield (0, team_1.generateRandomTeamOfPokemons)("Team Adverse");
        displayTeam(userTeam);
        displayTeam(randomTeam);
        readline_sync_1.default.question("Appuie sur Enter pour lancer le tournoi");
        const result = (0, tournament_1.startTournament)(userTeam, randomTeam);
        diplayFinalTeams(userTeam, randomTeam);
        announceWinner(result, userTeam, randomTeam);
    });
}
main();
