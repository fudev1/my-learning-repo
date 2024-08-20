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
exports.chooseUserTeam = chooseUserTeam;
const api_1 = require("./api");
const readline_sync_1 = __importDefault(require("readline-sync"));
// permettre à l'utilisateur de choisir ses pokémons par leur nom
function chooseUserTeam(teamName) {
    return __awaiter(this, void 0, void 0, function* () {
        const pokemons = [];
        while (pokemons.length < 6) {
            const name = readline_sync_1.default.question(`\n🔸 Entre le nom du Pokemon ${pokemons.length + 1} (ex: pikachu): `);
            try {
                const pokemon = yield (0, api_1.getPokemonInfo)(name);
                pokemons.push(pokemon);
                console.log(`${name} a été ajouté à ton équipe !`);
            }
            catch (error) {
                console.log(`Erreur: Le Pokemon ${name} n'existe pas ou n'est pas disponible.`);
            }
        }
        return { name: teamName, pokemons };
    });
}
